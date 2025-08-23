import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import MovieCard from "../components/MovieCard.jsx";


const TvList = () => {

    const [tvs, setTvs] = useState([])


    const getTvList = async () => {
        console.log("티비정보 가져옴")
        const url = 'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTk3ZTQ5MWVkNmU4MGYwZGUxMmUzNDllYjYwZWE2ZSIsIm5iZiI6MTUzMzE5MjY1NS4yMDYsInN1YiI6IjViNjJhOWNmMGUwYTI2N2VlNzAyYjdkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xv4oEQTKm9GbehUNW1O_xByTJ78x0-FFiO8_E2mts5o'
            }
        };



        try {
            const result = await axios.get(url, options)

            console.log(result.data.results)
            setTvs(result.data.results)

        } catch (err) {
            console.log("+++++++++++++++++++++", err.message)
        }


    };




    useEffect(() => {
         getTvList()
    }, []);


    return (
        <Container>
            <Row>
            {tvs?.map((tv) => (
               <MovieCard data={tv} isMovie={false}/>
            ))}
            </Row>

        </Container>
    );
};

export default TvList;