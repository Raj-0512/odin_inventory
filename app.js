const express = require("express");
const {urlencoded} = require("express");

const app = express();

const indexRouter = require("./router/index")
const categoryRouter = require("./router/categoryRoutes");

app.set("view engine" , "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use("/" , indexRouter);
app.use("/categories" , categoryRouter);

app.listen(3000 , (err) => {
    if(err)
    {
        console.error("Failed to start server: " , err);
    }
    else
    {
        console.log("Server is running at port 3000");
    }
})