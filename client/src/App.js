import React, {useState, useEffect} from "react";
import './App.css';
import Axios from 'axios'

function App() {


  const [Name, setMovieName] = useState('')
  const [review, setReview] = useState('')
  const [movieReviewList, setMovieList] = useState([])

  useEffect(()=>{
    Axios.get('http://localhost:3001/api/get').then((response)=>{
      setMovieList(response.data)
    });

  },[]);

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      movieName: Name, 
      movieReview: review,
    }).then(()=> {
      alert('sucessful insert');
    });
  };

  const delAll = () => {
    Axios.get('http://localhost:3001/api/del').then((response)=> {
      movieReviewList.length = 0;
    });
  }
  return (
    <div className="App">
      <h1> CRUD APP</h1>

      <div className= "form"> 
        <label>Movie Name</label>
        <input type= "text" name="movieName" onChange={(e) => {
          setMovieName(e.target.value)}
        }/>
          
        <label>Review</label>
        <input type = "text" name = "review" onChange={(e) => {
          setReview(e.target.value)}}/>
        <div className= "ButtonRow">
          <button onClick={submitReview}>Submit</button>
          <button onClick={delAll}>Delete</button>
        </div>
        

        {movieReviewList.map((val)=>{
          return (
          <h1>Movie Name: {val.movieTitle} MovieReivew: {val.movieReview}</h1>
          
          );
        })}
      </div>
      
    </div>
  );
}

export default App;
