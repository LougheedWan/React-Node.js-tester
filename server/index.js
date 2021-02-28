const express = require('express');
//const cors = require('cors');
const mysql = require('mysql');

const app = express();

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'crud_db',
});


//console.log(db);
//app.use(cors());


app.get('/', (req, res) => {

    const sqlInsert = "INSERT INTO movie_reviews (movieTitle, movieReview) VALUES ('inception', 'good movie');"
    db.query(sqlInsert, (err, result) =>{
        if (err) {
            return res.send(err);
        }
        else{
            console.log("IT FINALLY WORKED");
            return res.json({
                data: result
            })
        }
    });
    
});

app.listen(3001, () => {
    console.log("running on port 3001");
});