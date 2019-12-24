import React, { useState, useEffect, useRef } from 'react';

import { Redirect, NavLink } from 'react-router-dom';

import styled, { css } from 'styled-components';

import moment from 'moment';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { jsonstoreurl, headers } from './../../hooks/useJSONStore.jsx';

import { UserMenu } from '../Micro/HeadMenu';

import LogoImage from './logo.png';

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100vw;
  height: 6vh;
  position: absolute;
  margin-top: 0;
  margin-left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  background: white;
`;

const HeaderLogo = styled.img`
  height: 100%;
  margin-left: 1vw;
`;

const HeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeaderMenuItem = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 0;
  padding-top: 4vh;
  height: 6vh;
`;

const HeaderMenuItemText = styled.p`
  margin: 0;
  padding: 0;
  color: black;
  font-size: 16pt;
  height: 4vh;

  ${ props => props.disabled && css`
    color: grey;
    cursor: not-allowed;
  `}

  ${ props => props.active && css`
    border-bottom: 1px solid black;
  `}
`;

const HeaderMenuUserMenu = styled(UserMenu)`
  margin-left: -1vw;
`;

const HeadMenu = () => {
  return (<Header>
    <HeaderLogo src={LogoImage} />
    <HeaderMenu>
      <HeaderMenuItem><HeaderMenuItemText active>Plans</HeaderMenuItemText></HeaderMenuItem>
      <HeaderMenuItem><HeaderMenuItemText disabled>Map</HeaderMenuItemText></HeaderMenuItem>
      <HeaderMenuItem><HeaderMenuItemText disabled>TODO</HeaderMenuItemText></HeaderMenuItem>
      <HeaderMenuItem><HeaderMenuItemText disabled>Files</HeaderMenuItemText></HeaderMenuItem>
      <HeaderMenuItem><HeaderMenuItemText disabled>Tickets</HeaderMenuItemText></HeaderMenuItem>
    </HeaderMenu>
    <HeaderMenuUserMenu />
  </Header>);
}

const PlanHeader = styled.div`
  padding-top: 7vh;
  padding-bottom: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 6vh;
  background: white;
`;

const PlanHeaderTripNameBox = styled.div`
  margin-left: 1vw;
`;

const PlanHeaderTripName = styled.h1`
  padding-top: 0;
  margin-top: 0;
  padding-bottom: 0;
  margin-bottom: 0;
`;

const PlanHeaderTripDates = styled.span`
  color: grey;
`;

const PlanHeaderTripCountries = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 6vh;
  background: yellow;
`;

const PlanHeaderTripChat = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 17vw;
  height: 6vh;
  background: skyblue;
  margin-right: 1vw;
`;

const PlanTypes = styled.div`
  width: 98vw;
  height: 6vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 1vw;
`;

const PlanTypesItem = styled.div`
  padding-left: 17px;
  padding-right: 17px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 15px;
  text-align: center;
  min-width: 5vw;
  color: skyblue;
  cursor: pointer;
  margin-right: 10px;

  ${ props => props.active && css`
    background: white;
    font-weight: bold;
    color: black;
  `}
`;

const PlanWrap = styled(DragDropContext)`
  width: 98vw;
  margin-left: 1vw;
  overflow-x: scroll;
  display: flex;
  flex-direcrion: row;
`;

const PlanByDate = styled(Column)`
  min-width: 430px;
  margin-right: 1vw;
  min-height: 500px;
`;

const PlanByDateDate = styled.p`
  color: grey;
`;

const PlanByDateCard = styled.div`
  width: 100%;
  min-height: 190px;
  background: white;
  border-radius: 12px;
  margin-bottom: 15px;
`;

