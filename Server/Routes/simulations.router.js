const express = require('express');
const pool = require('../Pool');
const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body[0].seed)
    let simulation = `INSERT INTO "simulations" ("1st", "2nd", "3rd", "4th", "5th", "6th", "7th",
                                                "8th", "9th", "10th", "11th", "12th", "13th", "14th")
                      VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14);`;
    let values = [req.body[0].seed, req.body[1].seed, req.body[2].seed, req.body[3].seed, req.body[4].seed,
        req.body[5].seed, req.body[6].seed, req.body[7].seed, req.body[8].seed, req.body[9].seed,
        req.body[10].seed, req.body[11].seed, req.body[12].seed, req.body[13].seed];
    pool.query(simulation, values).then((response) => {
        res.sendStatus(201)
    }).catch((error) => {
        console.log('error in server getting from database.', error);
    })
});

module.exports = router;