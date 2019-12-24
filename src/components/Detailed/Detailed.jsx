import React from 'react';

import { NavLink } from 'react-router-dom'

import styled, { css } from 'styled-components';

import { TripCard, FirstCard, LastCard } from './../Micro/TripCard.jsx';
// import { NewsPost } from './../Micro/NewsPost.jsx';
// import { TwoSideColumns } from './../Micro/TwoSideColumns.jsx';
// import { HeadMenu } from './../Micro/HeadMenu.jsx';

import { UserMenu } from '../Micro/HeadMenu';

import logo from './logo.svg';
import prep from './prep.png';

import friend1 from './1.jpg';
import friend2 from './2.jpg';
import friend3 from './3.jpg';
import friend4 from './4.jpg';

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

const Column = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
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

const BenefitCard = styled.div`
  width: 30%;
  height: 400px;
  margin-right: 3%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const FriendCard = styled.div`
  width: 250px;
  height: 550px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 80px;
`;

const Detailed = (props) => {
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
        <ActualVideo src={ prep } />
        <HeaderVideoOverlay>
          <HeaderVideoOverlayText>
            <p><b>СПЕЦИАЛЬНО ДЛЯ ВАС</b></p>
            <h2>Путешествуй с TripRun</h2>
            <p>Создавай маршрут идеального путешествия. Делись планами с друзьями. Находи новые места. Пушетествуй с комфортом.</p>
          </HeaderVideoOverlayText>
        </HeaderVideoOverlay>
      </HeaderVideo>
      <br />
      <br />
      <br />
      <Block>
        <Row>
          <h1 style={{ fontSize: '30pt', margin: 0, padding: 0 }}>Удобный способ планирования с TripRun</h1>
          <p style={{ width: '60%', marginLeft: '5%' }}>
            Выбирай ту страну, в которую хочешь поехать. Отмечай города, которые хочешь посетить.<br />Зови друзей. Планируйте какие места посетить. Организовывайте так, чтобы не терять ни минуты.
          </p>
        </Row>
      </Block>
      <Block>
        <BlockHeader style={{ justifyContent: 'center' }}>
          <h1>Выбирай страну</h1>
        </BlockHeader>
        <br />
        <Row>
          <CountryCard background="https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTYyNzYyODMyNTM2OTM4MDcy/topic-russia-gettyimages-605536834-feature.jpg">
            <CountryCardText>
              <h3 style={{ margin: 0, padding: 0, paddingBottom: 5 }}>Russia</h3>
              24 places to visit
            </CountryCardText>
          </CountryCard>
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <Block>
        <BlockHeader style={{ justifyContent: 'center' }}>
          <h1>Составить маршрут – проще простого</h1>
        </BlockHeader>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Row>
          <BenefitCard>
            <i className="fas fa-map-marked-alt fa-5x" ></i>
            <h3>Выбирай страну и город</h3>
            <p>Добавляй в свой маршрут отели, рестораны, достопримечательности и все то, что хочешь посмотреть. Планируй события и мероприятия, которые хочешь посетить. Выбирай дату и время для каждого события в плане.</p>
          </BenefitCard>
          <BenefitCard>
            <i className="fas fa-user-friends fa-5x"></i>
            <h3>Добавляй друзей</h3>
            <p>Отправь свой маршрут друзьям и предложи им участие в планировании вашего идеального путешествия. Выбирайте места, голосуйте и комментируйте любое событие в плане, чтобы ничего не забыть.</p>
          </BenefitCard>
          <BenefitCard>
            <i className="fas fa-share-alt fa-5x"></i>
            <h3>Делись своим маршрутом</h3>
            <p>Расскажи всем о своем путешествии. Оставь свой план и его увидят другие. Поделись ссылкой с друзьями, чтобы не забыть ни единой детали путешествия.</p>
          </BenefitCard>
        </Row>
      </Block>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Block style={{ height: "900px" }}>
        <BlockHeader style={{ justifyContent: 'center' }}>
          <h1>Добавляй города</h1>
        </BlockHeader>
        <Row>
          <Column style={{ marginRight: "10px" }}>
            <img style={{ width: "60vw", height: "500px", objectFit: "cover", marginBottom: "10px", borderRadius: "3px" }} src="https://upload.wikimedia.org/wikipedia/commons/1/10/Milano%2C_Duomo_with_Milan_Cathedral_and_Galleria_Vittorio_Emanuele_II%2C_2016.jpg" />
            <Row>
              <img style={{ width: "29.5vw", height: "300px", objectFit: "cover", marginRight: "1vw", borderRadius: "3px" }} src="https://www.irishtimes.com/polopoly_fs/1.4027277.1569264719!/image/image.jpg_gen/derivatives/box_620_330/image.jpg" />
              <img style={{ width: "29.5vw", height: "300px", objectFit: "cover", borderRadius: "3px" }} src="https://img.jakpost.net/c/2019/08/24/2019_08_24_78547_1566655513._large.jpg" />
            </Row>
          </Column>
          <Column>
            <img style={{ width: "30vw", height: "400px", objectFit: "cover", marginBottom: "10px", borderRadius: "3px" }} src="https://cdn.muenchen-p.de/.imaging/stk/responsive/galleryLarge/dms/shutterstock/neues-rathaus-marienplatz/document/neues-rathaus-marienplatz.jpg" />
            <img style={{ width: "30vw", height: "400px", objectFit: "cover", borderRadius: "3px" }} src="https://join.ust.hk/wp-content/uploads/2019/03/abouthk-cover03.jpg" />
          </Column>
        </Row>
      </Block>
      <br />
      <br />
      <br />
      <Block style={{ height: "600px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <BlockHeader style={{ justifyContent: 'center' }}>
          <h1>Приглашай друзей</h1>
        </BlockHeader>
        <br />
        <br />
        <br />
        <Row style={{ justifyContent: "center", alignItems: "center" }}>
          <FriendCard>
            <Column>
              <img src={friend1} style={{ width: "250px", height: "430px", objectFit: "cover", borderRadius: "3px" }} />
              <small style={{ color: "grey" }}>потомственный пастух</small>
              <h3 style={{ padding: 0, margin: 0 }}>Олек Болушович</h3>
              <p style={{ padding: 0, margin: 0, textAlign: "center", marginTop: "5px" }}>Окунитесь в мир спокойствия вместе с Олеком! Проведите незабываемое время на козьей ферме. Познайте пастуший труд и отведайте свежего козьего сыра.</p>
            </Column>
          </FriendCard>
          <FriendCard>
            <Column>
              <img src={friend4} style={{ width: "250px", height: "430px", objectFit: "cover", borderRadius: "3px" }} />
              <small style={{ color: "grey" }}>профессиональный скрипач</small>
              <h3 style={{ padding: 0, margin: 0 }}>Alex Beanwood</h3>
              <p style={{ padding: 0, margin: 0, textAlign: "center", marginTop: "5px" }}>Посмотрите на мир искусства с другой стороны! Научитесь играть на скрипке вместе с Alex. Попробуйте сыграть для живой аудитории в центре Сиднея.</p>
            </Column>
          </FriendCard>
          <FriendCard>
            <Column>
              <img src={friend3} style={{ width: "250px", height: "430px", objectFit: "cover", borderRadius: "3px" }} />
              <small style={{ color: "grey" }}>Табачный фермер</small>
              <h3 style={{ padding: 0, margin: 0 }}>Куто Карузо</h3>
              <p style={{ padding: 0, margin: 0, textAlign: "center", marginTop: "5px" }}>Посетите настоящую кубинскую ферму табака, попробуйте элитные сигары и сделайте одну самостоятельно! Куто расскажет вам все о традициях табака.</p>
            </Column>
          </FriendCard>
        </Row>
      </Block>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Block>
        <BlockHeader style={{ justifyContent: 'center' }}>
          <h1>Делись маршрутами</h1>
        </BlockHeader>
        <br />
        <br />
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

export default Detailed;
