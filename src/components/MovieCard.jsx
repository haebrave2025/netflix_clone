import React from 'react';
import {Button, Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const MovieCard = ({movie, isMovie = true}) => {
    return (
        <Col className={"mt-5"}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}/>
                <Card.Body>
                    <Card.Title>{isMovie ? movie.title : movie.name}</Card.Title>
                    <Card.Text>
                        {movie.overview.slice(0,100)}
                    </Card.Text>
                    {movie?.genre_ids?.map((m) => (
                        <h5>{m}</h5>
                    ))}
                    {isMovie ? "출시일 : " : "첫방영일 : "}
                    {isMovie ? movie.release_date : movie.first_air_date}
                    <br/>
                    <Link to={`/movie/${movie.id}`}>
                        <Button variant="primary">자세히 보기</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MovieCard;