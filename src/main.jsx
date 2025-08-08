import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MovieList from "./pages/MovieList.jsx";
import TvList from "./pages/TvList.jsx";
import ActingList from "./pages/ActingList.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";



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
                path: "/detail/:id",
                element: <MovieDetail/>
            }
        ]
    }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
