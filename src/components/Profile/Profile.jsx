import React, { useState, useEffect } from 'react';

import { Redirect } from 'react-router-dom';

import styled from 'styled-components';

import moment from 'moment';

import { Map } from './../Micro/Map.jsx';

import { CircledAvatarBig } from './../Micro/CircledAvatar.jsx';

const Wrap = styled.div`
  width: 60vw;
  margin-left: 20vw;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  color: rgba(0,0,0,0.7);

  a {
    text-decoration: none;
    color: #69BCD5;
  }

  hr {
    border: none;
    background: rgba(0,0,0,0.1);
    height: 0.5px;
    width: 86%;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 20px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 380px;
  max-height: 420px;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 2px;
  justify-content: center;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2.5;
`;

const InnerColumn = styled(Column)`
  width: 90%;
`;

const Marginer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-left: 10%;
`;

const Numbers = styled(Column)`
  justify-content: center;
  text-align: center;
  cursor: pointer;

  h2 {
    margin: 0;
    padding: 0;
    margin-bottom: 4px;
    font-weight: 300;
  }

  small {
    margin: 0;
    padding: 0;
    color: #69BCD5;
  }
`;

const ShortBio = styled.p`
  text-align: center;
`;

const Welcome = styled.h1`
  margin: 0;
  padding: 0;
  margin-bottom: 1px;
`;

const UnderWelc = styled.small`
  margin: 0;
  padding: 0;
  color: rgba(0,0,0,0.3);

  u:hover {
    color: #69BCD5;
    cursor: pointer;
  }
`;

const About = styled.div`
  width: 80%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const LQuote = styled.h1`
  text-align: left;
  margin: 0;
  padding: 0;
`;

const RQuote = styled.h1`
  text-align: right;
  margin: 0;
  padding: 0;
`;

const Quote = styled.p`
  margin: 0;
  padding: 0;
  padding-left: 38px;
  padding-right: 50px;
`;

const CenterUsername = styled.h4`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const UsernameInput = styled.input`
  outline: none;
  border: none;
  width: 70%;
  font-size: 14pt;
  text-align: center;

  &::-webkit-contacts-auto-fill-button,
  &::-webkit-credentials-auto-fill-button {
    visibility: hidden;
    pointer-events: none;
    position: absolute;
    right: 0;
  }
`;

const Profile = (props) => {

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [unauthorized, unauthorize] = useState(false);
  const [id] = useState(window.location.pathname.split('/')[2]);

  const profile = async () => {
    if(id) {
      const response = await fetch(`http://localhost:3030/user/profile/${id}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        redirect: 'follow',
        referrer: 'no-referrer'
      });
      const data = await response.json();
      const code = data.statusCode || 200;
      if(code === 200) return data;
      return null;
    } else {
      const response = await fetch('http://localhost:3030/user/profile', {
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
          accessToken: window.localStorage.getItem('access-token')
        })
      });
      const data = await response.json();
      const code = data.statusCode || 200;
      if(code === 200) return data;
      return null;
    }
  };

  useEffect(() => {
    if(user) return setLoading(false);
    profile().then(data => {
      if(!data && !id) unauthorize(true);
      setUser(data);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    });
  }, [user]);

  return(
    unauthorized ? <Redirect to={{ pathname: '/signin' }} /> : loading ? <Wrap></Wrap> : (
      <Wrap>
        <Card>
          <CenterUsername>
            { user.userName ? <a href="/profile">@{ user.userName }</a> :
              !id ? <UsernameInput type="text" autocomplete="off" placeholder="Username" /> : <a href={`/profile/${window.location.pathname.split('/')[2]}`}>No username yet</a>
            }
          </CenterUsername>
          <CircledAvatarBig src={ user.avatar || 'https://dwrhx129r2-flywheel.netdna-ssl.com/wp-content/uploads/2015/08/blank-avatar.png' } />
          <br />
          <a href="/">Update photo</a>
          <br />
          <hr />
          <ShortBio>23 y.o., Saint-Petersburg.<br />Been to 13 countries.</ShortBio>
          <br />
          <Row>
            <Numbers>
              <h2>62</h2>
              <small>pictures</small>
            </Numbers>
            <Numbers>
              <h2>133</h2>
              <small>followers</small>
            </Numbers>
            <Numbers>
              <h2>27</h2>
              <small>following</small>
            </Numbers>
          </Row>
        </Card>
        <Column>
          <InnerColumn>
            <Marginer>
              <Welcome>Hi, I'm { user.firstName }!</Welcome>
              <UnderWelc>Joined { moment(user.joined).format('MMM. DD, YYYY') } • <u>Travel map</u></UnderWelc>
              <About>
                <LQuote>“</LQuote>
                <Quote>Traveller, software architect & developer, University drop-out full of dreams and courage.</Quote>
                <RQuote>”</RQuote>
              </About>
            </Marginer>
            <Map />
            <Marginer>

            </Marginer>
          </InnerColumn>
        </Column>
      </Wrap>
    )
  );
};

export default Profile;
