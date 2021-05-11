


import React, { useState, useEffect } from "react";
import Card from "../components/Card";

const Favorites = () => {

        const [movies, setMovies] = useState([]);
        const [favIDs, setFavIds] = useState([]);
        useEffect(() => {
            const favIds = getStorage();
            if (favIds) {
                setFavIds(JSON.parse(favIds));
            };
            
                getMovie();
        }, [])

        // const favIds = getStorage();
        // if (favIds === null) {
        //     const [movies, setMovies] = useState([]);
        //     const [favIDs, setFavIds] = useState();
        // } else {
        //     const [movies, setMovies] = useState([]);
        //     const [favIDs, setFavIds] = useState(JSON.parse(favIds));

        // }

        // useEffect((id) => {
        //     favIDs.map((id) => {
        //         getMovie(id);
        //     })
        // });

        const getStorage = () => {
            return localStorage.getItem("favoritesId")
        }

        const getMovie = (id) => {
            fetch(`http://api.themoviedb.org/3/movie/${id}?api_key={46a12a0dcce2af5d37ce67d499098b1f}`)
                .then((res) => { return res.json() })
                .then((data) => {
                    // console(data);
                    const newMovies = movies;
                    newMovies.push(data);
                    setMovies(newMovies);
                    //  setMovies(data);
                })
        }

        if (favIDs.length === 0) {
            return (
                <div>
                    <h5>Movies not selected</h5>
                    <p>Select favorites Movies from Popular Battle</p>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>favorites !</h1>
                    <div className="container-fluid">
                        <div className="row">
                            {movies.length > 0 && movies.map(movie => (
                                <div className="col-sm-12 col-md-4 col-lg-3">
                                    <Card key={movie.id} {...movie} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        }
    }
    export default Favorites;