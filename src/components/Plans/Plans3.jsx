import React, { useState, useEffect, useRef } from 'react';

import { Redirect, NavLink } from 'react-router-dom';

import styled, { css } from 'styled-components';

import moment from 'moment';

import { jsonstoreurl, headers } from './../../hooks/useJSONStore.jsx';

import {
  fetchFromType,
  RestaurantIcon,
  SightseeingIcon,
  HotelIcon,
  PhotoplaceIcon,
  FavouriteIcon,
  NewplaceIcon
} from './../Micro/CommonIcons.jsx';

import { UserMenu } from '../Micro/HeadMenu';

import { CircledAvatarSimple } from './../Micro/CircledAvatar.jsx';

import { Manager, Notification } from './../Micro/Notifications.jsx';

import { FlagIconCircle } from './../FlagIcon/FlagIcon';

import LogoImage from './logo.svg';

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeaderWrap = styled.div`
  width: 100vw;
  height: 6vh;
  position: absolute;
  margin-top: 0;
  margin-left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  background: white;
`;

const Header = styled.div`
  width: 90vw;
  margin-left: 5vw;
  height: 6vh;
  position: absolute;
  margin-top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const HeaderLogo = styled.img`
  height: 100%;
`;

const HeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeaderMenuItem = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 0;
  padding-top: 4vh;
  height: 6vh;
`;

const HeaderMenuItemText = styled.p`
  margin: 0;
  padding: 0;
  color: black;
  font-size: 16pt;
  height: 4vh;

  ${ props => props.disabled && css`
    color: grey;
    cursor: not-allowed;
  `}

  ${ props => props.active && css`
    border-bottom: 1px solid black;
  `}
`;

const HeaderMenuUserMenu = styled(UserMenu)`
  margin-right: -1vw;
`;

const HeadMenu = () => {
  const w = window.screen.width;
  const h = window.screen.height;
  return (<HeaderWrap><Header>
    { w < 700 ? <></> : <HeaderLogo src={LogoImage} /> }
    <HeaderMenu>
      <HeaderMenuItem><HeaderMenuItemText active>Plans</HeaderMenuItemText></HeaderMenuItem>
      <HeaderMenuItem><HeaderMenuItemText disabled>Map</HeaderMenuItemText></HeaderMenuItem>
      <HeaderMenuItem><HeaderMenuItemText disabled>TODO</HeaderMenuItemText></HeaderMenuItem>
      <HeaderMenuItem><HeaderMenuItemText disabled>Files</HeaderMenuItemText></HeaderMenuItem>
      <HeaderMenuItem><HeaderMenuItemText disabled>Tickets</HeaderMenuItemText></HeaderMenuItem>
    </HeaderMenu>
    { w < 700 ? <></> : <HeaderMenuUserMenu /> }
  </Header></HeaderWrap>);
}

const PlanHeaderWrap = styled.div`
  width: 100vw;
  background: white;
`;

const PlanHeader = styled.div`
  padding-top: 7vh;
  padding-bottom: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  margin-left: 5vw;
  height: 6vh;
  background: white;
`;

const PlanHeaderTripNameBox = styled.div`
  margin-left: 0;
`;

const PlanHeaderTripName = styled.h1`
  padding-top: 0;
  margin-top: 0;
  padding-bottom: 0;
  margin-bottom: 0;
`;

const PlanHeaderTripDates = styled.span`
  color: grey;
`;

const PlanHeaderTripCountries = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 6vh;
  background: white;
`;

const PlanHeaderTripChat = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 17vw;
  height: 6vh;
  margin-right: 0;
`;

const PlanTypes = styled.div`
  width: 98vw;
  height: 6vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 1vw;
`;

const PlanTypesItem = styled.div`
  padding-left: 17px;
  padding-right: 17px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 15px;
  text-align: center;
  min-width: 5vw;
  color: skyblue;
  cursor: pointer;
  margin-right: 10px;

  ${ props => props.active && css`
    background: white;
    font-weight: bold;
    color: black;
  `}
`;

const PlanWrap = styled.div`
  width: 98vw;
  margin-left: 1vw;
  overflow-x: scroll;
  display: flex;
  flex-direcrion: row;
`;

const PlanByDate = styled(Column)`
  min-width: 430px;
  margin-right: 1vw;
  min-height: 500px;
`;

const PlanByDateDate = styled.p`
  color: grey;
`;

const PlanByDateCard = styled.div`
  width: 95%;
  background: white;
  border-radius: 12px;
  margin-bottom: 15px;
`;

const PlanByDateCardWrap = styled.div`
  width: 96%;
  margin-left: 2%;
  padding-bottom: 14px;
`;

const AddMemberBar = styled.div`
  position: absolute;
  width: 40vw;
  margin-left: 30vw;
  height: 5vh;
  margin-top: 47.5vh;
  background: white;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0,0,0,0.2);
  z-index: 999;
`;

