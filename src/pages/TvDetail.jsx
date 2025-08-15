import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const TvDetail = () => {

    const {id} = useParams()


    const [tv, setTv] = useState({})

    const getTvdetail = async () => {
        // console.log("티비정보 가져옴")
        const url = `https://api.themoviedb.org/3/tv/${id}?language=en-US`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTk3ZTQ5MWVkNmU4MGYwZGUxMmUzNDllYjYwZWE2ZSIsIm5iZiI6MTUzMzE5MjY1NS4yMDYsInN1YiI6IjViNjJhOWNmMGUwYTI2N2VlNzAyYjdkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xv4oEQTKm9GbehUNW1O_xByTJ78x0-FFiO8_E2mts5o'
            }
        };



        try {
            const result = await axios.get(url, options)
            console.log("_____________", result.data)
            setTv(result.data)
        } catch (err) {
            console.log("+++++++++++++", err.message)
        }


    }



    useEffect(() => {
        getTvdetail()
    }, []);


    return (
        <div>
           <h1>{tv.name}</h1>
            <p>{tv.type}</p>
            <img src = {"https://image.tmdb.org/t/p/w500"+tv.poster_path}/>
            {tv?.origin_country?.map(t => (
                <h5>{t}</h5>
            ))}
        </div>
    );
};

export default TvDetail;