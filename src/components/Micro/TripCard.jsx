import React from 'react';

import styled from 'styled-components';

import FlagIcon from './../FlagIcon/FlagIcon.jsx';
import { CircledAvatarRow } from './../Micro/CircledAvatar.jsx';

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Wrap = styled.div`
  height: 300px;
`;

const MiniCard = styled.div`
  width: 5vw;
  min-width: 5vw;
  height: 200px;
`;

const Card = styled.div`
  min-width: ${() => window.innerWidth < 1000 ? '370px' : '420px'};
  width: ${() => window.innerWidth < 1000 ? '370px' : '420px'};
  height: 200px;
  border-radius: 5px;
  background: ${props => `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${props.source})`};
  background: scale-down;
  position: relative;
  box-shadow: 1px 0 15px rgba(0, 0, 0, 0.2);
`;

const Info = styled.div`
  width: 90%;
  height: 140px;
  border-radius: 5px;
  transform: translate(-50%, 72%);
  position: absolute;
  left: 50%;
  transition: transform .2s;
  background: white;
  padding: 10px;
  box-shadow: 1px 0 15px rgba(0, 0, 0, 0.2);

  &:hover {
    cursor: pointer;
    transform: translate(-50%, 67%);
  }
`;

const MarchName = styled.h4`
  margin: 0;
  margin-top: 40px;
`;

const Date = styled.small`
  color: rgba(70,70,70,0.6);
  font-style: italic;
`;

const Destination = styled.p`
  color: rgba(0,0,0,0.7);
`;

export const TripCard = (props) => {
  return (
    <Wrap>
      <Card source={ props.source } style={ props.style }>
        <Info>
          <CircledAvatarRow
            style={{ width: '100%', marginTop: '-70px', justifyContent: 'center' }}
            sources={ ['https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/f8/Amelia_Pinney.jpg/revision/latest?cb=20151228165724', 'https://pbs.twimg.com/profile_images/763461232737210369/PFfZcFgn_400x400.jpg', 'https://pmctvline2.files.wordpress.com/2018/04/lucifer-season-3-episode-21.jpg?w=620'] }
          />
          <br />
          <MarchName>{ props.name }</MarchName>
          <Date>{ props.dates }</Date>
          <br />
          <Row>
            <FlagIcon code={ props.code } size="3x" squared={ false } />
            <Destination>{ props.city }</Destination>
          </Row>
        </Info>
      </Card>
    </Wrap>
  );
};

export const LastCard = () => {
  return (<MiniCard></MiniCard>);
};

export const FirstCard = () => {
  return (<MiniCard></MiniCard>);
};
