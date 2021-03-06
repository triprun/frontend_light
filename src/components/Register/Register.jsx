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
  height: ${ (props) => props.isMobile ? '70vh' : '60vh' };
  background: white;
  border-radius: 3px;
  box-shadow: 0 0 5px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`;

const Center = styled.div`
  width: ${ (props) => props.isMobile ? '100vw' : '30vw' };
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

const Register = (props) => {
  const [state, setState] = useState(null);
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [registered, setRegistered] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [inputFieldsReady, setInputFieldsReady] = useState(false);

  // const send = async (e) => {
  //   e.preventDefault();
  //   if(!email || !password || !repassword || (password !== repassword)) return Manager.error('Please, fill all the required fields.', 'Error occured', 2000);
  //   const response = await fetch('https://85.143.216.19:3030/user/registration', {
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
  //       userName: username,
  //       firstName: fullName.split(' ')[0],
  //       lastName: fullName.split(' ')[1],
  //       password: password
  //     })
  //   });
  //   const body = await response.json();
  //   const code = body.statusCode || 200;
  //   if(code !== 200) return Manager.warning('E-mail is already taken, please contact support if it is yours', 'Error occured', 2000);
  //   Manager.success('You will be redirected in a few seconds', 'Success!', 2000);
  //   // tokens should be generated at this moment also
  //   window.localStorage.setItem('access-token', body.accessToken);
  //   window.localStorage.setItem('access-token-expires', body.accessTokenExpireAt);
  //   window.localStorage.setItem('refresh-token', body.refreshToken);
  //   window.localStorage.setItem('refresh-token-expires', body.refreshTokenExpireAt);
  //   setTimeout(() => { setRegistered(true); }, 3000);
  // }

  // useEffect(async () => {
  //   if(!email || !password || !repassword || (password !== repassword)) return Manager.error('Please, fill all the required fields.', 'Error occured', 2000);
  //   const newUsersData = state.users.concat([{
  //     email: email,
  //     username: username,
  //     fullname: fullname,
  //     password: password
  //   }]);
  //   await useSaveData({
  //     ...state,
  //     users: newUsersData
  //   });
  //   window.localStorage.setItem('username', username);
  // }, [buttonClicked]);

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
    console.log(state);
    if(!email || !password || !repassword || (password !== repassword)) {
      setButtonClicked(false);
      return Manager.error('Please, fill all the required fields.', 'Error occured', 2000);
    }
    setInputFieldsReady(true);
  }, [buttonClicked]);

  useEffect(() => {
    if(!inputFieldsReady) return;
    const user = state.users.filter(user => user.email === email || user.username === username);
    if(user[0]) {
      setButtonClicked(false);
      setInputFieldsReady(false);
      return Manager.warning('E-mail or Username is already taken, please contact support if it is yours', 'Error occured', 2000);
    }
    fetch(jsonstoreurl, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({
        ...state,
        users: [{
          email: email,
          username: username,
          fullname: fullname,
          password: password
        }].concat(state.users)
      })
    }).then(response => {
      console.log(response);
      if(response.status !== 200) {
        setButtonClicked(false);
        setInputFieldsReady(false);
        return Manager.warning('Server-side error occured, please try later', 'Error occured', 2000);
      }
      Manager.success('You will be redirected in a few seconds', 'Success!', 2000);
      window.localStorage.setItem('username', username);
      setTimeout(() => { setRegistered(true) }, 3000);
    });
  }, [inputFieldsReady]);

  return (
    registered ? <Redirect to={{ pathname: '/profile' }} /> : (
      <Background>
        <LoginForm { ...props }>
          { props.isMobile ? <h3>Sign Up To Triprun</h3> : <h1>Sign Up To Triprun</h1> }
          <Center { ...props }>
            <Input type="text" placeholder="Username" onChange={ (e) => { setUsername(e.target.value) } } />
            <Input type="text" placeholder="Email*" onChange={ (e) => { setEmail(e.target.value) } } />
            <Input type="text" placeholder="Full Name" onChange={ (e) => { setFullname(e.target.value) } } />
            <Input type="password" placeholder="Password*" onChange={ (e) => { setPassword(e.target.value) } } />
            <Input type="password" placeholder="Repeat Password*" onChange={ (e) => { setRepassword(e.target.value) } } />
            <Submit type="submit" value="Sign Up" onClick={ handleClick } />
            <Small>Already have an account? <Link to="/sigup">Sign in.</Link></Small>
          </Center>
        </LoginForm>
        <Notification />
      </Background>
    )
  );
};

export default Register;
