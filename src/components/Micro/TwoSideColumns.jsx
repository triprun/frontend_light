import React from 'react';

import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const TwoSideColumns = ({ things }) => {

  let left = [];
  let right = [];

  if(things.length > 1) {
    const half = Number.parseInt((things.length - 1) / 2);
    left = things.slice(0, half);
    right = things.slice(half, things.length);
  }

  return (
    <Row style={{ justifyContent: 'space-between' }}>
      <Column>
        { right }
      </Column>
      <Column>
        { left }
      </Column>
    </Row>
  );
};
