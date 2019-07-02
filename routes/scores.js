var express = require('express');
const { Client } = require('pg');
var router = express.Router();



/* PUT scores. */
router.put('/', function(req, res, next) {
  const client = new Client({
    connectionString: 'postgres://jgsnwfsouibwzs:433269fff5b517848d7876cdcbd09eac68623de4daabf4c982c9e3c09258e44c@ec2-54-246-84-100.eu-west-1.compute.amazonaws.com:5432/dfit46vg3mfoje',
    ssl: true,
  });

  client.connect();

  client.query(`UPDATE scores SET score = ${req.body.score} where team_name like '${req.body.team}'`, (err, result) => {
    if (err) throw err;
    res.sendStatus(200);
    client.end();
  });

});

router.post('/', function(req, res, next) {
  const client = new Client({
    connectionString: 'postgres://jgsnwfsouibwzs:433269fff5b517848d7876cdcbd09eac68623de4daabf4c982c9e3c09258e44c@ec2-54-246-84-100.eu-west-1.compute.amazonaws.com:5432/dfit46vg3mfoje',
    ssl: true,
  });

  client.connect();

  client.query('UPDATE scores SET score = 0', (err, result) => {
    if (err) throw err;
    res.sendStatus(200);
    client.end();
  });

});

module.exports = router;
