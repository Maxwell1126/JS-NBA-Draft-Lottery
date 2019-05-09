const express = require('express');
const pool = require('../Pool');
const router = express.Router();

router.get('/', (req, res) => {  
    let allStatsNames = `SELECT * from "stats" ORDER BY "id";`;
    pool.query(allStatsNames).then((response) => {
        res.send(response.rows)
    }).catch((error) => {
        console.log('error in server getting from database.', error);
    })
});
    
module.exports = router;