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
import {Spot} from "../Micro/Spot";
import {TripCard2} from "../Micro/TripCard2";

import star1 from './star1.png';
import star2 from './star2.png';
import map from './map.png';
import lupa from './lupa.png';
import logo from './logo.png';

const Wrap = styled.div`
  width: 100vw;
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

const Lupa = styled.div`
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(${lupa});
    width: 20px;
    height: 20px;
    background-size: 17px;
    background-repeat: no-repeat;
    position: absolute;
    margin: 8px 0px 0px 13px;
`;

const Logo = styled.div`
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(${logo});
    width: 70px;
    background-repeat: no-repeat;
`;

const Place2 = (props) => {

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
              <Row100 style={{flexFlow: 'row', justifyContent: 'space-between', padding: '20px 0px 0px 30px'}}>
                  <Logo style={{flexGrow: '1', }}></Logo>
                  <div style={{flexGrow: '5'}}>
                      <Lupa></Lupa>
                      <input type='text' placeholder='Попробуйте "Лос-Анджелес"' style={{
                          paddingLeft: '50px',
                          height: '30px',
                          border: '0',
                          borderBottom: '1px solid #ccc',
                          width: '400px',
                          fontSize: '16px',
                      }}/>
                  </div>
                  <div style={{flexGrow: '0.5'}}><a href='#' style={{textDecoration: 'none', color: '#000',}}>Profile</a></div>
                  <div style={{flexGrow: '0.5'}}><a href='#'  style={{textDecoration: 'none', color: '#000',}}>My Plans</a></div>
                  <div style={{flexGrow: '0.5'}}><img style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50px',
                      objectFit: 'cover',
                      transition: 'transform .2s',
                  }} src="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/f8/Amelia_Pinney.jpg/revision/latest?cb=20151228165724"/></div>

              </Row100>
              <Row100 style={{flexFlow: 'column', marginTop: '50px',}}>
                  <Row style={{color: '#525252', fontSize: '30px', fontWeight: '600',width: '70%', margin: '0 auto', justifyContent: 'space-between'}}>Активные поездки<div><a href="#" style={{textDecoration: 'none', color:'rgb(84, 144, 255)',}}>Создать план</a></div></Row>
                  <Row style={{overflowX: 'auto', webkitOverflowScrolling: 'touch', height: '440px', marginTop: '30px'}}>
                      <div style={{marginRight: '160px'}}></div>
                      <TripCard2 source="https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"
                                 name="London all around & round"
                                 dates="Jun-Dec 2018"
                                 code="gb-eng"
                                 city="London"></TripCard2>
                      <TripCard2 source="http://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2019-03/20160913_gaf_uw8_613.jpeg.jpg?itok=lowkDjAF"
                                 name="London all around & round"
                                 dates="Jun-Dec 2018"
                                 code="gb-eng"
                                 city="London"></TripCard2>
                      <TripCard2 source="https://images11.popmeh.ru/upload/img_cache/5ce/5ced06cf7ac34a6581fe64cfc86160bc_ce_1024x512x0x128_cropped_800x800.jpg"
                                 name="London all around & round"
                                 dates="Jun-Dec 2018"
                                 code="gb-eng"
                                 city="London"></TripCard2>
                      <TripCard2 source="https://images11.popmeh.ru/upload/img_cache/5ce/5ced06cf7ac34a6581fe64cfc86160bc_ce_1024x512x0x128_cropped_800x800.jpg"
                                 name="London all around & round"
                                 dates="Jun-Dec 2018"
                                 code="gb-eng"
                                 city="London"></TripCard2>
                      <TripCard2 source="https://images11.popmeh.ru/upload/img_cache/5ce/5ced06cf7ac34a6581fe64cfc86160bc_ce_1024x512x0x128_cropped_800x800.jpg"
                                 name="London all around & round"
                                 dates="Jun-Dec 2018"
                                 code="gb-eng"
                                 city="London"></TripCard2>
                      <TripCard2 source="https://images11.popmeh.ru/upload/img_cache/5ce/5ced06cf7ac34a6581fe64cfc86160bc_ce_1024x512x0x128_cropped_800x800.jpg"
                                 name="London all around & round"
                                 dates="Jun-Dec 2018"
                                 code="gb-eng"
                                 city="London"></TripCard2>
                      <div></div>
                  </Row>
              </Row100>

              <Row100 style={{flexFlow: 'column', marginTop: '50px',}}>
                  <Row style={{color: '#525252', fontSize: '30px', fontWeight: '600',width: '70%', margin: '0 auto',}}>Предстоящие поездки</Row>
                  <Row style={{overflowX: 'auto', webkitOverflowScrolling: 'touch', height: '440px', marginTop: '30px'}}>
                      <div style={{marginRight: '160px'}}></div>
                      <TripCard2 source="https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"
                                 name="London all around & round"
                                 dates="Jun-Dec 2018"
                                 code="gb-eng"
                                 city="London"></TripCard2>
                      <TripCard2 source="http://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2019-03/20160913_gaf_uw8_613.jpeg.jpg?itok=lowkDjAF"
                                 name="London all around & round"
                                 dates="Jun-Dec 2018"
                                 code="gb-eng"
                                 city="London"></TripCard2>
                      <TripCard2 source="https://images11.popmeh.ru/upload/img_cache/5ce/5ced06cf7ac34a6581fe64cfc86160bc_ce_1024x512x0x128_cropped_800x800.jpg"
                                 name="London all around & round"
                                 dates="Jun-Dec 2018"
                                 code="gb-eng"
                                 city="London"></TripCard2>
                      <TripCard2 source="https://images11.popmeh.ru/upload/img_cache/5ce/5ced06cf7ac34a6581fe64cfc86160bc_ce_1024x512x0x128_cropped_800x800.jpg"
                                 name="London all around & round"
                                 dates="Jun-Dec 2018"
                                 code="gb-eng"
                                 city="London"></TripCard2>
                      <TripCard2 source="https://images11.popmeh.ru/upload/img_cache/5ce/5ced06cf7ac34a6581fe64cfc86160bc_ce_1024x512x0x128_cropped_800x800.jpg"
                                 name="London all around & round"
                                 dates="Jun-Dec 2018"
                                 code="gb-eng"
                                 city="London"></TripCard2>
                      <TripCard2 source="https://images11.popmeh.ru/upload/img_cache/5ce/5ced06cf7ac34a6581fe64cfc86160bc_ce_1024x512x0x128_cropped_800x800.jpg"
                                 name="London all around & round"
                                 dates="Jun-Dec 2018"
                                 code="gb-eng"
                                 city="London"></TripCard2>
                      <div></div>
                  </Row>
              </Row100>

              <Row100 style={{flexFlow: 'column', marginTop: '50px',}}>
                  <Row style={{color: '#525252', fontSize: '30px', fontWeight: '600',width: '70%', margin: '0 auto',}}>Завершенные поездки</Row>
                  <Row style={{overflowX: 'auto', webkitOverflowScrolling: 'touch', height: '440px', marginTop: '30px'}}>
                      <div style={{marginRight: '160px'}}></div>
                      <TripCard2 source="https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"
                                 name="London all around & round"
                                 dates="Jun-Dec 2018"
                                 code="gb-eng"
                                 city="London"></TripCard2>
                      <TripCard2 source="http://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2019-03/20160913_gaf_uw8_613.jpeg.jpg?itok=lowkDjAF"
                                 name="London all around & round"
                                 dates="Jun-Dec 2018"
                                 code="gb-eng"
                                 city="London"></TripCard2>
                      <TripCard2 source="https://images11.popmeh.ru/upload/img_cache/5ce/5ced06cf7ac34a6581fe64cfc86160bc_ce_1024x512x0x128_cropped_800x800.jpg"
                                 name="London all around & round"
                                 dates="Jun-Dec 2018"
                                 code="gb-eng"
                                 city="London"></TripCard2>
                      <TripCard2 source="https://images11.popmeh.ru/upload/img_cache/5ce/5ced06cf7ac34a6581fe64cfc86160bc_ce_1024x512x0x128_cropped_800x800.jpg"
                                 name="London all around & round"
                                 dates="Jun-Dec 2018"
                                 code="gb-eng"
                                 city="London"></TripCard2>
                      <TripCard2 source="https://images11.popmeh.ru/upload/img_cache/5ce/5ced06cf7ac34a6581fe64cfc86160bc_ce_1024x512x0x128_cropped_800x800.jpg"
                                 name="London all around & round"
                                 dates="Jun-Dec 2018"
                                 code="gb-eng"
                                 city="London"></TripCard2>
                      <TripCard2 source="https://images11.popmeh.ru/upload/img_cache/5ce/5ced06cf7ac34a6581fe64cfc86160bc_ce_1024x512x0x128_cropped_800x800.jpg"
                                 name="London all around & round"
                                 dates="Jun-Dec 2018"
                                 code="gb-eng"
                                 city="London"></TripCard2>
                      <div></div>
                  </Row>
              </Row100>

          </Wrap>
        )
    );
};

export default Place2;
