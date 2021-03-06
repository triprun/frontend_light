import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import { jsonstoreurl, headers } from './../../hooks/useJSONStore.jsx';

import { CircledAvatarSimple } from './../Micro/CircledAvatar.jsx';

const MenuLine = styled.div`
  width: 100vw;
  height: 60px;
  background: transparent;
  margin: 0;
  position: absolute;
  z-index: 9999;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: #69BCD5;
`;

const LinkText = styled.p`
  padding: 0;
  margin: 0;
  padding-top: 12px;
  padding-right: 18px;
`;

export const UserMenu = (props) => {
  const [unauthorized, unauthorize] = useState(false);
  const [okay, setOkay] = useState(false);
  const [state, setState] = useState(null);
  const [stateUpdated, setStateUpdated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('username');
    if(!token) return unauthorize(true);
    setOkay(true);
  }, []);

  useEffect(() => {
    if(!okay) return;
    fetch(jsonstoreurl + '/latest', { headers: headers }).then(res => res.json()).then(data => {
      setState(data);
      setTimeout(() => {
        setStateUpdated(true);
      }, 100);
    });
  }, [okay]);

  useEffect(() => {
    if(!stateUpdated) return;
    if(!state) return setState({
      plans: [],
      users: []
    });
    const split = window.location.href.split('/');
    const found = state.users.filter(user => user.username === window.localStorage.getItem('username'));
    if(!found) unauthorize(true);
    setUser(found[0]);
  }, [stateUpdated]);

  return unauthorized ? (<Menu>
    <Link to="/signin"><LinkText>Sign In</LinkText></Link>
    <Link to="/signup"><LinkText>Sign Up</LinkText></Link>
  </Menu>) : (<Menu>
    <Link to="/"><LinkText>Home</LinkText></Link>
    <Link to="/plans"><LinkText>My Plans</LinkText></Link>
    <Link to="/profile">
      <CircledAvatarSimple src={ user ? user.avatar : 'https://dwrhx129r2-flywheel.netdna-ssl.com/wp-content/uploads/2015/08/blank-avatar.png' } />
    </Link>
  </Menu>);
}

export const HeadMenu = (props) => {
  return (
    <MenuLine>
      <UserMenu style={{ width: "98vw", height: "50px", marginLeft: "1vw", marginTop: "5px" }} { ...props } />
    </MenuLine>
  );
};
