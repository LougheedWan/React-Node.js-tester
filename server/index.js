const express = require('express');
//const cors = require('cors');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

const bodyParser = require('body-parser');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'crud_db',
});


//console.log(db);
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/api/del", (req,res)=>{
    const sqlDel = 'DELETE FROM movie_reviews';
    db.query(sqlDel, (err, result) =>{
        res.send(result);
    })
})

app.get('/api/get', (req, res)=>{
    const sqlSelect = "SELECT * FROM movie_reviews";
    db.query(sqlSelect, (err, result)=>{
        res.send(result);
    })
})

app.post("/api/insert", (req, res)=> {

    const movieName = req.body.movieName
    const movieReview = req.body.movieReview

    const sqlInsert = 'INSERT INTO movie_reviews (movieTitle, movieReview) VALUES (?,?)'
    db.query(sqlInsert, [movieName, movieReview], (err, result)=>{
        console.log(result);
    })
})
app.listen(3001, () => {
    console.log("running on port 3001");
});