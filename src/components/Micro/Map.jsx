import React from 'react';

import styled from 'styled-components';

import { Icon } from './Icon.jsx';

const Container = styled.div`
  position: relative;

  /* div.reveal {
    -webkit-transform: scale(1) rotate(360deg);
    -moz-transform: scale(1) rotate(360deg);
    -ms-transform: scale(1) rotate(360deg);
    -o-transform: scale(1) rotate(360deg);
    transform: scale(1) rotate(360deg);
  }

  div.activate {

    opacity: 1;
    z-index: 10;

    -webkit-transform: scale(1.1) rotate(360deg);
    -moz-transform: scale(1.1) rotate(360deg);
    -ms-transform: scale(1.1) rotate(360deg);
    -o-transform: scale(1.1) rotate(360deg);
    transform: scale(1.1) rotate(360deg);

    div:first-child {
      opacity: 1;
    }
  }

  .triangle {
    position: absolute;
    background-color: white;
    text-align: left;
    bottom: -5px;
    left: calc(50% - 20px);
  }

  .triangle:before, .triangle:after {
    content: '';
    position: absolute;
    background-color: inherit;
  }

  .triangle, .triangle:before, .triangle:after {
    width:  10px;
    height: 10px;
    border-top-right-radius: 30%;
  }

  .triangle {
    transform: rotate(0deg) skewX(-30deg) scale(1,.866);
  }

  .triangle:before {
    transform: rotate(-135deg) skewX(-45deg) scale(1.414,.707) translate(0,-50%);
  }

  .triangle:after {
    transform: rotate(135deg) skewY(-45deg) scale(.707,1.414) translate(50%);
  } */
`;

const MapImage = styled.img`
  width: 100%;
`;

export const Map = (props) => {

  const mapURL = 'http://www.clker.com/cliparts/p/D/P/J/g/0/gray-world-map.svg';

  return (
      <Container>
          <MapImage src={ mapURL } alt={ 'Traveller\'s trip map' } />

          <Icon color={ '#69BCD5' } path={ props.firstIcon }
                transitionDelay='0s' coords={{ left: '16%', top: '40%' }} />

          <Icon color={ '#69BCD5' } path={ props.secondIcon }
                transitionDelay='0s' coords={{ right: '25%', top: '49%'}} />

          <Icon color={ '#69BCD5' } path={ props.thirdIcon } transitionDelay='0s'
                coords={{ left: '55%', top: '23%' }} />

      </Container>
  );
};
