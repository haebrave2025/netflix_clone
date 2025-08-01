import React from 'react';
import ActingList from "./pages/ActingList.jsx";
import MovieList from "./pages/MovieList.jsx";
import {Outlet} from "react-router-dom";

const App = () => {
    return (
        <div>
       <Outlet/>
        </div>
    );
};

export default App;