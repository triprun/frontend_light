import React from 'react';

import styled from 'styled-components';

import like from './Like.png';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(${like});
  background-size: 35px;
  border-radius: 9px;
  background-repeat: no-repeat;
  background-position: center;
  width: 50px;
  height: 50px;
  position: absolute;
  z-index: 3;
  cursor: pointer;
`;

const Cont = styled.div`
  height: 50px;
  width: 50px;
  position: relative;
`;

const Back = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background: #00000087;
  top: 0;
  z-index: 1;
  border-radius: 10px;
`;


export const LikeSq = (props) => {

  return (
      <Cont>
        <Row style={ props.style }>

        </Row>
        <Back>
        </Back>

      </Cont>
  );
};
