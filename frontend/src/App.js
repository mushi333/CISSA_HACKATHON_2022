import React from 'react';
import ReactDOM from 'react-dom';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Background from './img/login_background.jpg';

const backgroundStyle = {
  backgroundImage: `url(${Background})`,
  height:'100vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const appStyle = {
  height: '250px',
  display: 'flex'
};

const formStyle = {
  margin: 'auto',
  padding: '10px',
  border: '1px solid #c9c9c9',
  borderRadius: '5px',
  background: '#f5f5f5',
  width: '220px',
  display: 'block'
};

const labelStyle = {
  margin: '10px 0 5px 0',
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontSize: '15px',
};

const inputStyle = {
  margin: '5px 0 10px 0',
  padding: '5px', 
  border: '1px solid #bfbfbf',
  borderRadius: '3px',
  boxSizing: 'border-box',
  width: '100%'
};

const submitStyle = {
  margin: '10px 0 0 0',
  padding: '7px 10px',
  border: '1px solid #efffff',
  borderRadius: '3px',
  background: '#3085d6',
  width: '100%', 
  fontSize: '15px',
  color: 'white',
  display: 'block'
};

const headerStyle = {
  padding: '30px',
  margin: '0px',
  // borderRadius: '25px',
  textAlign: 'center',
  background: '#5A5A5A',
};

const headerTextStyle = {
  color: 'white',
  fontSize: '20px',
  fontFamily: 'Arial, Helvetica, sans-serif',
}

const Field = React.forwardRef(({label, type}, ref) => {
  return (
    <div>
      <label style={labelStyle} >{label}</label>
      <input ref={ref} type={type} style={inputStyle} />
    </div>
  );
});

const Form = ({onSubmit}) => {
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  const handleSubmit = e => {
      e.preventDefault();
      const data = {
          username: usernameRef.current.value,
          password: passwordRef.current.value
      };
      onSubmit(data);
  };
  return (
    <form style={formStyle} onSubmit={handleSubmit} >
      <Field ref={usernameRef} label="Username:" type="text" />
      <Field ref={passwordRef} label="Password:" type="password" />
      <div>
        <nav>
        <button style={submitStyle} type="submit">Login</button>
        </nav>
      </div>
    </form>
  );
};

const Header = () => {
  return (
    <div style={headerStyle}>
      <div style={headerTextStyle}>GymBro</div>
    </div>
  );
}

const App = () => {
  const navigate = useNavigate();

  const navigateToHome = data => {
    navigate('/Home');
  };

    return (
      <div style={backgroundStyle}>
        <Routes>
          <Route path="/" element={
            <div>
            <Header />
            <div style={appStyle}>
              <Form onSubmit={navigateToHome} />
            </div>
            </div>
          } />
          <Route path="/Home" element={
            <Header />
          } />
        </Routes>
      </div>
    );
};

export default App;
