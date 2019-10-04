import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

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
  width: 98vw;
  height: 50px;
  margin-left: 1vw;
  margin-top: 5px;
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

export const HeadMenu = (props) => {
  const [unauthorized, unauthorize] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('username');
    if(!token) unauthorize(true);
  }, []);

  return (
    unauthorized ? <></> : <MenuLine>
      <Menu>
        <Link to="/"><LinkText>Home</LinkText></Link>
        <Link to="/plans"><LinkText>My Plans</LinkText></Link>
        <Link to="/profile">
          <CircledAvatarSimple src={ props.avatar || 'https://dwrhx129r2-flywheel.netdna-ssl.com/wp-content/uploads/2015/08/blank-avatar.png' } />
          </Link>
      </Menu>
    </MenuLine>
  );
};
