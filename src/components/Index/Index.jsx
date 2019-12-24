import React from 'react';

import { NavLink } from 'react-router-dom'

import styled, { css } from 'styled-components';

import { TripCard, FirstCard, LastCard } from './../Micro/TripCard.jsx';
// import { NewsPost } from './../Micro/NewsPost.jsx';
// import { TwoSideColumns } from './../Micro/TwoSideColumns.jsx';
// import { HeadMenu } from './../Micro/HeadMenu.jsx';

import { UserMenu } from '../Micro/HeadMenu';

import logo from './logo.svg';
import video from './video.m4v';

const Wrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
`;

const HeaderMenu = styled.div`
  width: 90vw;
  height: 6vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 5vw;
`;

const HeaderMenuLogo = styled.img`
  height: 100%;
`;

const HeaderMenuInputWrap = styled.div`
  width: 40vw;
  height: 4vh;
  box-shadow: 1px 1px 0 rgba(0,0,0,0.2);
  border: 1px solid rgba(0,0,0,0.3);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeaderMenuInput = styled.input`
  width: 90%;
  height: 100%;
  font-size: 14pt;
  font-weight: 500;
  padding-left: 12px;
  border: none;
  outline: none;
`;

const HeaderVideo = styled.div`
  width: 100%;
  height: 60vh;
`;

const ActualVideo = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const HeaderVideoOverlay = styled.div`
  position: absolute;
  top: 6vh;
  left: 0;
  width: 100%;
  height: 60vh;
  background: rgba(0,0,0,0.5);
`;

const HeaderVideoOverlayText = styled.div`
  width: 40vw;
  margin-left: 5vw;
  margin-top: 12vh;
  color: white;
`;

const HeaderVideoOverlayButton = styled.div`
  background: white;
  width: 170px;
  text-align: center;
  margin-left: 5vw;
  padding-top: 18px;
  padding-bottom: 18px;
  border-radius: 8px;
  box-shadow: 0 0 3px rgba(0,0,0,0.2);
  cursor: pointer;
`;

const Block = styled.div`
  width: 90vw;
  margin-left: 5vw;
  height: 380px;
  display: flex;
  flex-direction: column;
`;

const BlockHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Row = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const CountryCard = styled.div`
  height: 300px;
  width: 210px;
  margin-right: 20px;
  cursor: pointer;
  position: relative;
  border-radius: 8px;
  ${ props => css`
    background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url("${ props.background }");
    background-size: cover;
  ` }
`;

const CountryCardText = styled.p`
  position: absolute;
  bottom: 0;
  left: 8%;
  color: white;
`;

const Index = (props) => {
  return (
    <Wrap>
      <HeaderMenu>
        <HeaderMenuLogo src={ logo } />
        <HeaderMenuInputWrap>
          <i style={{ marginLeft: '12px' }} className="fas fa-search"></i>
          <HeaderMenuInput placeholder={ `Попробуйте «Лос-Анджелес»` } />
        </HeaderMenuInputWrap>
        <UserMenu />
      </HeaderMenu>
      <HeaderVideo>
        <ActualVideo src={ video } />
        <HeaderVideoOverlay>
          <HeaderVideoOverlayText>
            <p><b>СПЕЦИАЛЬНО ДЛЯ ВАС</b></p>
            <h2>Самый простой способ запланировать путешествие</h2>
            <p>Создавай маршрут идеального путешествия. Делись планами с друзьями. Находи новые места. Пушетествуй с комфортом.</p>
          </HeaderVideoOverlayText>
          <HeaderVideoOverlayButton>
            <b><NavLink style={{ textDecoration: "none", color: "black" }} to="/detailed">ПОДРОБНЕЕ</NavLink></b>
          </HeaderVideoOverlayButton>
        </HeaderVideoOverlay>
      </HeaderVideo>
      <br />
      <br />
      <br />
      <Block>
        <BlockHeader>
          <h3>Страны</h3>
          <small><i>Посмотреть все</i></small>
        </BlockHeader>
        <Row>
          <NavLink to="/country"><CountryCard background="https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTYyNzYyODMyNTM2OTM4MDcy/topic-russia-gettyimages-605536834-feature.jpg">
            <CountryCardText>
              <h3 style={{ margin: 0, padding: 0, paddingBottom: 5 }}>Russia</h3>
              24 places to visit
            </CountryCardText>
          </CountryCard></NavLink>
          <CountryCard background="https://cdn.britannica.com/86/167886-050-E0D50805/Metropolitan-Cathedral-Mexico-City.jpg">
            <CountryCardText>
              <h3 style={{ margin: 0, padding: 0, paddingBottom: 5 }}>Mexico</h3>
              8 places to visit
            </CountryCardText>
          </CountryCard>
          <CountryCard background="https://www.planetware.com/photos-large/USNY/usa-best-places-new-york.jpg">
            <CountryCardText>
              <h3 style={{ margin: 0, padding: 0, paddingBottom: 5 }}>USA</h3>
              999+ places to visit
            </CountryCardText>
          </CountryCard>
        </Row>
      </Block>
      <Block>
        <BlockHeader>
          <h3>Планы пользователей</h3>
          <small><i>Посмотреть все</i></small>
        </BlockHeader>
        <br />
        <br />
        <Row>
          <TripCard
            source="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/london-eye/london-eye.jpg"
            name="London all around & round"
            dates="Jun-Dec 2018"
            code="gb-eng"
            city="London"
            style={{ marginRight: '20px' }}
          />
          <TripCard
            source="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/london-eye/london-eye.jpg"
            name="London all around & round"
            dates="Jun-Dec 2018"
            code="gb-eng"
            city="London"
            style={{ marginRight: '20px' }}
          />
          <TripCard
            source="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/london-eye/london-eye.jpg"
            name="London all around & round"
            dates="Jun-Dec 2018"
            code="gb-eng"
            city="London"
            style={{ marginRight: '20px' }}
          />
        </Row>
      </Block>
    </Wrap>
  );
};

export default Index;
