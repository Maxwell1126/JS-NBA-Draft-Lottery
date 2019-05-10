const express = require('express');
const pool = require('../Pool');
const router = express.Router();

router.post('/', (req, res) => {
    (async () => {
        const client = await pool.connect();
        try {
            await client.query('BEGIN');
            let simulationID;
            let simulationCheck = `SELECT * FROM "simulations" ORDER BY ID DESC LIMIT 1;`;
            let results = await client.query(simulationCheck);
            if(results.rows.length == 0){
                let simulation = `INSERT INTO "simulations" (id) VALUES ($1)
                              RETURNING "id";`;
                let firstID = [1];
                let firstSimulation = await client.query(simulation, firstID);
                simulationID = firstSimulation.rows[0].id;
            }else{
                let simulation = `INSERT INTO "simulations" (id) VALUES ($1)
                              RETURNING "id";`;
                let latestID = [results.rows[0].id +1];
                let latestSimualtion = await client.query(simulation, latestID);
                simulationID = latestSimualtion.rows[0].id;
            }
            
            for(i = 0; i < req.body.length; i ++){
                let simulationResults = `INSERT INTO "simulations_results" 
                                        ("simulation_id", "team_id", "place")
                                        VALUES($1, $2, $3);`;
                let values = [simulationID, req.body[i].seed, req.body[i].place]
                await client.query(simulationResults, values);
            }
            await client.query('COMMIT');
            res.sendStatus(201);
            
        } catch (e) {
            console.log('ROLLBACK', e);
            await client.query('ROLLBACK');
            throw e;
        } finally {
            client.release();
        }
    })().catch((error) => {
        console.log('error in server posting to database.', error);
        res.sendStatus(500);
    })
});

router.get('/', (req, res) => {
    // let latestSimualtion = `SELECT "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th",
    //                         "10th", "11th", "12th", "13th", "14th"
    //                         FROM "simulations" ORDER BY ID DESC LIMIT 1;`;
    // pool.query(latestSimualtion).then((response) => {
    //     res.send(response.rows);
    // }).catch((error) => {
    //     console.log('error in server getting from database.', error);
    // })
})

module.exports = router;