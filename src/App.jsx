import React from "react";
import { Container } from "react-bootstrap";
import Login from "././components/Login";
import Logout from "./components/Logout";
import User from "././components/User";

export default function App() {
  return (
    <div className="App">
      <Container>
        <Login />
        <br />
        <User />
        <br />
        <Logout />
      </Container>
    </div>
  );
}
