import React, {useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";

const FindEmail = () => {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault()

        const userInput = {
            userName : userName,
            password : password
        }
        console.log(userInput)
    }




    return (
        <Container>
            <Form onSubmit={submitHandler}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><b>닉네임</b></Form.Label>
                    <br/>
                    <Form.Text className="text-muted">
                        다른 유저와 겹치지 않도록 입력해주세요.(2~12자)
                    </Form.Text>
                    <Form.Control
                        type="text"
                        placeholder="Enter user name"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />

                </Form.Group>

               

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label><b>비밀번호</b></Form.Label>
                    <br/>
                    <Form.Text className="text-muted">
                        영문 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
                    </Form.Text>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>

               



                <Button variant="primary" type="submit">
                    이메일 찾기
                </Button>
            </Form>
        </Container>
    );
};

export default FindEmail;