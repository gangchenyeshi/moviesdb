import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (

        <div>
            <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/"><h1>MoviesDB</h1></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/" class="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="popular/page-no/1" class="nav-link">Popular</Link>
                            </li>
                            {/* <li class="nav-item">
                                <Link to="popularBattle" class="nav-link">PopularBattle</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="weekly" class="nav-link">Weekly</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="weeklyBattle" class="nav-link">WeeklyBattle</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="favorites" class="nav-link">Favorites</Link>
                            </li> */}
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;