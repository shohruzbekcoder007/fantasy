const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const starter_router = require('./../routers/starter_router')
const config = require('config')
const cookieParser = require("cookie-parser")

const corsOptions = {
    exposedHeaders: "x-auth-token",
  };

module.exports = (app) => {
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    config.get('jwtPrivateKey')
    app.use(cors(corsOptions));
    app.use(cookieParser('q1y1npar0l'));
    app.use(express.static('./static'));
    app.set("view engine", "pug");
    app.use('/', starter_router)
}