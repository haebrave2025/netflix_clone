import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MovieList from "./pages/MovieList.jsx";
import TvList from "./pages/TvList.jsx";
import ActingList from "./pages/ActingList.jsx";

import Detail from "./pages/Detail.jsx";
import Login from "./pages/auth/Login.jsx";
import Signup from "./pages/auth/Signup.jsx";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <MovieList/>
            },
            {
                path: "/tv",
                element: <TvList/>
            },
            {
                path: "/acting",
                element: <ActingList/>
            },
            {
                path: "/movie/:id",
                element: <Detail/>
            },
            {
                path: "/tv/:id",
                element: <Detail/>
            },
            {
                path: "/auth/login",
                element: <Login/>
            },
            {
                path: "/auth/signup",
                element: <Signup/>
            }
        ]
    }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
