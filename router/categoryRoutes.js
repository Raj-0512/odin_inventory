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

async function getCategories()
{
    const result = await pool.query("Select * from genre");
    return result.rows;
}



module.exports = router;