import React, { useState } from 'react';

import { Redirect } from 'react-router-dom';

import styled from 'styled-components';

import { Manager, Notification } from './../Micro/Notifications.jsx';

import background from './background.jpg';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${background});
  background-size: cover;
`;

const LoginForm = styled.div`
  width: ${ (props) => props.isMobile ? '86vw' : '30vw' };
  height: ${ (props) => props.isMobile < 1000 ? '50vh' : '40vh' };
  background: white;
  border-radius: 3px;
  box-shadow: 0 0 5px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`;

const Center = styled.div`
  width: ${ (props) => props.isMobile < 1000 ? '100vw' : '30vw' };
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 60%;
  height: 20pt;
  font-size: 17pt;
  padding-left: 8px;
  margin-bottom: 28px;
  border: none;
  outline: none;
`;

const Submit = styled.input`
  width: 40%;
  height: 30pt;
  font-size: 17pt;
  margin-top: 10px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 5px rgba(0,0,0,0.2);
  background: #69BCD5;
  color: white;
  outline: none;
  cursor: pointer;
`;

const Link = styled.a`
  text-decoration: none;
  color: #69BCD5;
`;

const Small = styled.small`
  margin-top: 48px;
  color: rgba(0,0,0,0.4);
`;

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuth] = useState(false);

  const send = async (e) => {
    e.preventDefault();
    if(!email || !password) return Manager.error('Please, fill all the required fields.', 'Error occured', 2000);
    const response = await fetch('http://localhost:3030/auth/mail', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify({
        email: email,
        password: password
      })
    });
    const body = await response.json();
    const code = body.statusCode || 200;
    if(code !== 200) return Manager.warning('Invalid e-mail and/or password. Try again, or contact support.', 'Error occured', 2000);
    Manager.success('You will be redirected in a few seconds', 'Success!', 2000);
    window.localStorage.setItem('access-token', body.accessToken);
    window.localStorage.setItem('access-token-expires', body.accessTokenExpireAt);
    window.localStorage.setItem('refresh-token', body.refreshToken);
    window.localStorage.setItem('refresh-token-expires', body.refreshTokenExpireAt);
    setTimeout(() => { setAuth(true); }, 3000);
  };

  return (
    authenticated ? <Redirect to={{ pathname: "/profile" }} /> : (
      <Background>
        <LoginForm>
          { props.isMobile ? <h3>Sign In To Your Account</h3> : <h1>Sign In To Your Account</h1> }
          <Center>
            <Input type="text" value={ email } placeholder="Username or E-mail" onChange={ (e) => { setEmail(e.target.value) } } />
            <Input type="password" value={ password } placeholder="Password" onChange={ (e) => { setPassword(e.target.value) } } />
            <Submit type="submit" value="Sign In" onClick={ send } />
            <Small>Don't have an account? <Link href="/sigup">Register now.</Link></Small>
          </Center>
        </LoginForm>
        <Notification />
      </Background>
    )
  );
};

export default Login;
