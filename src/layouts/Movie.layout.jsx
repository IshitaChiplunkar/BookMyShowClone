import React from "react";

//Components
import MovieNavbar from "../components/Navbar/movieNavbar.component";

const MovieLayout =(props)=>{
    return (<div>
        <MovieNavbar />
            {props.children}
    </div>);
}

export default MovieLayout;