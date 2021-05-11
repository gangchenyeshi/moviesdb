import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import "../css/popular.css";
import { useHistory } from "react-router-dom";

const Popular_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=46a12a0dcce2af5d37ce67d499098b1f&page=";
const Search_API = "https://api.themoviedb.org/3/search/movie?&api_key=46a12a0dcce2af5d37ce67d499098b1f&query=";

const Popular = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    let history = useHistory();//useHistory is use for change URL dynamic

    useEffect(() => {
        // fetch(Popular_API + page)
        //     .then((res) => { return res.json() })
        //     .then((data) => {
        //         console.log(data);
        //         setMovies(data.results)
        //     })
        loadMovies();
    }, []);

    const loadMovies = () => {
        fetch(Popular_API + page)
            .then((res) => { return res.json() })
            .then((data) => {
                console.log(data);
                setMovies(data.results);
                history.push(`/popular/page-no/${page} ` || 1);
            })
    }

    const LoadPreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
            loadMovies();
            window.scroll(0, 0); //when you click the button scroll to top
        }
    }
    const LoadNextPage = () => {
        setPage(page + 1);
        loadMovies();
        window.scroll(0, 0);
    }
    return (
        <div className="container-fluid">
            <h1>Most Popular Movies</h1>

            <div className="row">
                {movies.length > 0 && movies.map(movie => (
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <Card key={movie.id} {...movie} />
                    </div>
                ))}
            </div>

            <div className="d-flex justify-content-center">
                <button onClick={LoadPreviousPage} type="button" className="btn btn-dark btn-lg buttonStyle">Previous</button>
                <button onClick={LoadNextPage} type="button" className="btn btn-dark btn-lg buttonStyle">Next</button>
            </div>

        </div>
    )
}
export default Popular;