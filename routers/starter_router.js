const express = require('express');
const router = express.Router();
const _ = require('lodash');

router.get('/', async (req, res) => {

    return res.render("login", {})

});

module.exports = router;