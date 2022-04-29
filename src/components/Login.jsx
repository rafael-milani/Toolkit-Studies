import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeUser } from "../redux/userSlice";

export default function Login() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(changeUser(name));
  };

  return (
    <Form>
      <h1 className="mt-5">Login:</h1>
      <Row className="align-items-center">
        <Col sm={6} className="mt-1">
          <Form.Control
            type="text"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
          />
        </Col>
        <Col sm={6}>
          <Button onClick={handleLogin}>Login</Button>
        </Col>
        <hr />
      </Row>
    </Form>
  );
}
