import React, { useState, useEffect } from 'react';

import { Redirect, NavLink } from 'react-router-dom';

import styled from 'styled-components';

import { Manager, Notification } from './../Micro/Notifications.jsx';

import { jsonstoreurl, headers } from './../../hooks/useJSONStore.jsx';

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

const Link = styled(NavLink)`
  text-decoration: none;
  color: #69BCD5;
`;

const Small = styled.small`
  margin-top: 48px;
  color: rgba(0,0,0,0.4);
`;

const Login = (props) => {
  const [state, setState] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuth] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [inputFieldsReady, setInputFieldsReady] = useState(false);

  // const send = async (e) => {
  //   e.preventDefault();
  //   if(!email || !password) return Manager.error('Please, fill all the required fields.', 'Error occured', 2000);
  //   const response = await fetch('https://85.143.216.19:3030/auth/mail', {
  //     method: 'POST',
  //     mode: 'cors',
  //     cache: 'no-cache',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*'
  //     },
  //     redirect: 'follow',
  //     referrer: 'no-referrer',
  //     body: JSON.stringify({
  //       email: email,
  //       password: password
  //     })
  //   });
  //   const body = await response.json();
  //   const code = body.statusCode || 200;
  //   if(code !== 200) return Manager.warning('Invalid e-mail and/or password. Try again, or contact support.', 'Error occured', 2000);
  //   Manager.success('You will be redirected in a few seconds', 'Success!', 2000);
  //   window.localStorage.setItem('access-token', body.accessToken);
  //   window.localStorage.setItem('access-token-expires', body.accessTokenExpireAt);
  //   window.localStorage.setItem('refresh-token', body.refreshToken);
  //   window.localStorage.setItem('refresh-token-expires', body.refreshTokenExpireAt);
  //   setTimeout(() => { setAuth(true); }, 3000);
  // };

  useEffect(() => {
    fetch(jsonstoreurl + '/latest', { headers: headers }).then(res => res.json()).then(data => {
      setState(data);
    });
  }, []);

  useEffect(() => {
    if(!state) setState({
      plans: [],
      users: []
    });
  }, [state]);

  const handleClick = e => {
    e.preventDefault();
    setButtonClicked(true);
  };

  useEffect(() => {
    if(!buttonClicked) return;
    if(!email || !password) {
      setButtonClicked(false);
      return Manager.error('Please, fill all fields.', 'Error occured', 2000);
    }
    setInputFieldsReady(true);
  }, [buttonClicked]);

  useEffect(() => {
    if(!inputFieldsReady) return;
    const user = state.users.filter(user => (user.email === email || user.username === email) && user.password === password);
    if(!user[0]) {
      setButtonClicked(false);
      setInputFieldsReady(false);
      return Manager.warning('Username and/or password incorrect', 'Error occured', 2000);
    }
    Manager.success('You will be redirected in a few seconds', 'Success!', 2000);
    window.localStorage.setItem('username', email);
    setTimeout(() => { setAuth(true); }, 3000);
  }, [inputFieldsReady]);

  return (
    authenticated ? <Redirect to={{ pathname: "/profile" }} /> : (
      <Background>
        <LoginForm>
          { props.isMobile ? <h3>Sign In To Your Account</h3> : <h1>Sign In To Your Account</h1> }
          <Center>
            <Input type="text" value={ email } placeholder="Username or E-mail" onChange={ (e) => { setEmail(e.target.value) } } />
            <Input type="password" value={ password } placeholder="Password" onChange={ (e) => { setPassword(e.target.value) } } />
            <Submit type="submit" value="Sign In" onClick={ handleClick } />
            <Small>Don't have an account? <Link to="/sigup">Register now.</Link></Small>
          </Center>
        </LoginForm>
        <Notification />
      </Background>
    )
  );
};

export default Login;
