import React, { useState, useEffect } from 'react';

import { Redirect, NavLink } from 'react-router-dom';

import styled from 'styled-components';

import moment from 'moment';

import { jsonstoreurl } from './../../hooks/useJSONStore.jsx';

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

const countries = [
  {
    name: 'Spain',
    flag: 'sp',
    members: [
      {
        id: 'rmnff'
      }
    ],
    cities: [
      {
        name: 'Barcelona',
        arrival: '13 aug',
        departure: '15 aug',
        places: [{
          type: 'Restaurant',
          name: 'BBQ Inn, Meat-o-rant',
          arrival: '12 pm',
          open: '10 am',
          close: '7 pm',
          menu: 'link',
          address: 'Nou de San Francesc 7',
          comments: [],
          image: 'https://tomesto.ru/img/place/000/022/585/restoran-brisket-bbq-brisket-na-smolenskom-bulvare_8e6c9_full-128780.jpg'
        }, {
          type: 'Sightseeing',
          name: 'Kirche Sigrada Familia Barcelonar',
          arrival: '2 pm',
          open: null,
          close: null,
          menu: null,
          address: 'Nou de Capitol',
          comments: [],
          image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6f/5d/13.jpg'
        }, {
          type: 'Sightseeing',
          name: 'Barcelona Casa Batlo',
          arrival: '4 pm',
          open: null,
          close: null,
          menu: null,
          address: 'Nou de Capitol',
          comments: [],
          image: 'https://cdn02.visitbarcelona.com/files/5531-3973-imagenCAT/BarcelonaGaudi-T24-d_O.jpg'
        }, {
          type: 'Restaurant',
          name: 'Shisha palace, Shisha bar',
          arrival: '6 pm',
          open: '2 pm',
          close: '01 am',
          menu: 'link',
          address: 'Nou de San Francesc 7',
          comments: [],
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/04/b4/5f/2d/mono-shisha-bar.jpg'
        }]
      }
    ]
  }
]

const RestaurantIcon = () => (<i style={{ color: '#FF4040' }} className="fas fa-utensils"></i>)
const SightseeingIcon = () => (<i style={{ color: '#32CD32' }} className="fas fa-monument"></i>)
const HotelIcon = () => (<i style={{ color: '#1AA3FF' }} className="fas fa-bed"></i>)
const PhotoplaceIcon = () => (<i style={{ color: '#6E7074' }} className="fas fa-camera-retro"></i>)
const FavouriteIcon = () => (<i style={{ color: '#FFBF00' }} className="fas fa-star"></i>)
const NewplaceIcon = () => (<i style={{ color: '#7EBCA1' }} className="fas fa-plus-circle"></i>)

const fetchFromType = (type) => {
  switch(type) {
    case 'Restaurant':
      return <RestaurantIcon />
    case 'Sightseeing':
      return <SightseeingIcon />
    case 'Hotel':
      return <HotelIcon />
    case 'Photoplace':
      return <PhotoplaceIcon />
    case 'Favourite':
      return <FavouriteIcon />
    default:
      break;
  }
}

const Plans = (props) => {

  const [loading, setLoading] = useState(true);
  // const [user, setUser] = useState(null);
  const [unauthorized, unauthorize] = useState(false);
  // const [id] = useState(window.location.pathname.split('/')[2]);
  const [fetchedPlan, setPlan] = useState(null);
  const [state, setState] = useState(null);
  const [stateUpdated, setStateUpdated] = useState(false);
  const [selectedCity, setSelectedCity] = useState(0);
  const [addMemberSelected, setAddMemberSelected] = useState(false);

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
    const self = window.localStorage.getItem('username')[0];
    const fetched = state.plans.map(plan => {
      if(plan.members.filter(member => member.id === self)) {
        return plan
      } else {
        return null
      }
    })[0];
    setPlan(fetched);
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
    const alreadyMember = state.plans[0].members.filter(member => member.id === input)[0];
    if(input === self || alreadyMember) return;
    const found = state.users.filter(user => user.username === input)[0];
    if(!found) return;
    state.plans[0].members = state.plans[0].members.concat({ id: input });
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    fetch(jsonstoreurl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(state)
    }).then(response => response.json()).then(data => {
      console.log(data);
    });
  }

  // const profile = async () => {
  //   let url = 'https://85.143.216.19:3030/user/profile';
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
    unauthorized ? <Redirect to={{ pathname: '/signin' }} /> : loading ? <WrapCentered>
      <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" style={{ width: '110px' }} />
    </WrapCentered> : (
      <Wrap>
        <LeftColumn>
          <InnerColumn>
            <span style={{ color: 'skyblue', paddingTop: '15px', marginLeft: '8%' }}><NavLink to="/" style={{ textDecoration: 'none', color: 'skyblue' }}>{ '<–– Назад' }</NavLink></span>
            <Row style={{ width: '80%', marginTop: 20, marginLeft: '8%' }}>
              <Column>
                <p style={{ margin: 0, color: 'rgba(0,0,0,0.5)' }}>13 август – 24 август</p>
                <h1 style={{ margin: 0, marginTop: 16, fontSize: '36pt' }}>Eurotrip</h1>
                <Row>
                  <FlagIconCircled code='gb' />
                  <FlagIconCircled code='es' />
                  <FlagIconCircled code='pl' />
                </Row>
              </Column>
            </Row>
            <About style={{ width: '80%', marginTop: 5, marginLeft: '8%', color: 'rgba(0,0,0,0.5)' }}>
              <LQuote>“</LQuote>
              <Quote>Краткое описание к планам, чтобы пользователи могли быстро ознакомиться с предстоящим путешествием до просмотра мест.</Quote>
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
          {
            // <InnerColumn>
            //   <Column>
            //     <Row style={{ width: '90%', marginLeft: '5%', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
            //       <Row style={{ justifyContent: 'flex-start', marginTop: 15, marginBottom: 3 }}>
            //         <p style={{ marginRight: 20, cursor: 'pointer', color: 'rgb(0, 158, 218)' }}>Tab 1</p>
            //         <p style={{ marginRight: 20, cursor: 'pointer' }}>Tab 2</p>
            //         <p style={{ marginRight: 20, cursor: 'pointer' }}>Tab 3</p>
            //       </Row>
            //     </Row>
            //     { /* continue here */ }
            //   </Column>
            // </InnerColumn>
          }
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
              <h3>{ fetchedPlan.cities[selectedCity].name }</h3>
              <Row style={{ width: '100%' }}>
                <CityTimeFilter days={[{
                  date: '13 august',
                  wname: 'Monday'
                }, {
                  date: '14 august',
                  wname: 'Tuesday'
                }]} />
                <Column style={{ width: '85%' }}>
                  { fetchedPlan.cities[selectedCity].places.map(place => {
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
      </Wrap>
    )
  );
};

export default Plans;