const plan = {
  "users": [
    {
      "username": "rmnff",
      "email": "rmnff.dev@yandex.ru",
      "password": "12Triprun",
      "fullname": "Alexandr Romanov",
      "avatar": "https://sun9-61.userapi.com/c849428/v849428844/8b6b3/KSyehsV3Jhg.jpg"
    },
    {
      "email": "i.a.vishnevsky@gmail.com",
      "fullname": "Ivan Vishnevsky",
      "password": "gaygaygay",
      "username": "vanyagay"
    }
  ],
  "plans": [
    {
      "name": "VTB Mexico Trip",
      "description": "",
      "members": [],
      "todo": [],
      "files": [],
      "to": "31-10-2019",
      "back": "06-11-2019",
      "countries": [{ "name": "Mexico", "flag": "mx" }],
      "cities": [["Cancún", "Piste", "Valladolid, Yucatán", "Tulum, Quintana Roo"]],
      "places": [
        {
          "id": 0,
          "refCountry": 0,
          "refCity": 0,
          "type": "Hotel",
          "name": "Grand Hyatt Playa del Carmen",
          "date": "31-10-2019",
          "arrival": "21:00",
          "open": null,
          "close": null,
          "menu": null,
          "address": "1A. Avenida Esquina, Calle 26 Nte, Gonzalo Guerrero, 77710 Playa del Carmen, Q.R., Mexico",
          "comments": [],
          "image": "https://goo.gl/maps/27EtW6nihhNAxkn86"
        },
        {
          "id": 1,
          "refCountry": 0,
          "refCity": 1,
          "type": "Sightseeing",
          "name": "Chichén Itzá",
          "date": "01-11-2019",
          "arrival": "10:00",
          "open": null,
          "close": null,
          "menu": null,
          "address": null,
          "comments": [],
          "image": "https://goo.gl/maps/27EtW6nihhNAxkn86"
        },
        {
          "id": 2,
          "refCountry": 0,
          "refCity": 2,
          "type": "Sightseeing",
          "name": "Hacienda Chukum",
          "date": "01-11-2019",
          "arrival": "15:30",
          "open": null,
          "close": null,
          "menu": null,
          "address": null,
          "comments": [],
          "image": "https://goo.gl/maps/27EtW6nihhNAxkn86"
        },
        {
          "id": 3,
          "refCountry": 0,
          "refCity": 2,
          "type": "City",
          "name": "Valladolid, Yucatán",
          "date": "01-11-2019",
          "arrival": "17:00",
          "open": null,
          "close": null,
          "menu": null,
          "address": "Valladolid, Yucatán",
          "comments": [],
          "image": "https://goo.gl/maps/27EtW6nihhNAxkn86"
        },
        {
          "id": 4,
          "refCountry": 0,
          "refCity": 0,
          "type": "Hotel",
          "name": "Grand Hyatt Playa del Carmen",
          "date": "01-11-2019",
          "arrival": "20:15",
          "open": null,
          "close": null,
          "menu": null,
          "address": "1A. Avenida Esquina, Calle 26 Nte, Gonzalo Guerrero, 77710 Playa del Carmen, Q.R., Mexico",
          "comments": [],
          "image": "https://goo.gl/maps/27EtW6nihhNAxkn86"
        },
        {
          "id": 5,
          "refCountry": 0,
          "refCity": 0,
          "type": "Restaurant",
          "name": "Grand Hyatt Playa del Carmen",
          "date": "01-11-2019",
          "arrival": "20:30",
          "open": null,
          "close": null,
          "menu": "link",
          "address": "1A. Avenida Esquina, Calle 26 Nte, Gonzalo Guerrero, 77710 Playa del Carmen, Q.R., Mexico",
          "comments": [],
          "image": "https://goo.gl/maps/27EtW6nihhNAxkn86"
        },
        {
          "id": 6,
          "refCountry": 0,
          "refCity": 3,
          "type": "Sightseeing",
          "name": "Tulum Ruins",
          "date": "02-11-2019",
          "arrival": "10:00",
          "open": null,
          "close": null,
          "menu": null,
          "address": "Tulum, Quintana Roo",
          "comments": [],
          "image": "https://goo.gl/maps/27EtW6nihhNAxkn86"
        },
        {
          "id": 7,
          "refCountry": 0,
          "refCity": 3,
          "type": "Restaurant",
          "name": "AKIN",
          "date": "02-11-2019",
          "arrival": "11:30",
          "open": "10:00",
          "close": "21:00",
          "menu": "link",
          "address": "Tulum, Quintana Roo",
          "comments": [],
          "image": "https://goo.gl/maps/27EtW6nihhNAxkn86"
        },
        {
          "id": 8,
          "refCountry": 0,
          "refCity": 3,
          "type": "Sightseeing",
          "name": "Cobá pyramids",
          "date": "02-11-2019",
          "arrival": "15:30",
          "open": null,
          "close": null,
          "menu": null,
          "address": "Tulum, Quintana Roo",
          "comments": [],
          "image": "https://goo.gl/maps/27EtW6nihhNAxkn86"
        },
        {
          "id": 9,
          "refCountry": 0,
          "refCity": 3,
          "type": "Hotel",
          "name": "Aldea Coba",
          "date": "02-11-2019",
          "arrival": "17:30",
          "open": null,
          "close": null,
          "menu": null,
          "address": "Aldea Coba",
          "comments": [],
          "image": "https://goo.gl/maps/27EtW6nihhNAxkn86"
        },
        {
          "id": 10,
          "refCountry": 0,
          "refCity": 3,
          "type": "Restaurant",
          "name": "Rosa Negra",
          "date": "02-11-2019",
          "arrival": "19:00",
          "open": "13:00",
          "close": "21:00",
          "menu": "link",
          "address": "Aldea Coba",
          "comments": [],
          "image": "https://goo.gl/maps/27EtW6nihhNAxkn86"
        },
        {
          "id": 11,
          "refCountry": 0,
          "refCity": 3,
          "type": "Restaurant",
          "name": "Club Zama",
          "date": "03-11-2019",
          "arrival": "13:30",
          "open": "12:00",
          "close": "04:00",
          "menu": "link",
          "address": "Carretera a Carretera Sac Bajo s/n Mar Ortesa, 77400 Q.R., Mexico",
          "comments": [],
          "image": "https://goo.gl/maps/27EtW6nihhNAxkn86"
        },
        {
          "id": 12,
          "refCountry": 0,
          "refCity": 3,
          "type": "Restaurant",
          "name": "Grand Hyatt Playa del Carmen",
          "date": "03-11-2019",
          "arrival": "17:40",
          "open": "09:00",
          "close": "03:00",
          "menu": "link",
          "address": "Tulum, Quintana Roo",
          "comments": [],
          "image": "https://goo.gl/maps/27EtW6nihhNAxkn86"
        },
        {
          "id": 13,
          "refCountry": 0,
          "refCity": 3,
          "type": "Restaurant",
          "name": "Coco Bongo",
          "date": "03-11-2019",
          "arrival": "22:30",
          "open": "15:00",
          "close": "04:00",
          "menu": "link",
          "address": "Blvd. Kukulcan Km 9.5 #30, Punta Cancun, Zona Hotelera, 77500 Cancún, Q.R., Mexico",
          "comments": [],
          "image": "https://goo.gl/maps/27EtW6nihhNAxkn86",
        },
        {
          "id": 14,
          "refCountry": 0,
          "refCity": 3,
          "type": "Restaurant",
          "name": "Grand Hyatt Playa del Carmen",
          "date": "04-11-2019",
          "arrival": "10:00",
          "open": "09:00",
          "close": "03:00",
          "menu": "link",
          "address": "Tulum, Quintana Roo",
          "comments": [],
          "image": "https://goo.gl/maps/27EtW6nihhNAxkn86"
        },
        {
          "id": 15,
          "refCountry": 0,
          "refCity": 3,
          "type": "Restaurant",
          "name": "Siete Lagunas",
          "date": "04-11-2019",
          "arrival": "19:00",
          "open": "13:00",
          "close": "23:00",
          "menu": "link",
          "address": "MARINA DEL REY, Km.15.6, Blvd. Kukulcan, Zona Hotelera, 77500 Cancún, Q.R., Mexico",
          "comments": [],
          "image": "https://goo.gl/maps/27EtW6nihhNAxkn86"
        },
        {
          "id": 16,
          "refCountry": 0,
          "refCity": 3,
          "type": "Restaurant",
          "name": "Grand Hyatt Playa del Carmen",
          "date": "05-11-2019",
          "arrival": "10:00",
          "open": "09:00",
          "close": "03:00",
          "menu": "link",
          "address": "Tulum, Quintana Roo",
          "comments": [],
          "image": "https://goo.gl/maps/27EtW6nihhNAxkn86"
        },
        {
          "id": 17,
          "refCountry": 0,
          "refCity": 3,
          "type": "Restaurant",
          "name": "Grand Hyatt Playa del Carmen",
          "date": "05-11-2019",
          "arrival": "13:00",
          "open": "09:00",
          "close": "03:00",
          "menu": "link",
          "address": "Tulum, Quintana Roo",
          "comments": [],
          "image": "https://goo.gl/maps/27EtW6nihhNAxkn86"
        }
      ]
    }
  ]
};

