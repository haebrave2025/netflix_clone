import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const Headers = () => {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">해언플렉스</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">영화리스트</Nav.Link>
                    <Nav.Link href="/tv">티비리스트</Nav.Link>
                    <Nav.Link href="/acting">베우리스트</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Headers;