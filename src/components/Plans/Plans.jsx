import React, { useState, useEffect } from 'react';

import { Redirect, NavLink } from 'react-router-dom';

import styled from 'styled-components';

import moment from 'moment';

import { jsonstoreurl } from './../../hooks/useJSONStore.jsx';

import {
  fetchFromType,
  RestaurantIcon,
  SightseeingIcon,
  HotelIcon,
  PhotoplaceIcon,
  FavouriteIcon,
  NewplaceIcon
} from './../Micro/CommonIcons.jsx';

import { Manager, Notification } from './../Micro/Notifications.jsx';

import { CircledAvatarSimple } from './../Micro/CircledAvatar.jsx';
import { CityTimeFilter } from './../Micro/CityTimeFilter.jsx';

import { FlagIconCircled } from './../FlagIcon/FlagIcon';

const Wrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
`;

const WrapCentered = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  flex: 4;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  z-index: 2;
`;

const RightColumn = styled(Column)`
  flex: 12;
  background: rgb(244,245,248);
  z-index: 1;
  overflow: scroll;
`;

const InnerColumn = styled(Column)`
  width: 100%;
  height: 100%;
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

const ChatButton = styled.div`
  padding: 8px 27px;
  background: rgb(81, 110, 236);
  color: white;
  text-align: center;
  border-radius: 24px;
  font-size: 10pt;
  cursor: pointer;
`;

const DownloadButton = styled.div`
  width: 40px;
  height: 40px;
  padding: 6px 6px;
  background: rgba(0, 158, 218, 0.3);
  color: white;
  border-radius: 4px;
`;

const TODOCircle = styled.div`
  width: 8px;
  height: 8px;
  margin-left: 13px;
  margin-right: 13px;
  border-radius: 50px;
  background: ${ props => props.background };
  opacity: 0.7;
`;

const FileIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background: skyblue;
  opacity: 0.6;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  color: blue;
  cursor: pointer;
`;

const Filename = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 12pt;
  font-weight: normal;
`;

const Filedesc = styled.small`
  margin: 0;
  padding: 0;
  font-size: 8pt;
  color: rgba(0,0,0,0.5);
`;

const PlaceTypes = styled.div`
  width: 90%;
  height: 70px;
  background: white;
  border-radius: 12px;
  padding-left: 3%;
  padding-right: 3%;
  margin-left: 2%;
  margin-top: 1%;
  box-shadow: 0 0 9px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const PlaceItems = styled.div`
  width: 90%;
  min-height: 85%;
  background: white;
  border-radius: 5px;
  padding-left: 3%;
  padding-right: 3%;
  margin-left: 2%;
  margin-top: 1%;
  box-shadow: 0 0 9px rgba(0,0,0,0.1);
`;

const PlaceItem = styled.div`
  width: 100%;
  margin-left: 2%;
  height: 240px;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 12px;
  padding-bottom: 12px;
  flex: 5;
`;

const ImageSide = styled.div`
  display: flex;
  flex: 3;
`;

const ImageSideImage = styled.img`
  width: 100%;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
`;

const AddMemberBar = styled.div`
  position: absolute;
  width: 40vw;
  height: 5vh;
  margin-top: 47.5vh;
  background: white;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const AddMemberInput = styled.input`
  height: 3vh;
  width: 30vw;
  font-size: 18pt;
  border: none;
  outline: none;
`;

const AddMemberButton = styled.div`
  width: 7vw;
  height: 3vh;
  border-radius: 30px;
  background: rgb(81, 110, 236);
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 1vw;
`;

const CloseAddMember = styled.small`
  margin-top: -2.5vh;
  cursor: pointer;
  color: rgba(0,0,0,0.3);
