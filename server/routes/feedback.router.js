const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /feedback');
    pool.query('SELECT * from "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /feedback', error)
        res.sendStatus(500);
    });
})

router.post('/', (req, res) => {
    console.log('POST /feedback');
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "flagged")
    VALUES ($1, $2, $3, $4, $5);`, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments, req.body.flagged])
    .then(() => {
      
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error POST /feedback', error)
        res.sendStatus(500);
    });
})

module.exports = router;