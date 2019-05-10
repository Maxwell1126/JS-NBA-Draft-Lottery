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

            let simulationCheck = `SELECT * FROM "simulations" ORDER BY ID DESC LIMIT 1;`;
            let results = await client.query(simulationCheck);
            if (results.rows.length == 0) {
                gooseEgg = 0;
                res.send(gooseEgg)
            } else {
                topFourCounts = [];
                let getTeams = `SELECT "id" FROM "teams" ORDER BY "id";`;
                let teams = await client.query(getTeams);

                for (let i = 0; i < teams.rows.length; i++) {
                    let getTopFour = `SELECT "teams"."name", "teams"."id", COUNT(*) 
                                      FROM "simulations_results" JOIN "teams" ON 
                                      "teams"."id" = "simulations_results"."team_id" 
                                      WHERE "team_id" = ($1) AND ("place" = 1 OR "place" = 2 OR 
                                      "place" = 3 OR "place" = 4) 
                                      GROUP BY "teams"."name", "teams"."id";`;
                    let teamId = [teams.rows[i].id];

                    let teamCount = await client.query(getTopFour, teamId);
                    topFourCounts.push({
                        name: teamCount.rows[0].name, id: teams.rows[i].id,
                        count: parseInt(teamCount.rows[0].count)
                    })
                }
                res.send(topFourCounts);
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

module.exports = router;