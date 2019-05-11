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
    (async () => {
        const client = await pool.connect();
        try {
            await client.query('BEGIN');

            let idCheck = `SELECT "id" FROM "simulations" ORDER BY ID DESC LIMIT 1;`;
            let latestID = await client.query(idCheck);
            
            let getLatest = `SELECT "teams"."name", "simulations_results"."team_id" AS "seed", 
                             "simulations_results"."place" FROM "simulations_results"
                             JOIN "teams" ON "teams"."id" = "simulations_results"."team_id"
                             WHERE "simulation_id" = ($1) ORDER BY "place";`;
            let simID = [latestID.rows[0].id]
            let latestSimualtion = await client.query(getLatest, simID);
            res.send(latestSimualtion.rows)
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

router.get('/total', (req,res)=>{
    let allStatsNames = `SELECT "id" FROM "simulations" ORDER BY ID DESC LIMIT 1;`;
    pool.query(allStatsNames).then((response) => {
        if(response.rows){
        res.send(response.rows)
        } else{
            let gooseEgg = 0;
            res.send(gooseEgg);
        }
    }).catch((error) => {
        console.log('error in server getting from database.', error);
    })
})

module.exports = router;