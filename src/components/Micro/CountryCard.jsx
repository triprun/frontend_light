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

  background: ${props => `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${props.source})`};
  width: 260px;
  height: 340px;
  background-size: cover;
  position: relative;
  box-shadow: 1px 0 15px rgba(0,0,0,0.2);
  cursor: pointer;
  border-radius: 20px 20px 20px 20px;
`;

const Info = styled.div`
    width: 98%;
    position: absolute;
    left: 20px;
    bottom: 30px;
    font-size: 20px;
`;

const Info2 = styled.div`
    width: 98%;
    position: absolute;
    left: 20px;
    bottom: 5px;
    font-size: 17px;
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

export const CountryCard = (props) => {
  return (
    <Wrap style={{margin: '0px 20px'}}>
      <Card source={ props.source } style={ props.style }>
        <Info>
          <Row style={{ justifyContent: 'space-between' }}>
            <Column>
              <MarchName>{ props.name }</MarchName>
            </Column>
          </Row>
        </Info>
        <Info2>
          <Row style={{ justifyContent: 'space-between' }}>
            <Column>
              <MarchName>{ props.desc }</MarchName>
            </Column>
          </Row>
        </Info2>
      </Card>
    </Wrap>
  );
};


