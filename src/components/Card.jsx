import React from "react";
import "../css/Card.css";

const Img_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) =>  { //setVoteClass is Class style for change color based on Vote_average
    if(vote >= 8) { //if vote is >= 8 then use className="green"
        return "green" ;
    }else if (vote >=6) {//if vote is >= 6 then use className="Yellow"
        return "yellow";
    }else{
        return "red";//else vote is use className="red"
    }
};

const Card = ({id, title, overview, poster_path, release_date, vote_average }) => {

const viewMovie = () => {
    // console.log("Trying to view the Movie");
    // console.log(title);
    const url="https://www.themoviedb.org/movie/" + id
    window.location.href = url
}
    return (

        <div className="card-group">
            <div className="card movie">
                {/* <img src={Img_API + poster_path} alt={title} /> */}
            <img  className="card-img-top"
                  src={poster_path ? (Img_API + poster_path)
                        : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"
                    } alt={title} />
            <div  className="card-body movie-info">
                <h6 className="card-title">Title : {title}</h6>
                <p className={`tag ${setVoteClass(vote_average)}`}>Rating : {vote_average}</p>
                <p className="text">Release on : {release_date}</p>
            </div>
            <div  className="card-body movie-over">
                <h6 className="card-title">Description :</h6>
                <p className="card-text">{overview}</p>
                <input type="button" onClick={viewMovie} value="View"/>
            </div>
            </div>
            
        </div>
    )
}

export default Card;