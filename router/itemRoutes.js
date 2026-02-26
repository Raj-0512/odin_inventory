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

router.post("/new" , async(req,res)=>{
    const client = await pool.connect();

    try
    {
        const {game_name , price , quantity , platform , description , category} = req.body;

        await client.query("Begin");

        const platformId = await client.query(
            `Select platform_id from platform
             where platform_name = $1`,[platform]
        );

        const genreId = await client.query(
            `Select genre_id from genre
             where genre_name = $1`,[category]
        );

        const gameRes = await client.query(
            `insert into game(game_name,game_price,description,platform_id,genre_id)
             values ($1,$2,$3,$4,$5)
             returning game_id`,[game_name,price,description,platformId.rows[0].platform_id,genreId.rows[0].genre_id]
        );

        await client.query(
            `insert into inventory(game_id,quantity)
             values ($1,$2)`,[gameRes.rows[0].game_id,quantity]
        );

        await client.query("Commit");
        res.redirect("/items")
    }
    catch(err)
    {
        await client.query("ROLLBACK");
        console.error(err);
        res.status(500).send("Database error");
    }
    finally {
        client.release();
    }
});

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