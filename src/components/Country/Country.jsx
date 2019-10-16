import React, { useState, useEffect } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import styled from 'styled-components';
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
import {FirstCardLong, TripCard} from "../Micro/TripCard";
import {CircledAvatarRow2} from "./../Micro/CircledAvatar2";
import {LikeSq} from "../Micro/LikeSq";

const Wrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
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

const Row100 = styled.div`
  width: 100vw;
  display: flex;
`;

const Row = styled.div`
  display: flex;
  margin-left: 5%;
  color: #fff;
`;

const Photo = styled.div`
    height: 300px;
    width: 250px;
    border-radius: 20px;
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

const Country = (props) => {

    const [unauthorized, unauthorize] = useState(false);
    const [loading, setLoading] = useState(true);
    const [country, setCountry] = useState(null);

    useEffect(() => {

        const country = {
            name : 'Россия',
            territory: 'Восточная Европа, Северная Азия',
            description: 'Россия — многонациональное государство с широким этнокультурным многообразием. Россия богата экскурсионными маршрутами и объектами: белокаменная Москва, Санкт–Петербург – город музей, многоликая Карелия, памятники древнерусских городов Золотого кольца, необъятный Байкал, вулканы Камчатки…',
            backgroundPhoto: 'https://s1.1zoom.ru/b5540/919/Russia_Forests_Camomiles_Birch_Grass_529167_1920x1080.jpg',
        };

        setCountry(country);
        setLoading(false);
    });

    return(
        unauthorized ? <Redirect to={{ pathname: '/signin' }} /> : loading ? <WrapCentered>
          <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" style={{ width: '110px' }} />
        </WrapCentered> : (
          <Wrap>
            <Row100 style={{
                height: '30vw',
                background: 'linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url('+country.backgroundPhoto+')',
                backgroundPosition: 'center',
                flexDirection: 'column',
            }}>
                <Row style={{marginTop: '60px', }}>
                    <span style={{ fontSize: '40px',}}><NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>{ '←' }</NavLink></span>
                </Row>
                <Row style={{flexDirection: 'column',}}>
                    <div style={{marginTop: '50px', fontSize: '45px',}}>{country.name}</div>
                    <div>{country.territory}</div>
                </Row>
                <Row style={{marginTop: '70px', width: '40%',}}>
                    <div>{country.description}</div>
                </Row>
                <Row style={{height: '35%', justifyContent: 'flex-end', }}>
                    <Row style={{flexDirection: 'column-reverse',}}>
                        <div style={{display: 'flex', marginRight: '200px',}}>
                        <CircledAvatarRow2
                            style={{ }}
                            sources={ ['https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/f8/Amelia_Pinney.jpg/revision/latest?cb=20151228165724', 'https://pbs.twimg.com/profile_images/763461232737210369/PFfZcFgn_400x400.jpg', 'https://pmctvline2.files.wordpress.com/2018/04/lucifer-season-3-episode-21.jpg?w=620'] }
                        />
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '20px', }}>
                            <div>
                              Janet, Maria, Anna
                            </div>
                            <div style={{ fontSize: '13px',}}>
                              and 15 peoples like this
                            </div>
                        </div>
                        </div>
                    </Row>
                    <Row style={{flexDirection: 'column-reverse', marginRight: '15px'}}>
                        <LikeSq/>
                    </Row>
                </Row>
            </Row100>
              <Row100 style={{marginTop: '50px',     flexFlow: 'column',}}>
                  <Row style={{width: '80%', flexFlow: 'row', justifyContent: 'space-between',     height: '50px'}}>
                      <div style={{color: '#000', fontSize: '30px',}}>Photos</div>
                      <div style={{color: '#000', fontSize: '30px',}}>See all</div>
                  </Row>
                  <Row style={{justifyContent: 'space-between',     width: '80%'}}>
                      <Photo style={{background: 'url("https://static.mk.ru/upload/entities/2018/02/02/articles/detailPicture/02/4e/e8/2c/73ea0f2bde878167fc47dcc25a8433f8.jpg")'}}></Photo>
                      <Photo style={{background: 'url("https://static.mk.ru/upload/entities/2018/02/02/articles/detailPicture/02/4e/e8/2c/73ea0f2bde878167fc47dcc25a8433f8.jpg")'}}></Photo>
                      <Photo style={{background: 'url("https://static.mk.ru/upload/entities/2018/02/02/articles/detailPicture/02/4e/e8/2c/73ea0f2bde878167fc47dcc25a8433f8.jpg")'}}></Photo>
                      <Photo style={{background: 'url("https://static.mk.ru/upload/entities/2018/02/02/articles/detailPicture/02/4e/e8/2c/73ea0f2bde878167fc47dcc25a8433f8.jpg")'}}></Photo>
                      <Photo style={{background: 'url("https://static.mk.ru/upload/entities/2018/02/02/articles/detailPicture/02/4e/e8/2c/73ea0f2bde878167fc47dcc25a8433f8.jpg")'}}></Photo>
                  </Row>
              </Row100>
            <Row100 style={{marginTop: '40px',}}>
                <ScrollRow style={{ width: '100vw', justifyContent: 'space-around', }}>
                    <TripCard
                        source="https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"
                        name="London all around & round"
                        dates="Jun-Dec 2018"
                        code="gb-eng"
                        city="London"
                    />
                    <TripCard
                        source="https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"
                        name="London all around & round"
                        dates="Jun-Dec 2018"
                        code="gb-eng"
                        city="London"
                    />
                    <TripCard
                        source="https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"
                        name="London all around & round"
                        dates="Jun-Dec 2018"
                        code="gb-eng"
                        city="London"
                    />
                </ScrollRow>
            </Row100>
          </Wrap>
        )
    );
};

export default Country;
