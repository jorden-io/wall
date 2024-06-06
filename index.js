import express from "express";
const app = express();
import pg from "pg";
import cors from "cors";
import fs from "fs";
import https from "https";

//DB CONNECTION
const pool = new pg.Client({
  user: "postgres",
  password: "postgres",
  host: "pgdb.ch608saq4znm.us-east-2.rds.amazonaws.com",
  port: 5431,
  database: "postgres",
  ssl: true,
});
pool.connect();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.listen(8000, () => console.log("api running on 8000"));

//app.get("/", (req, res) => res.json("works"));
app.get("/", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM messages");
    res.json(data.rows);
    console.log(res.json(data.rows));
  } catch {}
});

app.post("/message", async (req, res) => {
  try {
    const {data} = req.body;
    const message = await pool.query("INSERT INTO messages (data) VALUES ($1) ", [data]);
    res.json(message.rows);
    console.log(res.json(message.rows));
  } catch {}
});

