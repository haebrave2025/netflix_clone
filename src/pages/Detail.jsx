import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import axios from "axios";

const Detail = () => {

    const {id} = useParams()
    const location = useLocation()
    const path = location.pathname.includes("movie") ? "movie" : "tv"

    console.log(path)

    const [detail, setDetail] = useState({})



    const getDetail = async () => {

        const url = `https://api.themoviedb.org/3/${path}/${id}?language=en-US`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTk3ZTQ5MWVkNmU4MGYwZGUxMmUzNDllYjYwZWE2ZSIsIm5iZiI6MTUzMzE5MjY1NS4yMDYsInN1YiI6IjViNjJhOWNmMGUwYTI2N2VlNzAyYjdkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xv4oEQTKm9GbehUNW1O_xByTJ78x0-FFiO8_E2mts5o'
            }
        };

        try {
            const result = await axios.get(url, options)
            console.log("_______________",result.data)
            setDetail(result.data)
        } catch (err) {
            console.log("++++++++++++", err.message)
        }
    }



    useEffect(() => {
        getDetail()
    }, []);


    return (
        <div>
            <h1>{detail.title ? detail.title : detail.name}</h1>
            <img src={"https://image.tmdb.org/t/p/w500"+detail.poster_path}/>
            <br/>
            출시일:
            <h2>{detail.release_date ? detail.release_date : detail.first_air_date}</h2>
            장르:
            {detail?.genres?.map((g) => (
                <h2>{g.name}</h2>
            ))}
            출시국가:
            {detail?.origin_country?.map((c) => (
                <h3>{c}</h3>
            ))}
            출시언어:
            <h3>{detail.original_language}</h3>


        </div>
    );
};

export default Detail;