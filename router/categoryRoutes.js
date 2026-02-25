const express = require("express");

const router = express.Router();
const pool = require("../config/db")

router.get("/" , async (req,res) =>{
    try
    {
        const categories = await getCategories();
        res.render("categories/categoryList" , {categories});
    }
    catch(err)
    {
        console.error(err);
        res.status(500).send("Database error");
    }
})

router.get("/new" , async (req,res)=>{
    res.render("categories/categoryForm");
})

router.post("/new" , async (req,res)=>{
    try
    {
        const {category} = req.body;
        await pool.query(
            `insert into genre(genre_name)
             values ($1)`,[category]
        );
        res.redirect("/categories");
    }
    catch(err)
    {
        console.error(err)
        res.status(500).send("Database Error");
    }
})

async function getCategories()
{
    const result = await pool.query(
        `Select * from genre`
    );
    return result.rows;
}



module.exports = {router , getCategories};