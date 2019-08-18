import React from 'react';

import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  object-fit: cover;
  transform: translate(0%, 72%);
  transition: transform .2s;

  &:hover {
    cursor: pointer;
    transform: translate(0%, 62%);
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

export const CircledAvatarRow = (props) => {
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
