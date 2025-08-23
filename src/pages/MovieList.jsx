import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";


const MovieList = () => {

    const [movies, setMovies] = useState([])

    // movie정보를 가져오는 함수 (Networking)
    const getMovieList = async () => {
        // console.log("영화정보 가져옴")

        const address = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTk3ZTQ5MWVkNmU4MGYwZGUxMmUzNDllYjYwZWE2ZSIsIm5iZiI6MTUzMzE5MjY1NS4yMDYsInN1YiI6IjViNjJhOWNmMGUwYTI2N2VlNzAyYjdkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xv4oEQTKm9GbehUNW1O_xByTJ78x0-FFiO8_E2mts5o'
            }
        };

        try {
            const result = await axios.get(address, options)

            console.log(result.data.results)
            setMovies(result.data.results)

        } catch (err) {
            console.log("++++++++++++++++++++++++", err.message)
        }
    }


    useEffect(() => {
        getMovieList()
    }, []);

    return (
        <Container>
            <Row>
            {movies?.map((movie) => (
                <Col className={"mt-5"}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}/>
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>
                            {movie.overview.slice(0,100)}
                        </Card.Text>
                        {movie?.genre_ids?.map((m) => (
                            <h5>{m}</h5>
                        ))}
                        <Link to={`/movie/${movie.id}`}>
                            <Button variant="primary">자세히 보기</Button>
                        </Link>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
        </Container>
    );
};

export default MovieList;