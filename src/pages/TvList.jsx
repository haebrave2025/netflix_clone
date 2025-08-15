import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";


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
                <Col className={"mt-5"}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500"+tv.poster_path} />
                    <Card.Body>
                        <Card.Title>{tv.name}</Card.Title>
                        <Card.Text>
                            {tv.overview.slice(0,120)}
                        </Card.Text>
                        {tv?.genre_ids?.map((m) => (
                            <h5>{m}</h5>
                        ))}
                        {tv?.origin_country?.map((c) => (
                            <h5>{c}</h5>
                        ))}
                        <Link to={`/tv/${tv.id}`}>
                        <Button variant="primary">Go somewhere</Button>
                        </Link>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>

        </Container>
    );
};

export default TvList;