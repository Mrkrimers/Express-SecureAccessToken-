const express = require(`express`);
const cors = require(`cors`);
const bodyParser = require(`body-parser`);
const api = require(`../src/controller/api.controller`);

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use(`/api`, api)

app.use((error, req, res, next) => res.send(error.message));
module.exports = app;