const sortByDate = (array) => {
  const dates = [];
  const sorted = [];
  array.map(item => {
    const parsed = moment(item.date, "DD-MM-YYYY").unix();
    const position = dates.indexOf(parsed);
    if(position >= 0) sorted[position].push(item);
    else { sorted.push([item]); dates.push(parsed) }
  });
  return sorted;
};

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const Item = (props) => {
  console.log(props.item);
  return (<Draggable draggableId={ props.item.id } index={ props.index }>
    { provided => (
      <PlanByDateCard
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        { props.item.name }
      </PlanByDateCard>
    )}
  </Draggable>);
}

const ItemsList = React.memo(function ItemsList({ items }) {
  return items.map((item, index) => (
    <Item item={item} index={index} key={item.id} />
  ));
});

const Plans = (props) => {
  const [items, setItems] = useState(sortByDate(plan.plans[0].places));

  // useEffect(() => {
  //   const sorted = sortByDate(plan.plans[0].places);
  //   setItems(plan.plans[0].places);
  // }, []);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const reordered = reorder(
      items,
      result.source.index,
      result.destination.index
    );
    setItems(reordered);
  }

  return(!items ? <></> : <div style={{ minHeight: '100vh', width: '100vw', background: '#F7F8FB' }}>
    <HeadMenu />
    <PlanHeader>
      <PlanHeaderTripNameBox>
        <Column>
          <PlanHeaderTripName>VTB Mexico Trip</PlanHeaderTripName>
          <PlanHeaderTripDates>7-10 October 2019</PlanHeaderTripDates>
        </Column>
      </PlanHeaderTripNameBox>
      <PlanHeaderTripCountries></PlanHeaderTripCountries>
      <PlanHeaderTripChat></PlanHeaderTripChat>
    </PlanHeader>
    <PlanTypes>
      <PlanTypesItem active>All Places</PlanTypesItem>
      <PlanTypesItem>Hotels</PlanTypesItem>
      <PlanTypesItem>Restaurants</PlanTypesItem>
      <PlanTypesItem>Sightseeings</PlanTypesItem>
      <PlanTypesItem>Photo Places</PlanTypesItem>
    </PlanTypes>
    <PlanWrap onDragEnd={ onDragEnd }>
      <PlanByDate>
        <PlanByDateDate>7 October, Monday</PlanByDateDate>
        <Droppable droppableId="droppable">
        { provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <ItemsList items={items} />
            { provided.placeholder }
          </div>
        ) }
        </Droppable>
      </PlanByDate>
    </PlanWrap>
  </div>);
};

export default Plans;
