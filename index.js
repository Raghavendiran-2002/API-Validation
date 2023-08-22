require("dotenv").config();
const cors = require("cors");
const express = require("express");

const app = express();
app.use(cors());
app.use(express.json());

const calculator = require("./app");

app.use("/calculator", calculator);

app.listen(3000, "0.0.0.0");
