import React from 'react';
import {Button, Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const MovieCard = ({data, isMovie = true}) => {
    return (
        <Col className={"mt-5"}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500"+data.poster_path}/>
                <Card.Body>
                    <Card.Title>{isMovie ? data.title : data.name}</Card.Title>
                    <Card.Text>
                        {data.overview.slice(0,100)}
                    </Card.Text>
                    {data?.genre_ids?.map((m) => (
                        <h5>{m}</h5>
                    ))}
                    {isMovie ? "출시일 : " : "첫방영일 : "}
                    {isMovie ? data.release_date : data.first_air_date}
                    <br/>
                    <Link to={`/${isMovie ? "movie" : "tv"}/${data.id}`}>
                        <Button variant="primary">{isMovie ? "영화" : "티비"} 자세히 보기</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MovieCard;