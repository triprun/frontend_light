import * as React from 'react';
import styled from 'styled-components';
import FlagIconFactory from 'react-flag-icon-css';
const Flag = FlagIconFactory(React, { useCssModules: false });

const FlagRounded = styled(Flag)`
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0,0,0,0.2);
  height: 24px;
  width: 32px;
  margin-top: 13px;
  margin-right: 6px;
`;

const FlagCircled = styled(Flag)`
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  height: 45px;
  width: 68px;
  margin-top: 13px;
  margin-right: 20px;
`;

const FlagCircle = styled.div`
  border-radius: 50px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  height: 45px;
  width: 45px;
  margin-right: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const FlagCircleInner = styled(Flag)`
  position: absolute;
  width: 60px;
  height: 60px;
`;

const FlagIcon = (props) => {
  return (
    <FlagRounded { ...props } />
  );
};

export const FlagIconCircled = (props) => {
  return (
    <FlagCircled { ...props } />
  );
}

export const FlagIconCircle = (props) => {
  return (
    <FlagCircle>
      <FlagCircleInner { ...props } />
    </FlagCircle>
  );
}

export default FlagIcon;
