import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";


const TvList = () => {

    const [tvs, setTvs] = useState([])

    useEffect(() => {
        setTvs(tvInfo.results)
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
                        <Link to={`/detail/${tv.id}`}>
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