`;

const Plans = (props) => {

  const [loading, setLoading] = useState(true);
  const [unauthorized, unauthorize] = useState(false);

  const [state, setState] = useState(null);
  const [stateUpdated, setStateUpdated] = useState(false);
  const [fetchedPlan, setPlan] = useState(null);

  const [selectedPlan, setSelectedPlan] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState(0);
  const [selectedCity, setSelectedCity] = useState(0);

  const [addMemberSelected, setAddMemberSelected] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(jsonstoreurl).then(res => res.json()).then(data => {
      setState(data.result);
      setTimeout(() => {
        setStateUpdated(true);
      }, 100);
    });
  }, []);

  useEffect(() => {
    if(!stateUpdated) return;
    const self = window.localStorage.getItem('username');
    const fetched = state.plans.map(plan => {
      return plan.members.filter(member => member.id === self) ? plan : null;
    }).filter(plan => plan != null)[selectedPlan];
    setPlan(fetched);
    setIsAdmin(fetched.members[0].id === self);
  }, [stateUpdated]);

  useEffect(() => {
    if(!fetchedPlan) return;
    setLoading(false);
  }, [fetchedPlan]);

  const handleAddMember = (e) => {
    e.preventDefault();
    setAddMemberSelected(!addMemberSelected);
  };

  const fetchUserAndAdd = (e) => {
    e.preventDefault();
    const input = document.getElementById('memberUsername').value;
    const self = window.localStorage.getItem('username');
    const alreadyMember = state.plans[selectedPlan].members.filter(member => member.id === input)[0];
    if(input === self || alreadyMember) return Manager.warning('User is on the trip already', 'Whoops!', 2000);
    const found = state.users.filter(user => user.username === input)[0];
    if(!found) return Manager.warning('User with such username not found', 'Not found', 2000);
    state.plans[selectedPlan].members = state.plans[selectedPlan].members.concat({ id: input });
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    fetch(jsonstoreurl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(state)
    }).then(response => response.json()).then(data => {
      if(data.ok) {
        setStateUpdated(false);
        setState(state);
        setStateUpdated(true);
        setAddMemberSelected(!addMemberSelected);
        Manager.success('User joined the trip', 'So quick', 2000);
      }
    });
  };

  const filterPlacesByType = (type) => {

  }

  return(
    unauthorized ? <Redirect to={{ pathname: '/signin' }} /> : loading ? <WrapCentered>
      <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" style={{ width: '110px' }} />
    </WrapCentered> : (
      <Wrap>
        <LeftColumn>
          <InnerColumn>
            <span style={{ color: 'skyblue', paddingTop: '15px', marginLeft: '8%' }}><NavLink to="/" style={{ textDecoration: 'none', color: 'skyblue' }}>{ '<–– Назад' }</NavLink></span>
            <Row style={{ width: '80%', marginTop: 20, marginLeft: '8%' }}>
              <Column>
                <p style={{ margin: 0, color: 'rgba(0,0,0,0.5)' }}>{ fetchedPlan.to } – { fetchedPlan.back }</p>
                <h1 style={{ margin: 0, marginTop: 16, fontSize: '36pt' }}>{ fetchedPlan.name }</h1>
                <Row>
                  { fetchedPlan.countries.map(country => <FlagIconCircled code={ country.flag } />) }
                </Row>
              </Column>
            </Row>
            <About style={{ width: '80%', marginTop: 5, marginLeft: '8%', color: 'rgba(0,0,0,0.5)' }}>
              <LQuote>“</LQuote>
              <Quote>{ fetchedPlan.description }</Quote>
              <RQuote>”</RQuote>
            </About>
            <Column>
              <p style={{ margin: 0, marginLeft: '-32px', color: 'rgba(0,0,0,0.5)', textAlign: 'center' }}>Участники путешествия:</p>
              <Row style={{ paddingTop: 10, justifyContent: 'center' }}>
                { fetchedPlan.members.map(member => {
                    const user = state.users.filter(user => user.username === member.id)[0];
                    return (
                      <NavLink to={ `/profile/${user.username}` }>
                        <CircledAvatarSimple src={ user.avatar || 'https://dwrhx129r2-flywheel.netdna-ssl.com/wp-content/uploads/2015/08/blank-avatar.png' } />
                      </NavLink>
                    );
                  })
                }
              </Row>
              <Row style={{ justifyContent: 'center' }}>
                <ChatButton onClick={ handleAddMember }>
                  Добавить
                </ChatButton>
              </Row>
            </Column>
            <Column>
              <table style={{ width: '90%', marginLeft: '5%' }}>
                <tbody>
                  <tr>
                    <td><h3>TODO Лист</h3></td>
                  </tr>
                  <tr>
                    <td>Собрать вещи</td>
                    <td><TODOCircle background="green" /></td>
                    <td>Готово</td>
                  </tr>
                  <tr>
                    <td>Выбрать гостиницу</td>
                    <td><TODOCircle background="orange" /></td>
                    <td>В процессе</td>
                  </tr>
                  <tr>
                    <td>Купить фетровое пальто</td>
                    <td><TODOCircle background="red" /></td>
                    <td>Срочно</td>
                  </tr>
                  <tr>
                    <td>Взять с собой книгу</td>
                    <td><TODOCircle background="skyblue" /></td>
                    <td>Не забыть</td>
                  </tr>
                </tbody>
              </table>
              <table style={{ width: '90%', marginLeft: '5%' }}>
                <tbody>
                  <tr>
                    <td><h3>Файлы</h3></td>
                  </tr>
                  <tr>
                    <td><FileIcon>↓</FileIcon></td>
                    <td><Filename>Document #1</Filename><Filedesc>This is my own passport, don't forget!!!</Filedesc></td>
                  </tr>
                  <tr>
                    <td><FileIcon>↓</FileIcon></td>
                    <td><Filename>Passport copy</Filename><Filedesc>This is my second passport copy just in case lol</Filedesc></td>
                  </tr>
                  <tr>
                    <td><FileIcon>↓</FileIcon></td>
                    <td><Filename>Tickets</Filename><Filedesc>Our tickets for a flight there-n-back</Filedesc></td>
                  </tr>
                </tbody>
              </table>
            </Column>
          </InnerColumn>
        </LeftColumn>
        <RightColumn>
          <InnerColumn>
            <PlaceTypes>
              <Row>
                <h4 style={{ paddingTop: '5px', cursor: 'pointer' }}>Все места</h4>
                <h4 style={{ paddingTop: '5px', cursor: 'pointer' }}>Отели</h4>
                <h4 style={{ paddingTop: '5px', cursor: 'pointer' }}>Рестораны</h4>
                <h4 style={{ paddingTop: '5px', cursor: 'pointer' }}>Достопримечательности</h4>
                <h4 style={{ paddingTop: '5px', cursor: 'pointer' }}>Места для фото</h4>
                <h4 style={{ paddingTop: '5px', cursor: 'pointer' }}>Избранные</h4>
                <h4 style={{ paddingTop: '5px', cursor: 'pointer' }}>Мои места</h4>
              </Row>
            </PlaceTypes>
            <PlaceItems>
              <h3>{ fetchedPlan.countries[selectedCountry].cities[selectedCity].name }, { fetchedPlan.countries[selectedCountry].name }</h3>
              <Row style={{ width: '100%' }}>
                <CityTimeFilter days={[{
                  date: '13 august',
                  wname: 'Monday'
                }, {
                  date: '14 august',
                  wname: 'Tuesday'
                }]} />
                <Column style={{ width: '85%' }}>
                  { fetchedPlan.countries[selectedCountry].cities[selectedCity].places.map(place => {
                      return (
                        <>
                          <PlaceItem>
                            <TextSide>
                              <small style={{ color: 'grey' }}>{ fetchFromType(place.type) } { place.type }</small>
                              <h2 style={{ margin: 0, padding: 0, marginTop: 8, marginBottom: 8 }}>BBQ inn, Meat-o-rant</h2>
                              <small style={{ color: 'grey' }}>В { place.arrival } | Открыто: { place.open } - { place.close } | Меню</small>
                              <br />
                              <small style={{ color: 'grey' }}>Адрес: { place.address }</small>
                              <br />
                              <small style={{ color: 'skyblue' }}>Комментарии...</small>
                            </TextSide>
                            <ImageSide>
                              <ImageSideImage src={ place.image } />
                            </ImageSide>
                          </PlaceItem>
                          <br />
                          <br />
                        </>
                      );
                    })
                  }
                </Column>
              </Row>
              <br />
              <br />
            </PlaceItems>
          </InnerColumn>
          <br />
          <br />
        </RightColumn>
        <AddMemberBar style={{ display: addMemberSelected ? 'flex' : 'none' }}>
          <AddMemberInput id="memberUsername" type="text" placeholder="Введите юзернейм пользователя" />
          <AddMemberButton onClick={ fetchUserAndAdd } >Добавить</AddMemberButton>
          <CloseAddMember onClick={ handleAddMember }>x</CloseAddMember>
        </AddMemberBar>
        <Notification />
      </Wrap>
    )
  );
};

export default Plans;
