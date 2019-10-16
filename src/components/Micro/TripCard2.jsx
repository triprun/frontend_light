import React from 'react';

import styled from 'styled-components';

import FlagIcon from './../FlagIcon/FlagIcon.jsx';
import { CircledAvatarRow3 } from './../Micro/CircledAvatar3.jsx';

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrap = styled.div`
  height: 380px;
`;

const MiniCard = styled.div`
  width: 5vw;
  min-width: 5vw;
  height: 200px;
`;

const MiniCardLong = styled.div`
  width: 15vw;
  min-width: 5vw;
  height: 200px;
`;

const Card = styled.div`
  min-width: ${() => window.innerWidth < 1000 ? '370px' : '420px'};
  width: ${() => window.innerWidth < 1000 ? '370px' : '420px'};
  height: 300px;
  background: ${props => `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${props.source})`};
  background-size: cover;
  position: relative;
  box-shadow: 1px 0 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  border-radius: 20px 20px 0px 0px;
`;

const Info = styled.div`
  width: 98%;
  height: 150px;
  transform: translate(0%, 140%);
  position: absolute;
  left: 0%;
  transition: transform .2s;
  background: white;
  padding-left: 5px;
  padding-right: 5px;
  top: 60px;
  /* box-shadow: 1px 0 15px rgba(0, 0, 0, 0.2); */

  /* &:hover {
    cursor: pointer;
    transform: translate(-50%, 67%);
  } */
`;

const MarchName = styled.h4`
  margin: 0;
`;

const Date = styled.small`
  color: rgba(70,70,70,0.6);
  font-weight: bold;
`;

const Members = styled.small`
  color: rgba(70,70,70,0.6);
  font-weight: bold;
  padding: 0;
  margin: 0;
`;

const Destination = styled.p`
  color: rgba(0,0,0,0.7);
`;

export const TripCard2 = (props) => {
  return (
    <Wrap style={{margin: '0px 20px'}}>
      <Card source={ props.source } style={ props.style }>
        <Info>
          <Row style={{ justifyContent: 'space-between' }}>
            <Column>
              <Row style={{margin: '6px 0px 0px 3px'}}><Date>{ props.dates }</Date></Row>
              <MarchName>{ props.name }</MarchName>
              <Row>
                <FlagIcon code={ props.code } size="3x" squared={ false } />
                <Destination>{ props.city }</Destination>
              </Row>
            </Column>
            <div style={{position: 'absolute', top: '-230px', right: '15px'}}>
              <CircledAvatarRow3
                style={{ width: '100%', marginTop: '-25%', justifyContent: 'flex-end' }}
                sources={ ['https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/f8/Amelia_Pinney.jpg/revision/latest?cb=20151228165724', 'https://pbs.twimg.com/profile_images/763461232737210369/PFfZcFgn_400x400.jpg', 'https://pmctvline2.files.wordpress.com/2018/04/lucifer-season-3-episode-21.jpg?w=620'] }
              />
            </div>
            <Row><a href="#" style={{textDecoration: 'none', color: '#0ca1e8', position: 'absolute', bottom: '25px', left: '0'}}>Детали поездки</a></Row>
          </Row>
        </Info>
      </Card>
    </Wrap>
  );
};


