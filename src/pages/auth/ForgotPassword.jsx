import React, {useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";

const ForgotPassword = () => {


    const [email, setEmail] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault()
        const userInput = {
            email : email
        }
        console.log(userInput)
    }



    return (
        <Container>
            <Form onSubmit={submitHandler}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Text className="text-muted">
                       <p> 가입한 이메일 주소를 입력해주세요</p>
                    </Form.Text>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                </Form.Group>


                <Button variant="primary" type="submit">
                    이메일로 인증코드 받기
                </Button>
            </Form>
        </Container>
    );
};

export default ForgotPassword;