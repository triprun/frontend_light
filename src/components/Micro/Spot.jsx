import React from 'react';

import styled from 'styled-components';


const Row = styled.div`

`;


export const Spot = (props) => {

  return (
      <div style={ props.style }>
          <div style={{
              width: '250px',
              height: '150px',
              borderRadius: '20px',
              background: 'url("'+props.img+'")'}}></div>
          <div style={{ marginLeft: '20px', }}>
              <div style={{
                  color: '#000',
                  fontSize: '30px',
              }}>{props.caption}</div>
              <div style={{
                  color: '#000',
                  fontSize: '19px',
              }}>{props.description}</div>
          </div>
      </div>
  );
};
