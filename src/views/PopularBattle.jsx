import React, { useState, useEffect } from "react";
import Card from "../components/Card";

const Popular_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=46a12a0dcce2af5d37ce67d499098b1f&page=1";
const Search_API = "https://api.themoviedb.org/3/search/movie?&api_key=46a12a0dcce2af5d37ce67d499098b1f&query=";

const PopularBattle = () => {
    const [movies, setMovies] = useState([]);
    const [currentBattle, setCurrentBattle] = useState(0);
    const [favoritesId, setFavoritesId ] = useState([]);

    useEffect(() => {
        fetch(Popular_API)
            .then((res) => { return res.json() })
            .then((data) => {
                console.log(data);
                setMovies(data.results)
            })
    }, []);


    const clickHandleMovie = (id) => {
        const newFavoritesId = favoritesId;
        newFavoritesId.push(id);
        
        localStorage.setItem("favoritesId", JSON.stringify(newFavoritesId));

        setCurrentBattle(currentBattle + 2);
        setFavoritesId(newFavoritesId)
    }

    if (movies.length === 0) {
        return <h>Movies are Loading...</h>
    } else if (currentBattle >= (movies.length)) {
        return <h2>You browsed all the films</h2>
    } else {
        return (
            <div className="container-fluid">
                <h1>Popular Battle !</h1>
                <div className="row justify-content-center">
                    {/* {movies.length > 0 && movies.map(movie => ( */}
                    <div onClick={() => clickHandleMovie({...movies[currentBattle]}.id)} className="col-6">
                        <Card {...movies[currentBattle]} />
                    </div>
                    <div onClick={() => clickHandleMovie({...movies[currentBattle + 1]}.id)} className="col-6">
                        <Card {...movies[currentBattle + 1]} />
                    </div>
                </div>
            </div>
        )
    }
}
export default PopularBattle;