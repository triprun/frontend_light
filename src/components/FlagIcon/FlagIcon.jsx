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

const FlagIcon = (props) => {
  return (
    <FlagRounded { ...props } />
  );
};

export default FlagIcon;
