import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import "./login.css";
import Dashboard from "../Dashboard/Dashboard";
import Loginmain from "./Login/Loginmain";
import Signupmain from "./Signup/Signupmain";
import ProtectedRoute from "./ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function Main() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <BrowserRouter>
              <Routes>
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route path="/" element={<Loginmain />} />
                <Route path="/signupmain" element={<Signupmain />} />
                </Routes>
            </BrowserRouter>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;

