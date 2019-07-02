var express = require('express');
var router = express.Router();
const { Client } = require('pg');

/* GET home page. */
router.get('/', function(req, res, next) {
  const client = new Client({
    connectionString: 'postgres://jgsnwfsouibwzs:433269fff5b517848d7876cdcbd09eac68623de4daabf4c982c9e3c09258e44c@ec2-54-246-84-100.eu-west-1.compute.amazonaws.com:5432/dfit46vg3mfoje',
    ssl: true,
  });

  client.connect();

  client.query('SELECT * from scores', (err, result) => {
    if (err) throw err;
    res.render('index', { title: 'Squad Run' , scores: result.rows });
    client.end();
  });


});

module.exports = router;
