import React, { useState, useEffect } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import { jsonstoreurl } from './../../hooks/useJSONStore.jsx';

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
import { FlagIconCircled } from './../FlagIcon/FlagIcon.jsx';
import { FirstCardLong, TripCard } from "../Micro/TripCard.jsx";
import { CircledAvatarRow2 } from "./../Micro/CircledAvatar2.jsx";
import { LikeSq } from "../Micro/LikeSq.jsx";
import { Spot } from "../Micro/Spot.jsx";

import star1 from './star1.png';
import star2 from './star2.png';
import map from './map.png';

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

const Photo = styled.div`
    height: 300px;
    width: 250px;
    border-radius: 20px;
`;

const Star1 = styled.div`
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(${star1});
    height: 50px;
    width: 50px;
    background-size: 20px;
    background-repeat: no-repeat;
`;

const Star2 = styled.div`
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(${star2});
    height: 50px;
    width: 50px;
    background-size: 20px;
    background-repeat: no-repeat;
`;


const Map = styled.div`
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(${map});
    height: 400px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
`;
const TableTH = styled.div`
    color: #848484;
    font-size: 20px;
`;

const table_row = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '15px',
    color: '#5a5a5a',
};

const table_hr = {
    height: '1px',
    background: '#dcdcdc',
    width: '82%',
    margin: '0 auto',
    marginTop: '10px',
};

const Place = (props) => {

    const [unauthorized, unauthorize] = useState(false);
    const [loading, setLoading] = useState(true);
    const [country, setCountry] = useState(null);

    useEffect(() => {

        const country = {
            name : 'Московский зоопарк',
            territory: 'Москва',
            description: 'Московский зоопарк — зоологический парк в центре Москвы. Один из старейших зоопарков в Европе и четвёртый по площади зоопарк России после зоопарков Ярославля, Ростова-на-Дону и Новосибирска. Входит в десятку самых посещаемых зоопарков мира. В коллекции зоопарка 1132 видов животных, более пяти тысяч особей.',
            backgroundPhoto: 'http://www.moscowzoo.ru/upload/iblock/325/fon.jpg',
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
                    <div style={{flex: 'auto', display: 'flex', flexDirection: 'column-reverse',}}>
                        <div>
                            <div style={{fontSize: '28px', paddingBottom: '20px',}}>Reviews</div>
                            <div style={{display: 'flex', flexFlow: 'row',}}>
                                <Star2/><Star2/><Star2/><Star2/><Star1/>
                                <div>Add a review <span style={{fontSize: '62px', lineHeight: '8px', position: 'absolute',  marginLeft: '20px',}}>→</span></div>
                            </div>
                        </div>
                    </div>
                    <Row style={{flexDirection: 'column-reverse',}}>
                        <div style={{display: 'flex', marginRight: '200px', marginBottom: '10px'}}>
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

              <Row100>
                  <Map />
              </Row100>

              <Row100 style={{flexDirection: 'column', marginTop: '50px',}}>
                  <div style={{
                      fontSize: '30px',
                      marginLeft: '5%',
                  }}>Schelude</div>
                  <div style={{

                  }}>
                      <div style={{display: 'flex', flexFlow: 'column', marginTop: '30px'}}>
                          <div style={table_row}>
                              <TableTH>WEEK DAYS</TableTH>
                              <TableTH>TIME WORK</TableTH>
                              <TableTH>PRICE</TableTH>
                              <TableTH>PRICE</TableTH>
                          </div>
                          <div style={table_row}>
                              <div>Monday</div>
                              <div>10:00-21:00</div>
                              <div>12$</div>
                              <div>8$</div>
                          </div>
                          <div style={table_hr}></div>
                          <div style={table_row}>
                              <div>Monday</div>
                              <div>10:00-21:00</div>
                              <div>12$</div>
                              <div>8$</div>
                          </div>
                          <div style={table_hr}></div>
                          <div style={table_row}>
                              <div>Monday</div>
                              <div>10:00-21:00</div>
                              <div>12$</div>
                              <div>8$</div>
                          </div>
                          <div style={table_hr}></div>
                          <div style={table_row}>
                              <div>Monday</div>
                              <div>10:00-21:00</div>
                              <div>12$</div>
                              <div>8$</div>
                          </div>
                          <div style={table_hr}></div>
                          <div style={table_row}>
                              <div>Monday</div>
                              <div>10:00-21:00</div>
                              <div>12$</div>
                              <div>8$</div>
                          </div>
                          <div style={table_hr}></div>
                          <div style={table_row}>
                              <div>Monday</div>
                              <div>10:00-21:00</div>
                              <div>12$</div>
                              <div>8$</div>
                          </div>
                          <div style={table_hr}></div>
                      </div>
                  </div>
              </Row100>

            <Row100 style={{marginTop: '50px',     flexFlow: 'column',}}>
                <Row style={{width: '80%', flexFlow: 'row', justifyContent: 'space-between',     height: '50px'}}>
                    <div style={{color: '#000', fontSize: '30px',}}>Photos</div>
                    <div style={{color: '#000', fontSize: '30px',}}>See all</div>
                </Row>
                <Row style={{justifyContent: 'space-between',     width: '80%'}}>
                    <Photo style={{background: 'url("https://media-cdn.tripadvisor.com/media/photo-s/01/ce/da/c3/dream-of-byzantium.jpg")'}}></Photo>
                    <Photo style={{background: 'url("https://media-cdn.tripadvisor.com/media/photo-s/01/ce/da/c3/dream-of-byzantium.jpg")'}}></Photo>
                    <Photo style={{background: 'url("https://media-cdn.tripadvisor.com/media/photo-s/01/ce/da/c3/dream-of-byzantium.jpg")'}}></Photo>
                    <Photo style={{background: 'url("https://media-cdn.tripadvisor.com/media/photo-s/01/ce/da/c3/dream-of-byzantium.jpg")'}}></Photo>
                    <Photo style={{background: 'url("https://media-cdn.tripadvisor.com/media/photo-s/01/ce/da/c3/dream-of-byzantium.jpg")'}}></Photo>
                </Row>
            </Row100>

              <Row100 style={{marginTop: '50px',}}>
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

export default Place;
