import React from 'react';

import {Outlet} from "react-router-dom";
import Headers from "./components/Headers.jsx";

const App = () => {
    return (
        <>
            <Headers/>
            <Outlet/>
        </>
    );
};

export default App;