const AddMemberBarInner = styled.div`
  width: 40vw;
  marginLeft: 30vw;
  height: 5vh;
  background: white;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 999;
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

const ChatButton = styled.div`
  padding: 8px 27px;
  background: rgb(81, 110, 236);
  color: white;
  text-align: center;
  border-radius: 24px;
  font-size: 10pt;
  cursor: pointer;
`;

const WrapCentered = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const sortByDate = (array) => {
  const dates = [];
  const sorted = [];
  array.map(item => {
    const parsed = moment(item.date, "DD-MM-YYYY").unix();
    const position = dates.indexOf(parsed);
    if(position >= 0) sorted[position].push(item);
    else { sorted.push([item]); dates.push(parsed) }
  });
  return [sorted, dates];
};

const Item = (props) => {
  return props.item.type !== 'Airport' ? (
    <PlanByDateCard>
      <div style={{ position: 'relative' }}><span style={{ position: 'absolute', marginTop: '15px', marginLeft: '20px' }}>{ fetchFromType(props.item.type) }</span>
      <img src={ props.item.image } style={{ width: "100%", borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }} /></div>
      <PlanByDateCardWrap>
        <h3 style={{ margin: 0, padding: 0 }}>{ props.item.name }</h3>
        { props.item.address ? (<><small style={{ color: 'gray' }}>Address: <a style={{ textDecoration: 'none', color: 'skyblue' }} href={`https://maps.google.com/?q=${props.item.address}`} target="_blank">{ props.item.address.length > 30 ? `${props.item.address.slice(0, 29)}...` : props.item.address }</a></small><br /></>) : <></> }
        <small style={{ color: 'gray' }}>Arrival at: { props.item.arrival }</small><br/>
        <small style={{ color: 'gray' }}> { props.item.type === 'Transfer' || props.item.type === 'Event' ? '' : props.item.open ? `Open: ${props.item.open} - ${props.item.close}` : 'Open: All-day' }</small>
      </PlanByDateCardWrap>
    </PlanByDateCard>
  ) : (
    <PlanByDateCard>
      <PlanByDateCardWrap>
        <Column style={{ paddingTop: '12px' }}>
          <Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Row style={{ justifyContent: 'flex-start' }}><FlagIconCircle code={ props.state.plans[0].countries[props.item.from[0]].flag } />
            <Column>
              <p style={{ margin: 0, padding: 0, paddingTop: '5px' }}>{ `${props.state.plans[0].countries[props.item.from[0]].name}, ${props.state.plans[0].cities[props.item.from[0]][props.item.from[1]]}` }</p>
              <p style={{ margin: 0, padding: 0, paddingTop: '2px' }}>{ props.item.airportStart }</p>
            </Column></Row>
            <h2 style={{ color: 'gray', fontWeight: 200, margin: 0, padding: 0 }}>{ props.item.arrival }</h2>
          </Row>
          <Row style={{ position: 'relative', height: '18px', marginTop: '8px', marginBottom: '8px' }}>
            <div style={{ position: 'absolute', width: '100%', marginTop: '8px', height: '1px', background: 'rgba(0,0,0,0.1)' }} />
            <i style={{ position: 'absolute', marginTop: '1px', marginLeft: '14px' }} className="fas fa-plane"></i>
          </Row>
          <Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Row style={{ justifyContent: 'flex-start' }}><FlagIconCircle code={ props.state.plans[0].countries[props.item.destination[0]].flag } />
            <Column>
              <p style={{ margin: 0, padding: 0, paddingTop: '5px' }}>{ `${props.state.plans[0].countries[props.item.destination[0]].name}, ${props.state.plans[0].cities[props.item.destination[0]][props.item.destination[1]]}` }</p>
              <p style={{ margin: 0, padding: 0, paddingTop: '2px' }}>{ props.item.airportEnd }</p>
            </Column></Row>
            <Row style={{ justifyContent: 'flex-end' }}>
              <h2 style={{ color: 'gray', fontWeight: 200, margin: 0, padding: 0 }}>{ props.item.arrivalDestination }</h2>
              { props.item.skippedDays && <small style={{ color: 'red' }}>{ props.item.skippedDays < 0 ? '-' : '+' }{ props.item.skippedDays }</small>}
            </Row>
          </Row>
        </Column>
      </PlanByDateCardWrap>
    </PlanByDateCard>
  );
}

const ItemsList = React.memo(function ItemsList({ items, state }) {
  return items.map((item, index) => (
    <Item item={item} state={state} index={index} key={item.id} />
  ));
});

