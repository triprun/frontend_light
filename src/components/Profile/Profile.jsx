import React, { useState, useEffect } from 'react';

import { Redirect, NavLink } from 'react-router-dom';

import { Subject } from 'rxjs';

import { debounceTime } from 'rxjs/operators';

import styled from 'styled-components';

import moment from 'moment';

import { jsonstoreurl } from './../../hooks/useJSONStore.jsx';

import { Map } from './../Micro/Map.jsx';
import { HeadMenu } from './../Micro/HeadMenu.jsx';

import { CircledAvatarBig } from './../Micro/CircledAvatar.jsx';

import { Manager, Notification } from './../Micro/Notifications.jsx';

import { TripCard, FirstCardLong, LastCardLong } from './../Micro/TripCard.jsx';
import { StoryCard, FirstStoryCardLong, LastStoryCardLong } from './../Micro/StoryCard.jsx';

const Outer = styled.div``;

const Wrap = styled.div`
  width: 60vw;
  margin-left: 20vw;
  padding-top: 80px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  color: rgba(0,0,0,0.7);

  NavLink {
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

const Link = styled(NavLink)`
  text-decoration: none;
  color: #69BCD5;
`;

const WrapDoubler = styled.div`
  width: 60vw;
  margin-left: 20vw;
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  color: rgba(0,0,0,0.7);

  NavLink {
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
  font-size: 34pt;
`;

const UnderWelc = styled.small`
  margin: 0;
  padding: 0;
  color: rgba(0,0,0,0.3);

  font-size: 12pt;

  u:hover {
    color: #69BCD5;
    cursor: pointer;
  }
`;

const About = styled.div`
  width: 80%;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 18pt;
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

const ScrollRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none
  }
