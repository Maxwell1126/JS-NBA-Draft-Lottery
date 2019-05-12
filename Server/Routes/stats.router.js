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

router.get('/topFour', (req, res) => {

    (async () => {
        const client = await pool.connect();
        try {
            await client.query('BEGIN');
            let topFourCounts = [];
            let getTeams = `SELECT * FROM "teams" ORDER BY "id";`;
            let teams = await client.query(getTeams);

            for (let i = 0; i < teams.rows.length; i++) {
                let getTopFour = `SELECT "teams"."name", "teams"."id", COUNT(*) 
                                    FROM "simulations_results" JOIN "teams" ON 
                                    "teams"."id" = "simulations_results"."team_id" 
                                    WHERE "teams"."id" = ($1) AND ("place" = 1 OR "place" = 2 
                                    OR "place" = 3 OR "place" = 4)
                                    GROUP BY "teams"."name", "teams"."id" ORDER BY "teams"."id";`;
                let values = [teams.rows[i].id];

                let teamCount = await client.query(getTopFour, values);

                if (teamCount.rows.length == 0) {
                    topFourCounts.push({
                        name: teams.rows[i].name, id: teams.rows[i].id,
                        count: 0
                    })
                } else {
                    let simCount = `SELECT COUNT(*) FROM "simulations";`;
                    let simTotal = await client.query(simCount);
                        
                    topFourCounts.push({
                        name: teamCount.rows[0].name, id: teams.rows[i].id,
                        count: (parseInt(teamCount.rows[0].count)/parseInt(simTotal.rows[0].count)* 100).toFixed(2)
                    })
                }
            }
            res.send(topFourCounts);
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

router.post('/places', (req, res) => {
    (async () => {
        const client = await pool.connect();
        try {
            await client.query('BEGIN');

            let simulationCheck = `SELECT * FROM "simulations" ORDER BY ID DESC LIMIT 1;`;
            let results = await client.query(simulationCheck);
            if (results.rows.length == 0) {
                gooseEgg = 0;
                res.send(gooseEgg)
            } else {
                let placeCounts = [];
                let getTeams = `SELECT * FROM "teams" ORDER BY "id";`;
                let teams = await client.query(getTeams);

                for (let i = 0; i < teams.rows.length; i++) {
                    let getPlace = `SELECT "teams"."name", "teams"."id", COUNT(*) 
                                      FROM "simulations_results" JOIN "teams" ON 
                                      "teams"."id" = "simulations_results"."team_id" 
                                      WHERE "team_id" = ($1) AND "place" = ($2) 
                                      GROUP BY "teams"."name", "teams"."id";`;
                    let values = [teams.rows[i].id, req.body.place];

                    let teamCount = await client.query(getPlace, values);
                    if (teamCount.rows.length == 0) {
                        placeCounts.push({
                            name: teams.rows[i].name, id: teams.rows[i].id,
                            count: 0
                        })
                    } else {
                        let simCount = `SELECT COUNT(*) FROM "simulations";`;
                        let simTotal = await client.query(simCount);
                        placeCounts.push({
                            name: teamCount.rows[0].name, id: teams.rows[i].id,
                            count: (parseInt(teamCount.rows[0].count) / parseInt(simTotal.rows[0].count) * 100).toFixed(2)
                        })
                    }
                }
                res.send(placeCounts);
            }
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

router.get('/mode', (req, res) => {

    (async () => {
        const client = await pool.connect();
        try {
            await client.query('BEGIN');
            let modeCounts = [];
            let getTeams = `SELECT * FROM "teams" ORDER BY "id";`;
            let teams = await client.query(getTeams);
            function propComparator(prop) {
                return function (a, b) {
                        return a[prop] - b[prop];
                    }
                }
            
            let simulationCheck = `SELECT * FROM "simulations" ORDER BY ID DESC LIMIT 1;`;
            let simulations = await client.query(simulationCheck);
            
            if (simulations.rows.length == 0) {
                for (let i = 0; i < teams.rows.length; i++) {
                    modeCounts.push({
                        name: teams[i].name, id: teams[i].id,
                        count:0
                    });
                }
            } else {
                for (let i = 0; i < teams.rows.length; i++) {
                    let teamsMost = [];
                    for (j = 1; j < 15; j++) {
                        let getPlace = `SELECT "teams"."name", "teams"."id", 
                                      "simulations_results"."place" AS "place",
                                      COUNT(*) FROM "simulations_results" JOIN "teams" ON 
                                      "teams"."id" = "simulations_results"."team_id" 
                                      WHERE "team_id" = ($1) AND "place" = ($2) 
                                      GROUP BY "teams"."name", "teams"."id", "simulations_results"."place";`;
                        let values = [teams.rows[i].id, j];
                        let placeCount = await client.query(getPlace, values);
                        if (!placeCount.rows[0]) {
                            teamsMost.push({
                                name: teams.rows[i].name, id: teams.rows[i].id,
                                amount:0,
                                count: j

                            })
                        } else {     
                            teamsMost.push({
                                name: placeCount.rows[0].name, id: teams.rows[i].id,
                                amount: parseInt(placeCount.rows[0].count),
                                count: placeCount.rows[0].place,
                            })
                        }
                        if (teamsMost.length == 14) {
                            teamsMost = teamsMost.sort(propComparator('amount'));
                            let lastIndex = teamsMost.length -1;
                            modeCounts.push({
                                name: teamsMost[lastIndex].name, id: teamsMost[lastIndex].id,
                                count: teamsMost[lastIndex].count
                            });
                            
                            teamsMost = [];
                        }
                    }
                }
            }
            modeCounts = modeCounts.sort(propComparator('id'));         
            res.send(modeCounts)
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

module.exports = router;