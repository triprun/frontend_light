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
import {CountryCard} from "../Micro/CountryCard";
import {PlaceCard} from "../Micro/PlaceCard";

import lupa from './lupa.png';
import logo from './logo.png';
import backVideo from './video.mp4';
import backVideo2 from './back_for_video.png';

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
/*
const BackVideo = styled.div`
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(${backVideo});
    width: 70px;
    background-repeat: no-repeat;
`;*/

const Index2 = (props) => {

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
              <Row100 style={{flexFlow: 'column', marginTop: '20px', position: 'relative'}}>
                  <div style={{position: 'absolute',
                      width: '100%',
                      height: '100%',
                      background: '#00000073',
                      zIndex: '5'}}></div>
                  <div style={{position: 'absolute',
                      color: '#fff',
                      fontSize: '31px',
                      marginTop: '340px',
                      marginLeft: '100px',
                      zIndex: '10'}}>СПЕЦИАЛЬНО ДЛЯ ВАС</div>
                  <div style={{position: 'absolute',
                      color: '#fff',
                      fontSize: '20px',
                      marginTop: '400px',
                      marginLeft: '100px',
                      width: '450px',
                      zIndex: '10'}}>Путешествуй с TripRun</div>
                  <div style={{position: 'absolute',
                      color: '#fff',
                      fontSize: '20px',
                      marginTop: '300px',
                      marginLeft: '100px',
                      zIndex: '10'}}>создавай маршрут идеального путешествия вместе с друзьями</div>
                  <div style={{    position: 'absolute',
                      color: '#000',
                      fontSize: '20px',
                      marginTop: '480px',
                      marginLeft: '100px',
                      zIndex: '10',
                      width: '160px',
                      textAlign: 'center',
                      background: '#fff',
                      height: '40px',
                      lineHeight: '40px',
                      borderRadius: '7px',
                      cursor: 'pointer',}}>Подробнее</div>
                  <video loop muted autoPlay poster={backVideo2} className="fullscreen-bg__video">
                      <source src={backVideo} type="video/mp4" />
                  </video>
              </Row100>
              <Row100 style={{flexFlow: 'column', marginTop: '50px',}}>
                  <Row style={{color: '#525252', fontSize: '30px', fontWeight: '600',width: '70%', margin: '0 auto', justifyContent: 'space-between'}}>Актуальные планы пользователей<div><a href="#" style={{textDecoration: 'none', color: 'rgb(105, 105, 105)', fontSize: '15px', fontStyle: 'italic', fontWeight: '100',}}>Посмотреть все</a></div></Row>
                  <Row style={{overflowX: 'auto', webkitOverflowScrolling: 'touch',  marginTop: '30px'}}>
                      <div style={{marginRight: '160px'}}></div>
                      <TripCard source="https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"
                                 name="London all around & round"
                                 dates="Jun-Dec 2018"
                                 code="gb-eng"
                                 city="London"
                                 style={{marginRight: '30px'}}></TripCard>
                      <TripCard source="http://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2019-03/20160913_gaf_uw8_613.jpeg.jpg?itok=lowkDjAF"
                                 name="London all around & round"
                                 dates="Jun-Dec 2018"
                                 code="gb-eng"
                                 city="London"
                                 style={{marginRight: '30px'}}></TripCard>
                      <TripCard source="https://images11.popmeh.ru/upload/img_cache/5ce/5ced06cf7ac34a6581fe64cfc86160bc_ce_1024x512x0x128_cropped_800x800.jpg"
                                 name="London all around & round"
                                 dates="Jun-Dec 2018"
                                 code="gb-eng"
                                 city="London"
                                 style={{marginRight: '30px'}}></TripCard>
                      <TripCard source="https://images11.popmeh.ru/upload/img_cache/5ce/5ced06cf7ac34a6581fe64cfc86160bc_ce_1024x512x0x128_cropped_800x800.jpg"
                                 name="London all around & round"
                                 dates="Jun-Dec 2018"
                                 code="gb-eng"
                                 city="London"
                                 style={{marginRight: '30px'}}></TripCard>
                      <TripCard source="https://images11.popmeh.ru/upload/img_cache/5ce/5ced06cf7ac34a6581fe64cfc86160bc_ce_1024x512x0x128_cropped_800x800.jpg"
                                 name="London all around & round"
                                 dates="Jun-Dec 2018"
                                 code="gb-eng"
                                 city="London"
                                 style={{marginRight: '30px'}}></TripCard>
                      <TripCard source="https://images11.popmeh.ru/upload/img_cache/5ce/5ced06cf7ac34a6581fe64cfc86160bc_ce_1024x512x0x128_cropped_800x800.jpg"
                                 name="London all around & round"
                                 dates="Jun-Dec 2018"
                                 code="gb-eng"
                                 city="London"
                                 style={{marginRight: '30px'}}></TripCard>
                      <div></div>
                  </Row>
              </Row100>

              <Row100 style={{flexFlow: 'column', marginTop: '50px',}}>
                  <Row style={{color: '#525252', fontSize: '30px', fontWeight: '600',width: '70%', margin: '0 auto', justifyContent: 'space-between'}}>Интересные страны<div><a href="#" style={{textDecoration: 'none', color: 'rgb(105, 105, 105)', fontSize: '15px', fontStyle: 'italic', fontWeight: '100',}}>Посмотреть все</a></div></Row>
                  <Row style={{ webkitOverflowScrolling: 'touch',  marginTop: '30px'}}>
                      <div style={{marginRight: '160px'}}></div>
                      <CountryCard source="https://topwar.ru/uploads/posts/2019-08/1565006768_76.jpg"
                                name="Россия"
                                desc="24 places to visit"
                                style={{marginRight: '30px'}}></CountryCard>
                      <CountryCard source="https://tayga.info/media/images/news/133/133068/thumb.jpg"
                                name="Польша"
                                desc="4 places to visit"
                                style={{marginRight: '30px'}}></CountryCard>
                      <div></div>
                  </Row>
              </Row100>

              <Row100 style={{flexFlow: 'column', marginTop: '50px',}}>
                  <Row style={{color: '#525252', fontSize: '30px', fontWeight: '600',width: '70%', margin: '0 auto', justifyContent: 'space-between'}}>Интересные места<div><a href="#" style={{textDecoration: 'none', color: 'rgb(105, 105, 105)', fontSize: '15px', fontStyle: 'italic', fontWeight: '100',}}>Посмотреть все</a></div></Row>
                  <Row style={{ webkitOverflowScrolling: 'touch',  marginTop: '30px'}}>
                      <div style={{marginRight: '160px'}}></div>
                      <PlaceCard source="https://www.cre.ru/content/upload/news/15259659553857.jpg"
                                   name="Зоопарк"
                                   desc="24 places to visit"
                                   style={{marginRight: '30px'}}></PlaceCard>
                      <PlaceCard source="https://media-cdn.tripadvisor.com/media/photo-s/0b/63/04/f1/caption.jpg"
                                   name="Музей космонавтики"
                                   desc="4 places to visit"
                                   style={{marginRight: '30px'}}></PlaceCard>
                      <PlaceCard source="http://www.vodokanal.spb.ru/images/cms/thumbs/b642b87a36affe12ab7df7c71ff2d6c8e9c38168/pic5_19_900_540_5_80.jpg"
                                   name="Мир воды"
                                   desc="4 places to visit"
                                   style={{marginRight: '30px'}}></PlaceCard>
                      <div></div>
                  </Row>
              </Row100>

          </Wrap>
        )
    );
};

export default Index2;
