import React from 'react';

import styled from 'styled-components';

import { CircledAvatarSimple } from './CircledAvatar.jsx';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Post = styled.div`
  width: 90%;
  background: white;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
  border-radius: 3px;
  margin-bottom: 30px;
`;

const Head = styled(Row)`
  img {
    margin-top: 8px;
  }
`;

const Author = styled.div`
  color: black;
  font-weight: bold;
  cursor: pointer;
  padding: 17px;
  padding-top: 20px;
  padding-left: 14px;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin-top: 8px;
  overflow: hidden;
`;

const Blurred = styled.div`
  width: 200%;
  height: 200%;
  position: absolute;
  top: -50%;
  left: -50%;
  background: ${p => `url(${p.source})`} 150%/ cover border-box padding-box;
  border: inherit;
  border-color: transparent;
  background: inherit;
  background-clip: border-box;
  -webkit-filter: blur(4px);
  filter: blur(4px);
  -webkit-clip-path: inset(0);
  clip-path: inset(0);
  z-index: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: contain;
  z-index: 2;
`;

const Caption = styled.div`
  width: 90%;
  margin-left: 5%;
  color: #282828;
`;

const Hard = styled.span`
  font-weight: bold;
`;

const Hr = styled.hr`
  border: none;
  background: rgba(0,0,0,0.1);
  height: 0.5px;
  padding-bottom: 0;
  margin-bottom: 0;
`;

const Creds = styled.div`
  width: 90%;
  margin-left: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #9A9A9A;
  font-size: 10pt;
  padding: 10px 0 10px 0;
`;

const Likes = styled.i`
  color: red;
`;

export const NewsPost = (props) => {
  return (
    <Post>
      <Head>
        <CircledAvatarSimple style={{ marginLeft: '30px' }} src={ props.avatar } />
        <Author>{ props.author }</Author>
      </Head>
      { props.image && <Container style={ props.caption && ({ marginBottom: '14px' }) }>
        <Blurred source={ props.image }>
          <Image src={ props.image } />
        </Blurred>
        <Image src={ props.image } />
      </Container> }
      { props.caption && <>
        <Caption>
          <Hard>{ props.author }</Hard> { props.caption }
        </Caption>
        <Hr />
      </>}
      <Creds>
        <div>
          { props.date }
        </div>
        <div>
          <Likes className="fas fa-heart"></Likes> { props.likes || '0 likes yet' }
        </div>
      </Creds>
    </Post>
  );
};
