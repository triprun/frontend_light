import React, { useState, useEffect } from 'react';

import { Redirect } from 'react-router-dom';

import styled from 'styled-components';

import moment from 'moment';

import { CircledAvatarSimple } from './../Micro/CircledAvatar.jsx';

import { FlagIconCircled } from './../FlagIcon/FlagIcon';

const Wrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 20px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const LeftColumn = styled(Column)`
  flex: 9;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  z-index: 2;
`;

const RightColumn = styled(Column)`
  flex: 11;
  background: rgb(244,245,248);
  z-index: 1;
`;

const InnerColumn = styled(Column)`
  width: 100%;
  height: 100%;
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

const ChatButton = styled.div`
  padding: 6px 6px;
  background: rgb(81, 110, 236);
  color: white;
  text-align: center;
  border-radius: 20px;
  font-size: 10pt;
  width: 60%;
`;

const DownloadButton = styled.div`
  width: 40px;
  height: 40px;
  padding: 6px 6px;
  background: rgba(0, 158, 218, 0.3);
  color: white;
  border-radius: 4px;
`;

const Profile = (props) => {

  const [loading, setLoading] = useState(false);
  // const [user, setUser] = useState(null);
  const [unauthorized, unauthorize] = useState(false);
  // const [id] = useState(window.location.pathname.split('/')[2]);

  // const profile = async () => {
  //   let url = 'http://85.143.216.19:3030/user/profile';
  //   let config = {
  //     method: 'GET',
  //     mode: 'cors',
  //     cache: 'no-cache',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*'
  //     },
  //     redirect: 'follow',
  //     referrer: 'no-referrer'
  //   };
  //   if(id) url = url + `/${id}`;
  //   else config.body = JSON.stringify({
  //     accessToken: window.localStorage.getItem('access-token')
  //   });
  //   const response = await fetch(url, config);
  //   const data = await response.json();
  //   const code = data.statusCode || 200;
  //   if(code === 200) return data;
  //   return null;
  // };

  // useEffect(() => {
  //   if(user) return setLoading(false);
  //   profile().then(data => {
  //     if(!data && !id) unauthorize(true);
  //     setUser(data);
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 500);
  //   });
  // }, [user]);

  return(
    unauthorized ? <Redirect to={{ pathname: '/signin' }} /> : loading ? <Wrap></Wrap> : (
      <Wrap>
        <LeftColumn>
          <InnerColumn>
            <Row style={{ width: '80%', marginTop: 60, marginLeft: '8%' }}>
              <Column>
                <p style={{ margin: 0, color: 'rgba(0,0,0,0.5)' }}>13 august – 24 august</p>
                <h1 style={{ margin: 0, marginTop: 16, fontSize: '36pt' }}>Eurotrip</h1>
                <Row>
                  <FlagIconCircled code='gb' />
                  <FlagIconCircled code='es' />
                  <FlagIconCircled code='pl' />
                </Row>
              </Column>
              <Column>
                <Column>
                  <p style={{ margin: 0, color: 'rgba(0,0,0,0.5)', textAlign: 'right' }}>Trip members:</p>
                  <Row style={{ paddingTop: 15, marginLeft: 18, justifyContent: 'flex-end' }}>
                    <CircledAvatarSimple src="http://www.inspiredluv.com/wp-content/uploads/2016/09/27-beautiful-girl-image.jpg" />
                    <CircledAvatarSimple src="http://www.inspiredluv.com/wp-content/uploads/2016/09/27-beautiful-girl-image.jpg" />
                    <CircledAvatarSimple src="http://www.inspiredluv.com/wp-content/uploads/2016/09/27-beautiful-girl-image.jpg" />
                    <CircledAvatarSimple src="http://www.inspiredluv.com/wp-content/uploads/2016/09/27-beautiful-girl-image.jpg" />
                  </Row>
                  <Row style={{ justifyContent: 'flex-end', marginLeft: 18 }}>
                    <ChatButton>
                      Открыть Чат
                    </ChatButton>
                  </Row>
                </Column>
              </Column>
            </Row>
            <About style={{ width: '80%', marginTop: 5, marginLeft: '8%', color: 'rgba(0,0,0,0.5)' }}>
              <LQuote>“</LQuote>
              <Quote>A short description of a trip that is being planned, so every newcomer (freshmen) might understand what kind of trip they join.</Quote>
              <RQuote>”</RQuote>
            </About>
            <Row style={{ width: '80%', marginTop: 5, marginLeft: '8%' }}>
              <Column>
                <p style={{ margin: 0, marginBottom: 12, color: 'rgba(0,0,0,0.5)' }}>Длительность</p>
                <p style={{ margin: 0 }}>3 дня</p>
              </Column>
              <Column>
                <p style={{ margin: 0, marginBottom: 12, color: 'rgba(0,0,0,0.5)' }}>Страны и города</p>
                <p style={{ margin: 0 }}>Москва, Киев, Пекин, Токио</p>
              </Column>
              <Column>
                <p style={{ margin: 0, marginBottom: 12, color: 'rgba(0,0,0,0.5)' }}>Включено</p>
                <p style={{ margin: 0 }}>Отель, Транспорт, Обед</p>
              </Column>
            </Row>
            <br />
            <br />
            <Column style={{ width: '80%', marginTop: 5, marginBottom: 20, marginLeft: '8%', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
              <Column style={{ width: '78%' }}>
                <Row>
                  <DownloadButton />
                  <Column>
                    <p style={{ margin: 0, marginTop: 2 }}>Document 1</p>
                    <p style={{ marginTop: 10, color: 'rgba(0,0,0,0.5)' }}>This is a description to the document, if any exists</p>
                  </Column>
                </Row>
              </Column>
            </Column>
            <Column style={{ width: '80%', marginTop: 5, marginBottom: 20, marginLeft: '8%', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
              <Column style={{ width: '78%' }}>
                <Row>
                  <DownloadButton />
                  <Column>
                    <p style={{ margin: 0, marginTop: 2 }}>Document 1</p>
                    <p style={{ marginTop: 10, color: 'rgba(0,0,0,0.5)' }}>This is a description to the document, if any exists</p>
                  </Column>
                </Row>
              </Column>
            </Column>
            <Column style={{ width: '80%', marginTop: 5, marginBottom: 20, marginLeft: '8%', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
              <Column style={{ width: '78%' }}>
                <Row>
                  <DownloadButton />
                  <Column>
                    <p style={{ margin: 0, marginTop: 2 }}>Document 1</p>
                    <p style={{ marginTop: 10, color: 'rgba(0,0,0,0.5)' }}>This is a description to the document, if any exists</p>
                  </Column>
                </Row>
              </Column>
            </Column>
          </InnerColumn>
        </LeftColumn>
        <RightColumn>
          <InnerColumn>
            <Column>
              <Row style={{ width: '90%', marginLeft: '5%', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                <Row style={{ justifyContent: 'flex-start', marginTop: 15, marginBottom: 3 }}>
                  <p style={{ marginRight: 20, cursor: 'pointer', color: 'rgb(0, 158, 218)' }}>Tab 1</p>
                  <p style={{ marginRight: 20, cursor: 'pointer' }}>Tab 2</p>
                  <p style={{ marginRight: 20, cursor: 'pointer' }}>Tab 3</p>
                </Row>
              </Row>
              { /* continue here */ }
            </Column>
          </InnerColumn>
        </RightColumn>
      </Wrap>
    )
  );
};

export default Profile;
