import React, {useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";

const Signup = () => {

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")



    const submitHandler = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            alert("비밀번호가 맞지않음")
            return
        }


        const userInput = {
            userName : userName,
            email : email,
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

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><b>이메일 주소</b></Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
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

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label><b>비밀번호 확인</b></Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="confirmPassword"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                </Form.Group>



                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default Signup;