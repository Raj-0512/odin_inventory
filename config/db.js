const {Pool} = require("pg");

const pool = new Pool(
    {
        user:"postgres",
        password:"Raj12182231",
        host:"localhost",
        database:"inventory_db",
        port:5432
    }
);

module.exports = pool;