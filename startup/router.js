const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const starter_router = require('./../routers/starter_router')


const corsOptions = {
    exposedHeaders: "x-auth-token",
  };

module.exports = (app) => {
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors(corsOptions));
    app.use('/', starter_router)
}