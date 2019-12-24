import React, { useState, useEffect, useRef } from 'react';

import { Redirect, Link as NavLink } from 'react-router-dom';

import styled, { css } from 'styled-components';

import { jsonstoreurl, headers } from './../../hooks/useJSONStore.jsx';

import { UserMenu } from './../Micro/HeadMenu.jsx';

import logo from './logo.svg';

const WrapCentered = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
`;

const HeaderMenu = styled.div`
  width: 90vw;
  height: 6vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 5vw;
`;

const HeaderMenuLogo = styled.img`
  height: 100%;
`;

const HeaderMenuInputWrap = styled.div`
  width: 40vw;
  height: 4vh;
  box-shadow: 1px 1px 0 rgba(0,0,0,0.2);
  border: 1px solid rgba(0,0,0,0.3);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeaderMenuInput = styled.input`
  width: 90%;
  height: 100%;
  font-size: 14pt;
  font-weight: 500;
  padding-left: 12px;
  border: none;
  outline: none;
`;

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direcrion: row;
  justify-content: flex-start;
  align-itmes: center;
  overflow-x: scroll;
  padding-top: 13px;
  padding-bottom: 13px;
`;

const Header = styled.h2`
  margin-left: 10vw;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: white;
`;

const CreateLink = styled(NavLink)`
  text-decoration: none;
  color: skyblue;
`;

const Card = styled.div`
  min-width: 360px;
  min-height: 200px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  margin-right: 15px;
  margin-left: 15px;
  text-decoration: none;
  ${ props => css`
    background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('${ props.background }');
    background-size: cover;
  ` }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PlanName = styled.h3`
  text-decoration: none;
  color: white;
  padding: 0;
  margin: 0;
  text-shadow: 0 0 3px rgba(0,0,0,0.1);
`;

const Nothing = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PlanList = (props) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    fetch(jsonstoreurl + '/latest', { headers: headers}).then(res => res.json()).then(data => {
      if(!data) return null;
      const plans = data.plans.filter((plan, index) => {
        const usernames = plan.members.map(member => member.id);
        return usernames.indexOf(window.localStorage.getItem('username')) >= 0;
      });
      const current = plans.filter(plan => plan.state === 0);
      const future = plans.filter(plan => plan.state === 1);
      const past = plans.filter(plan => plan.state === -1);
      setState({
        current: current,
        future: future,
        past: past
      });
    });
  }, []);

  return (!state ? <WrapCentered>
      <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" style={{ width: '110px' }} />
    </WrapCentered> : <Wrap>
      <HeaderMenu>
        <HeaderMenuLogo src={ logo } />
        <HeaderMenuInputWrap>
          <i style={{ marginLeft: '12px' }} className="fas fa-search"></i>
          <HeaderMenuInput placeholder={ `Попробуйте «Лос-Анджелес»` } />
        </HeaderMenuInputWrap>
        <UserMenu />
      </HeaderMenu>
      <Column>
        <br />
        <br />
        <br />
        <Line>
          <Header>Current Trips:</Header>
          <Row>
            {
              state.current.length ? state.current.map(plan => {
                return (
                  <Link to={{
                    pathname: "/plans/detailed",
                    planid: plan.id
                  }}>
                    <Card background={ plan.avatar }>
                      <PlanName>{ plan.name }</PlanName>
                      <small>{ plan.to.replace(/\-/g, '.') } –– { plan.back.replace(/\-/g, '.') }</small>
                    </Card>
                  </Link>
                );
              }) : <Nothing>
                <p>You don't have plans in this category yet.</p>
                <CreateLink to="#">Create</CreateLink>
              </Nothing>
            }
          </Row>
        </Line>
        <Line>
          <Header>Future Trips:</Header>
          {
            state.future.length ? state.future.map(plan => {
              return (
                <Link to={{
                  pathname: "/plans/detailed",
                  planid: plan.id
                }}>
                  <Card background={ plan.avatar }>
                    <PlanName>{ plan.name }</PlanName>
                    <small>{ plan.to.replace(/\-/g, '.') } –– { plan.back.replace(/\-/g, '.') }</small>
                  </Card>
                </Link>
              );
            }) : <Nothing>
              <p>You don't have plans in this category yet.</p>
              <CreateLink to="#">Create</CreateLink>
            </Nothing>
          }
        </Line>
        <Line>
          <Header>Past Trips:</Header>
          {
            state.past.length ? state.past.map(plan => {
              return (
                <Link to={{
                  pathname: "/plans/detailed",
                  planid: plan.id
                }}>
                  <Card background={ plan.avatar }>
                    <PlanName>{ plan.name }</PlanName>
                    <small>{ plan.to.replace(/\-/g, '.') } –– { plan.back.replace(/\-/g, '.') }</small>
                  </Card>
                </Link>
              );
            }) : <Nothing>
              <p>You don't have plans in this category yet.</p>
              <CreateLink to="#">Create</CreateLink>
            </Nothing>
          }
        </Line>
      </Column>
    </Wrap>
  );
};

export default PlanList;