`;

const Profile = (props) => {
  const [state, setState] = useState(null);
  const [stateUpdated, setStateUpdated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [unauthorized, unauthorize] = useState(false);
  const [id] = useState(window.location.pathname.split('/')[2]);
  const [newUsername] = useState(new Subject());
  const [newFullname] = useState(new Subject());

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
  //   if(id) url = `${url}/${id}`;
  //   else config.headers = {
  //     ...config.headers,
  //     'Authorization': `${window.localStorage.getItem('access-token')}`
  //   }
  //   const response = await fetch(url, config);
  //   const data = await response.json();
  //   const code = data.statusCode || 200;
  //   if(code === 200) return data;
  //   return null;
  // };

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
    if(!state) return setState({
      plans: [],
      users: []
    });
    const split = window.location.href.split('/');
    const found = state.users.filter(user => user.username === (split[split.length - 1] === 'profile' ? window.localStorage.getItem('username') : split[split.length - 1]));
    if(!found) unauthorize(true);
    setUser(found[0]);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [stateUpdated]);

  // useEffect(() => {
  //   newUsername.pipe(debounceTime(1000)).subscribe(async debounced => {
  //     if(debounced.length < 5) return;
  //     const response = await fetch('https://85.143.216.19:3030/user/profile', {
  //       method: 'POST',
  //       mode: 'cors',
  //       cache: 'no-cache',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Access-Control-Allow-Origin': '*',
  //         'Authorization': `${window.localStorage.getItem('access-token')}`
  //       },
  //       redirect: 'follow',
  //       referrer: 'no-referrer',
  //       body: JSON.stringify({
  //         userName: debounced
  //       })
  //     });
  //     const body = await response.json();
  //     if(body.userName === debounced) Manager.success('Username saved! It will appear with your next visit', 'Success!', 2000);
  //     else Manager.warning('Username is already taken', 'Oh, no!', 2000);
  //   })
  // }, []);

  // useEffect(() => {
  //   newFullname.pipe(debounceTime(1000)).subscribe(async debounced => {
  //     if(debounced.length < 5) return;
  //     const response = await fetch('https://85.143.216.19:3030/user/profile', {
  //       method: 'POST',
  //       mode: 'cors',
  //       cache: 'no-cache',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Access-Control-Allow-Origin': '*',
  //         'Authorization': `${window.localStorage.getItem('access-token')}`
  //       },
  //       redirect: 'follow',
  //       referrer: 'no-referrer',
  //       body: JSON.stringify({
  //         firstName: debounced.split(' ')[0],
  //         lastName: debounced.split(' ')[1]
  //       })
  //     });
  //     const body = await response.json();
  //     if(`${body.firstName} ${body.lastName}` === debounced) Manager.success('Fullname saved! It will appear with your next visit', 'Success!', 2000);
  //     else Manager.warning('Something went wrong! Try again later.', 'Oh, no!', 2000);
  //   })
  // }, []);

  const handleUsername = e => {
    const username = e.target.value;
    newUsername.next(username);
  };

  const handleFullname = e => {
    const fullname = e.target.value;
    newFullname.next(fullname);
  };

  return(
    unauthorized ? <Redirect to={{ pathname: '/signin' }} /> : loading ? <WrapCentered>
      <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" style={{ width: '110px' }} />
    </WrapCentered> : (
      <Outer>
        <HeadMenu />
        <Wrap>
          <Card>
            <CenterUsername>
              { user.username ? <NavLink to={ `/profile/${user.username}` }>@{ user.username }</NavLink> :
                !id ? <UsernameInput id="username" type="text" autocomplete="off" placeholder="Username" onChange={handleUsername} /> : <NavLink to={`/profile/${window.location.pathname.split('/')[2]}`}>No username yet</NavLink>
              }
            </CenterUsername>
            <CircledAvatarBig src={ user.avatar || 'https://dwrhx129r2-flywheel.netdna-ssl.com/wp-content/uploads/2015/08/blank-avatar.png' } />
            <br />
            <NavLink to="/">Update photo</NavLink>
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
                <Welcome>Hello, my name is { user.fullname ? user.fullname : <UsernameInput type="text" autocomplete="off" placeholder="Fullname" onChange={handleFullname} /> }!</Welcome>
                <UnderWelc>Joined { moment(user.joined).format('MMM. DD, YYYY') } • <u><NavLink to="/plans">Travel map</NavLink></u></UnderWelc>
                <About>
                  <LQuote>“</LQuote>
                  <Quote>Traveller, software architect & developer, University drop-out full of dreams and courage.</Quote>
                  <RQuote>”</RQuote>
                </About>
                <UnderWelc>Living in Saint-Petersburg, Russia.</UnderWelc>
              </Marginer>
              <hr />
              <Marginer>

              </Marginer>
            </InnerColumn>
          </Column>
        </Wrap>
        <br />
        <br />
        <WrapDoubler>
          <Quote style={{ fontSize: '18pt' }}>{ user.fullname.split(' ')[0] }'s plans <UnderWelc>–––––––––––––––––––––––––––––––––––</UnderWelc></Quote>
          <br />
          <br />
          <br />
        </WrapDoubler>
        <ScrollRow style={{ width: '100vw' }}>
          <FirstCardLong />
          <TripCard
            source="https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"
            name="London all around & round"
            dates="Jun-Dec 2018"
            code="gb-eng"
            city="London"
          />
          <TripCard
            style={{ marginLeft: '30px' }}
            source="https://www.lastminute.com/holidays/img/germany/munich.jpg"
            name="Eurotrip"
            dates="Dec-Jan 2018-2019"
            code="de"
            city="Munich"
          />
          <TripCard
            style={{ marginLeft: '30px' }}
            source="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_232,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F150806121501-sg-50---lead-image.jpg"
            name="Asia never sleeps"
            dates="Apr-May 2019"
            code="sg"
            city="Singapore"
          />
          <TripCard
            style={{ marginLeft: '30px' }}
            source="https://cdn.japantimes.2xx.jp/wp-content/uploads/2017/10/n-tokyo-a-20171013-870x581.jpg"
            name="Japanese summer"
            dates="Jun-Jul 2019"
            code="jp"
            city="Tokyo"
          />
          <LastCardLong />
        </ScrollRow>
        <WrapDoubler>
          <Quote style={{ fontSize: '18pt' }}>{ user.fullname.split(' ')[0] }'s photos <UnderWelc>–––––––––––––––––––––––––––––––––––</UnderWelc></Quote>
          <br />
          <br />
          <br />
        </WrapDoubler>
        <ScrollRow style={{ width: '100vw'}}>
          <FirstStoryCardLong />
          <StoryCard
            source="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/london-eye/london-eye.jpg"
            text="MEOW"
          />
          <StoryCard
            style={{ marginLeft: '30px' }}
            source="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/10/13/tokyo-main.jpg?w968h681"
            text=""
          />
          <StoryCard
            style={{ marginLeft: '30px' }}
            source="https://ssl.tzoo-img.com/images/tzoo.18886.0.651788.Singapore.jpg?width=412&spr=3"
            text=""
          />
          <StoryCard
            style={{ marginLeft: '30px' }}
            source="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Falexcapri%2Ffiles%2F2018%2F09%2FSingapore-1200x800.jpg"
            text=""
          />
          <StoryCard
            style={{ marginLeft: '30px' }}
            source="https://www.mikesbiketours.com/munich/images/Tour%20Photos%20570X%20380/Munich-&-Beyond.jpg"
            text=""
          />
          <StoryCard
            style={{ marginLeft: '30px' }}
            source="https://media.timeout.com/images/105046319/630/472/image.jpg"
            text=""
          />
          <LastStoryCardLong />
        </ScrollRow>
        <br />
        <br />
        <br />
        <br />
        <Notification />
      </Outer>
    )
  );
};

export default Profile;
