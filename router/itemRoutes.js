const express = require("express");

const router = express.Router();

const pool = require("../config/db")

const {getCategories:getCategories} = require("../router/categoryRoutes");

router.get("/",async (req,res) =>{
    try
    {
        const game = await getGames();
        const categories = await getCategories();
        res.render("items/itemList" , {game,categories});
    }
    catch (err)
    {
        if(err)
        {
            console.error(err);
            res.status(500).send("Database error");
        }
    }
})

router.get("/new" , async (req,res) =>{
    try
    {
        const categories = await getCategories();
        res.render("items/itemForm" , {categories});
    }
    catch(err)
    {
        console.error(err);
        res.status(500).send("Database error");
    }
})

router.get("/:id" , async (req,res)=>{
    try
    {
        const id = req.params.id;
        const result = await pool.query(
            `Select g.* , p.platform_name , gn.genre_name , i.quantity
             from game g 
             join platform p on p.platform_id = g.platform_id
             join genre gn on gn.genre_id = g.genre_id
             join inventory i on i.game_id = g.game_id
             where g.game_id = $1` , [id]
        )
        const item = result.rows[0];
        console.log(item);
        res.render("items/itemDetail" , {item})
    }
    catch(err)
    {
        console.error(err);
        res.status(500).send("Database Error");
    }
})

async function getGames()
{
    const game = await pool.query(
        `Select g.* , p.platform_name , gn.genre_name , i.quantity
         from game g 
         join genre gn on gn.genre_id = g.genre_id
         join inventory i on i.game_id = g.game_id
         join platform p on p.platform_id = g.platform_id`);
    return game.rows;
}

module.exports = router;