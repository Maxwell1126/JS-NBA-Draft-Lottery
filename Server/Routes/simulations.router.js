const express = require('express');
const pool = require('../Pool');
const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
});