const Plans = (props) => {
  console.log(props.planid);
  const [state, setState] = useState(null);
  const [name, setName] = useState(null);
  const [members, setMembers] = useState(null);
  const [there, setThere] = useState(null);
  const [back, setBack] = useState(null);
  const [countries, setCountries] = useState(null);
  const [items, setItems] = useState(null);
  const [dates, setDates] = useState(null);

  const [addMemberSelected, setAddMemberSelected] = useState(false);

  const handleAddMember = (e) => {
    e.preventDefault();
    setAddMemberSelected(!addMemberSelected);
  };

  const fetchUserAndAdd = (e) => {
    e.preventDefault();
    const input = document.getElementById('memberUsername').value;
    const self = window.localStorage.getItem('username');
    const alreadyMember = state.plans[0].members.filter(member => member.id === input)[0];
    if(input === self || alreadyMember) return Manager.warning('User is on the trip already', 'Whoops!', 2000);
    const found = state.users.filter(user => user.username === input)[0];
    if(!found) return Manager.warning('User with such username not found', 'Not found', 2000);
    state.plans[0].members = state.plans[0].members.concat({ id: input });
    fetch(jsonstoreurl, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(state)
    }).then(response => response.json()).then(data => {
      if(data.success) {
        setState(state);
        setMembers(state.plans[0].members);
        setAddMemberSelected(!addMemberSelected);
        Manager.success('User joined the trip', 'So quick', 2000);
      }
    });
  };

  useEffect(() => {
    fetch(jsonstoreurl + '/latest', { headers: headers }).then(res => res.json()).then(data => {
      const potentialPlan = data;
      const potentialName = data.plans[0].name;
      const potentialMembers = data.plans[0].members;
      const potentialThere = data.plans[0].to;
      const potentialBack = data.plans[0].back;
      const potentialCountries = data.plans[0].countries;
      const [sorted, sdates] = sortByDate(data.plans[0].places);
      setName(potentialName);
      setMembers(potentialMembers);
      setThere(potentialThere);
      setBack(potentialBack);
      setCountries(potentialCountries);
      setItems(sorted);
      setDates(sdates);
      setState(potentialPlan);
    });
  }, []);

  return(!items || !state ? <WrapCentered>
    <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" style={{ width: '110px' }} />
  </WrapCentered> : state.plans[0].members.filter(member => member.id === window.localStorage.getItem('username')).length < 1 ? <WrapCentered>
    <h3>You don't have any plan at the time.<br />Ask a friend to add you to their plan!</h3>
  </WrapCentered> : <div style={{ minHeight: '100vh', width: '100vw', background: '#F7F8FB', position: 'relative' }}>
    <AddMemberBar style={{ display: addMemberSelected ? 'block' : 'none' }}>
      <AddMemberBarInner style={{ display: 'flex' }}>
        <AddMemberInput id="memberUsername" type="text" placeholder="Введите юзернейм пользователя" />
        <AddMemberButton onClick={ fetchUserAndAdd } >Добавить</AddMemberButton>
        <CloseAddMember onClick={ handleAddMember }>x</CloseAddMember>
      </AddMemberBarInner>
    </AddMemberBar>
    <HeadMenu />
    <PlanHeaderWrap>
      <PlanHeader>
        <PlanHeaderTripNameBox>
          <Column>
            <PlanHeaderTripName>{ name }</PlanHeaderTripName>
            <PlanHeaderTripDates>{ `${moment(there, 'DD-MM-YYYY').format('DD MMMM YYYY')} – ${moment(back, 'DD-MM-YYYY').format('DD MMMM YYYY')}` }</PlanHeaderTripDates>
          </Column>
        </PlanHeaderTripNameBox>
        <PlanHeaderTripCountries></PlanHeaderTripCountries>
        <PlanHeaderTripChat>
          <ChatButton onClick={ handleAddMember }>
            Add Member
          </ChatButton>
          {
            members.map(member => {
              const user = state.users.filter(user => user.username === member.id)[0];
              return (
                <NavLink to={ `/profile/${user.username}` }>
                  <CircledAvatarSimple src={ user.avatar || 'https://dwrhx129r2-flywheel.netdna-ssl.com/wp-content/uploads/2015/08/blank-avatar.png' } />
                </NavLink>
              );
            })
          }
        </PlanHeaderTripChat>
      </PlanHeader>
    </PlanHeaderWrap>
    <PlanTypes>
      <PlanTypesItem active>All Places</PlanTypesItem>
      <PlanTypesItem>Hotels</PlanTypesItem>
      <PlanTypesItem>Restaurants</PlanTypesItem>
      <PlanTypesItem>Sightseeings</PlanTypesItem>
      <PlanTypesItem>Photo Places</PlanTypesItem>
    </PlanTypes>
    <PlanWrap>
      { items.map((arr, i) => {
        return (<PlanByDate>
          <PlanByDateDate>{ moment(dates[i] * 1000).format('D MMMM, dddd') }</PlanByDateDate>
          <ItemsList items={arr} state={state} />
        </PlanByDate>)
      }) }
    </PlanWrap>

    <Notification />
  </div>);
};

export default Plans;
