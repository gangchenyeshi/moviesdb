import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import moment from 'moment';
// import { useHistory } from "react-router-dom";
import "../css/Home.css"

const Search_API = "https://api.themoviedb.org/3/search/movie?&api_key=46a12a0dcce2af5d37ce67d499098b1f&query=";

const Home = () => {
     const [ movies, setMovies ] = useState([]);
     const [search, setSearch] = useState("");
     const [page, setPage] = useState(1);
    //  let history = useHistory();//useHistory is use for change URL dynamic

    //  page : props.match.params.page,
    
    
  useEffect(() => {
    // date in JS
    // date YYYY/DD/MM
    console.log(moment().format("YYYY-DD-MM"));
    
    loadMovies(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${moment().add(-1, "days").format("YYYY-MM-DD")}&primary_release_date.lte=${moment().format("YYYY-MM-DD")}&api_key=46a12a0dcce2af5d37ce67d499098b1f`);
  },[]);


  // create the function so it can call any where
  const loadMovies = (API) => {
    
    fetch(API)
      .then((response) => { return response.json() })
      .then((data) => {
        console.log("Movies ", data);
          setMovies(data.results);
          // history.push(`/ `);
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
};

const handleOnSubmit = (e) => {
  e.preventDefault(e);
  if(search) {
    loadMovies(Search_API + search)
  }
};

const handleOnChange = (e) => {
  setSearch(e.target.value);
}
    return (
        <div className="container-fluid">
          <div className="row d-flex justify-content-end">
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <form onSubmit={handleOnSubmit} className="search">
                        <input class="form-control me-2" 
                               type="search" 
                               placeholder="Search" 
                               aria-label="Search" 
                               value={search}
                               onChange={handleOnChange}/>
                    </form>
                </div>
            </div>
            <h1>Latest Movies Released</h1>

            <div className="row d-flex justify-content-center">
                {movies.length > 0 && movies.map(movie => (
                    <div className="col-sm-6 col-md-3 col-lg-2.5">
                        <Card key={movie.id} {...movie} />
                    </div>
                ))}
            </div>

            <div className="d-flex justify-content-center">
                <button onClick={LoadPreviousPage} type="button" className="btn btn-dark btn-lg buttonStyle">Previous</button>
                <button onClick={LoadNextPage} type="button" className="btn btn-dark btn-lg buttonStyle">Next</button>
            </div>

        </div>
    );
  }

export default Home;
