const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { authentification, sell, produit } = require("./backend/service");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(cors({
	origin: process.env.FRONT_CORS,
	credentials: true
}));

app.use(function(req, res, next) {
	res.header('Content-Type', 'application/json;charset=UTF-8')
	res.header('Access-Control-Allow-Credentials', true)
	res.header(
	  'Access-Control-Allow-Headers',
	  'Origin, X-Requested-With, Content-Type, Accept, Token'
	)
	next()
  })

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.post("/api/authentification", (req, res) => {
	authentification(req, res);
});

app.post("/api/sell", (req, res) => {
	sell(req, res);
});

app.post("/api/produit", (req, res) => {
	produit(req, res);
});

app.get("/", (req, res) => {
	res.send("Welcome to the backend");
});

app.listen(process.env.PORT || process.env.APP_PORT);
