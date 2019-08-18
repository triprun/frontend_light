import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 1px;
  height: 1px;
  border-radius: 50%;
  padding: 8px;
  position: absolute;
  opacity: 0.8;

  -webkit-transform: scale(0.5) rotate(0);
  -moz-transform: scale(0.5) rotate(0);
  -ms-transform: scale(0.5) rotate(0);
  -o-transform: scale(0.5) rotate(0);
  transform: scale(0.5) rotate(0);

  -webkit-transition: 200ms;
  -moz-transition: 200ms;
  -ms-transition: 200ms;
  -o-transition: 200ms;
  transition: 200ms;

  img {
    width: 100%;
  }

  &:hover {
    -webkit-transform: scale(0.7) rotate(0);
    -moz-transform: scale(0.7) rotate(0);
    -ms-transform: scale(0.7) rotate(0);
    -o-transform: scale(0.7) rotate(0);
    transform: scale(0.7) rotate(0);

    opacity: 1;
    z-index: 10;

    div:first-child {
      opacity: 1;
    }
  }
`;

export const Icon = ({ path, coords, color, transitionDelay }) => {
  return (
    <Container style={{
      ...coords,
      transitionDelay: transitionDelay,
      background: color,
      boxShadow: '0px 0px 10px ' + color
    }}>
      <img src={ path } alt="Country, where traveller already been to" />
    </Container>
  );
};
