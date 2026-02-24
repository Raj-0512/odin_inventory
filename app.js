const express = require("express");


const app = express();

const indexRouter = require("./router/index")
const {router:categoryRouter} = require("./router/categoryRoutes");
const itemRouter = require("./router/itemRoutes");

app.set("view engine" , "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use("/" , indexRouter);
app.use("/categories" , categoryRouter);
app.use("/items" , itemRouter);

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