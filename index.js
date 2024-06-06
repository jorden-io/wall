import express from "express";

const app = express();

app.listen(5001, () => "api running on 5001");

app.get("/", (req, res) => res.json("running"));