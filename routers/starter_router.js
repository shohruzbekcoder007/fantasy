const express = require('express');
const router = express.Router();
const _ = require('lodash');

router.get('/', async (req, res) => {

    return res.send("salom olam")

});

module.exports = router;