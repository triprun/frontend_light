import React from 'react';

import styled from 'styled-components';

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

const Span = styled.span`
  margin-bottom: 20px;
  display: none;
  color: white;
`;

const Card = styled.div`
  min-width: ${() => window.innerWidth < 1000 ? '260px' : '260px'};
  width: ${() => window.innerWidth < 1000 ? '260px' : '260px'};
  height: 340px;
  background: ${ props => `url(${props.source})` };
  background-size: cover;
  position: relative;
  box-shadow: 1px 0 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;

  &:hover {
    background: ${props => `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${props.source})`};
    background-size: cover;

    ${Span} {
      display: block;
    }
  }
`;

export const StoryCard = (props) => {
  return (
    <Card source={ props.source } style={ props.style }>
      <Span>{ props.text }</Span>
    </Card>
  );
};

export const LastStoryCard = () => {
  return (<MiniCard></MiniCard>);
};

export const LastStoryCardLong = () => {
  return (<MiniCardLong></MiniCardLong>);
};

export const FirstStoryCard = () => {
  return (<MiniCard></MiniCard>);
};

export const FirstStoryCardLong = () => {
  return (<MiniCardLong></MiniCardLong>);
};
