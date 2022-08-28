import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Background from './img/login_background.jpg';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Login from './components/Login';

const App = () => {
  const backgroundStyle = {
    backgroundImage: `url(${Background})`,
    height:'100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  const textStyle = {
    color: 'white'
  }

  const navigate = useNavigate();

  const navigateToHome = data => {
    navigate('/Home');
  };

    return (
      <div style={backgroundStyle}>
        <a href='/Home' onClick={navigateToHome} style={{textDecoration: "false"}}>
        <Navbar bg="light">
          <Container>
            <Navbar.Brand>GymBro</Navbar.Brand>
          </Container>
        </Navbar>
        </a>
        <Routes>
          <Route path="/" element={
            <Container>
              <Row>
              <Col></Col>
              <Col className="w-25 p-2 align-items-center">
                <Login />
              </Col>
              <Col></Col>   
              </Row>
            </Container>
          } />
          <Route path="/Home" element={
            <Container style={textStyle}>
              <Row>
                <Col>1 of 2</Col>
                <Col xs={5}>1 of 2 (wider)</Col>
              </Row>
          </Container>
          } />
        </Routes>
      </div>
    );
};

export default App;
