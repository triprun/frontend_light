import React from 'react';

import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Col = styled.div`
  dsiplay: flex;
  flex-direction: column;
`;

const Day = styled.div`
  height: 40px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0,0,0,0.2);
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 8px;
  padding: 4px 24px;
  text-align: center;
`;

const Date = styled.small`
  margin: 0;
  padding: 0;
`;

const WeekDayName = styled.p`
  margin: 0;
  padding: 0;
`;

export const CityTimeFilter = (props) => {
  return typeof props.days === 'undefined' ? (<></>) : (
    <Div>
      <Day><WeekDayName>Overview</WeekDayName></Day>
      { props.days.map(day => {
          return (
            <Day>
              <Col>
                <Date>
                  {day.date}
                </Date>
                <WeekDayName>
                  {day.wname}
                </WeekDayName>
              </Col>
            </Day>
          );
        })
      }
    </Div>
  );
};
