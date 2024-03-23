
var express = require('express')
var cors = require('cors')
var app = express()

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'se',
});

app.use(cors())

app.get('/se/nurse', function (req, res, next) {
    connection.query(
        'SELECT nurseID, firstname, lastname FROM `nurse`',
        function (err, results, fields) {
            res.json(results)
        }
    );
})

app.get('/se/schedule', function (req, res, next) {
    connection.query(
        'SELECT * FROM assign NATURAL JOIN nurse NATURAL JOIN schedule',
        function (err, results, fields) {
            res.json(results)
        }
    );
})

app.get('/se/schedule/:date', function (req, res, next) {
    const date = req.params.date
    connection.query(
    'SELECT nurseID, firstname, lastname, shift, date FROM nurse NATURAL JOIN assign NATURAL JOIN schedule WHERE date like ?', [`%${date}%`],
        function (err, results, fields) {
            res.json(results)
        }
    );

})

app.get('/se/schedule/:date/:shift', function (req, res, next) {
    const date = req.params.date;
    const shift = req.params.shift;
    connection.query(
        'SELECT nurseID, firstname, lastname, shift, date FROM nurse NATURAL JOIN assign NATURAL JOIN schedule WHERE date LIKE ? AND shift LIKE ?', 
        [`%${date}%`, `%${shift}%`],
        function (err, results, fields) {
            if (err) {
                console.error('Error fetching data: ', err);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }
            res.json(results);
        }
    );
});

app.get('/se/schedule/select/:id/:date', function (req, res, next) {
    const id = req.params.id;
    const date = req.params.date;
    connection.query(
        'SELECT nurseID, firstname, lastname, shift, date FROM nurse NATURAL JOIN assign NATURAL JOIN schedule WHERE nurseID LIKE ? AND date LIKE ?;', 
        [id, `%${date}%`],
        function (err, results, fields) {
            if (err) {
                console.error('Error fetching data: ', err);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }
            res.json(results);
        }
    );
});


app.listen(2000, function () {
    console.log('CORS-enabled web server listening on port 2000')
})