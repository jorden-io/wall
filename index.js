import express from "express";

const app = express();

app.listen(8000, () => console.log("api running on 8000"));

app.get("/", (req, res) => res.json("running"));