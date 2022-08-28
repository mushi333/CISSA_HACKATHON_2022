import Button from 'react-bootstrap/Button';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
function Login() { 
  const formStyle = {
    color: 'white',
    padding: '20px'

  }

  const navigate = useNavigate();

  const navigateToHome = data => {
    navigate('/Home');
  };

  return (
    <Form className="rounded" style={formStyle}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={navigateToHome}>
        Submit
      </Button>
    </Form>
  );
}

export default Login;