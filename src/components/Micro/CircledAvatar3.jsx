import React from 'react';

import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  object-fit: cover;
  transition: transform .2s;
  border: 2px solid #fff;
  &:hover {
    cursor: pointer;
    transform: translate(0%, -12%);
  }
`;

const AvatarSimple = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  object-fit: cover;
`;

const AvatarBig = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 120px;
  object-fit: cover;
`;

export const CircledAvatar = (props) => {
  return (
    <Avatar { ...props } />
  );
};

export const CircledAvatarSimple = (props) => {
  return (
    <AvatarSimple { ...props } />
  );
};

export const CircledAvatarBig = (props) => {
  return (
    <AvatarBig { ...props } />
  );
};

export const CircledAvatarRow3 = (props) => {
  let avatars = []; // full array of avatars
  const favatar = <CircledAvatar src={ props.sources.shift() } />
  if(props.sources)
    avatars = props.sources.map(source => <CircledAvatar src={ source } style={{ marginLeft: '-10px' }} />);
  avatars = [].concat(favatar, avatars);

  return (
    <Row style={ props.style }>
      { avatars }
    </Row>
  );
};
