import express from "express";
const app = express();
import pg from "pg";
import cors from "cors";

//DB CONNECTION
const pool = new pg.Client({
  user: "postgres",
  password: "postgres",
  host: "pgdb.ch608saq4znm.us-east-2.rds.amazonaws.com",
  port: 5431,
  database: "postgres",
  //ssl: true,
});
await pool.connect();
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
    res.json(data.rows[0]);
    console.log(res.json(data.rows));
  } catch {}
});
app.get("/", async (req, res) => {
  try {
    res.json("hi");
  } catch {}
});
