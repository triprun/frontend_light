import React from 'react';

import { NavLink } from 'react-router-dom'

import styled from 'styled-components';

import { TripCard, FirstCard, LastCard } from './../Micro/TripCard.jsx';
import { NewsPost } from './../Micro/NewsPost.jsx';
import { TwoSideColumns } from './../Micro/TwoSideColumns.jsx';

import logo from './logo.jpg';
import seashore from './left.jpg';
import scroll from './scrolldown.gif';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ScrollRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 10px;
  margin-top: 10px;
  width: 110px;
`;

const Down = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 30px;
  margin-left: -15px;
  margin-bottom: 15px;
`;

const Left = styled.div`
  display: ${(props) => props.isMobile ? 'none' : 'flex'};
  background: ${(props) => `url(${props.src})`};
  background-size: cover;
  flex: 2;
  height: 100vh;
  overflow: hidden;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${(props) => props.isMobile ? 1 : 5};
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Caveat&display=swap');
  font-family: 'Caveat', cursive;
  font-size: 48pt;
  margin-bottom: 0;
`;

const UnderText = styled.h3`
  font-size: 16pt;
  color: rgba(70,70,70,0.3);
  margin-top: 0;
  margin-bottom: 0;

  small {
    font-size: 10pt;

    a {
      text-decoration: none;
      color: #69BCD5;
    }
  }
`;

const Wrap = styled(Row)`
  height: 100%;
`;

const Centered = styled(Wrap)`
  width: 90vw;
  margin-left: 5vw;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const Search = styled.input`
  border-radius: 3px;
  border: 0.5px solid rgba(70,70,70,0.3);
  padding: 6px 9px;
  outline: none;
  width: ${(props) => props.isMobile ? '60vw' : '20vw'};
  font-size: 12pt;
`;

const Submit = styled.button`
  border: none;
  background: white;
  cursor: pointer;
  font-size: 14pt;
`;

const Box = styled.div`
  border-radius: 3px;
  min-width: 350px;
  width: 350px;
  height: 500px;
  background: white;
  display: flex;
  flex-direction: column;
  margin-right: 30px;

  small {
    color: rgba(70,70,70,0.9);
    line-height: 14pt;
  }
`;

const Picture = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 3px 3px 0 0;
  cursor: pointer;
  box-shadow: 1px 0 15px rgba(0, 0, 0, 0.2);
`;

const Star = styled.i`
  color: #FFC125;
  margin-right: 12px;
  font-size: 14pt;
`;

const PlaceName = styled.p`
  cursor: pointer;
`;

const Stars = (props) => {
  const stars = new Array(props.rating).fill({}).map(star => <Star className="fas fa-star" />);
  return (<Row style={{ marginTop: '5px', marginBottom: '15px' }}>{ stars }</Row>);
}

const Index = (props) => {
  return (
    <>
      <Logo src={ logo } />
      <Down src={ scroll } />
      <Wrap>
        <Left { ...props } src={ seashore } />
        <Right { ...props }>
          <Header>Plan Your Trip</Header>
          <UnderText>Anywhere, Anytime</UnderText>
          <Row>
            <form style={{ marginTop: '12px' }}>
              <Search { ...props } type="text" placeholder="Search" />
              <Submit type="submit"><i className="fa fa-search"></i></Submit>
            </form>
          </Row>
          <UnderText><small>Don't have an account? <NavLink to="/signup">Register now.</NavLink></small></UnderText>
          <UnderText><small><NavLink to="/signin">Log in</NavLink> to access personal profile.</small></UnderText>
        </Right>
      </Wrap>
      <Centered>
        <Column>
          <h1>Popular destinations:</h1>
          <ScrollRow style={{ width: '100vw', marginLeft: '-5vw' }}>
            <FirstCard />
            <Box>
              <Picture src="https://www.rightmove.co.uk/news/content/uploads/2018/03/61682_3995232_IMG_01_0000.jpg" />
              <Stars rating={ 3 } />
              <PlaceName>VIP Apartment Agent 007</PlaceName>
              <small>This is an amazing opportunity to stay in London, where agent 007 started his career. Situated just around the corner of Russian Embassy, this place definitely has atmosphere of 80's spy movies with few pinches of new-style fashionable furniture.</small>
            </Box>
            <Box>
              <Picture src="https://www.book-a-flat.com/images/paris-salon-2.jpg" />
              <Stars rating={ 5 } />
              <PlaceName>Cozy Paris Nest</PlaceName>
              <small>Amazing place to stay for a couple. Lovely view to the Eiffel Tower and bunch of small family-like cozy cafes down the building creates lovely atmosphere.</small>
            </Box>
            <Box>
              <Picture src="https://www.pufikhomes.com/wp-content/uploads/2017/08/beautiful-apartment-in-paris-pufikhomes-1.jpg" />
              <Stars rating={ 4 } />
              <PlaceName>Family House</PlaceName>
              <small>Great choice for a family trip to Manchester. Living on the ground floor makes it easy to keep an eye on kids playing in backyard. BBQ set and friendly neighbours, who might help you have a great evening with your family.</small>
            </Box>
            <Box>
              <Picture src="https://s-ec.bstatic.com/images/hotel/max1024x768/112/112665925.jpg" />
              <Stars rating={ 5 } />
              <PlaceName>Men's Cave</PlaceName>
              <small>PS4, Xbox One X, Kicker and Pool table are suited for a real men relax party. Two fridges and bars nearby won't leave you with out booze.</small>
            </Box>
            <LastCard />
          </ScrollRow>
          <h1>Popular marschroutes:</h1>
          <ScrollRow style={{ width: '100vw', marginLeft: '-5vw' }}>
            <FirstCard />
            <TripCard
              source="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/london-eye/london-eye.jpg"
              name="London all around & round"
              dates="Jun-Dec 2018"
              code="gb-eng"
              city="London"
            />
            <TripCard
              style={{ marginLeft: '30px' }}
              source="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/london-eye/london-eye.jpg"
              name="London all around & round"
              dates="Jun-Dec 2018"
              code="gb-eng"
              city="London"
            />
            <TripCard
              style={{ marginLeft: '30px' }}
              source="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/london-eye/london-eye.jpg"
              name="London all around & round"
              dates="Jun-Dec 2018"
              code="gb-eng"
              city="London"
            />
            <TripCard
              style={{ marginLeft: '30px' }}
              source="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/london-eye/london-eye.jpg"
              name="London all around & round"
              dates="Jun-Dec 2018"
              code="gb-eng"
              city="London"
            />
            <TripCard
              style={{ marginLeft: '30px' }}
              source="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/london-eye/london-eye.jpg"
              name="London all around & round"
              dates="Jun-Dec 2018"
              code="gb-eng"
              city="London"
            />
            <TripCard
              style={{ marginLeft: '30px' }}
              source="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/london-eye/london-eye.jpg"
              name="London all around & round"
              dates="Jun-Dec 2018"
              code="gb-eng"
              city="London"
            />
            <LastCard />
          </ScrollRow>
          <h1>Newsletter:</h1>
          { props.isMobile ? (<Row style={{ width: '99.6vw', marginLeft: '0.2vw', justifyContent: 'space-between' }}>
            <NewsPost
              avatar="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/f8/Amelia_Pinney.jpg/revision/latest?cb=20151228165724"
              author="John Doe"
              image="https://images.unsplash.com/photo-1519682266577-d22742ebd04d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              date="1 hour ago"
              likes={ 399 }
            />
            <NewsPost
              avatar="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/f8/Amelia_Pinney.jpg/revision/latest?cb=20151228165724"
              author="John Doe"
              image="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_232,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170606120957-california---travel-destination---shutterstock-220315747.jpg"
            />
            <NewsPost
              avatar="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/f8/Amelia_Pinney.jpg/revision/latest?cb=20151228165724"
              author="John Doe"
              image="https://vignette.wikia.nocookie.net/mint524/images/e/e4/00003177.jpg/revision/latest?cb=20160706152130"
            />
          </Row>) : (
          <TwoSideColumns things={[
            <NewsPost
              avatar="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/f8/Amelia_Pinney.jpg/revision/latest?cb=20151228165724"
              author="John Doe"
              image="https://images.unsplash.com/photo-1519682266577-d22742ebd04d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              date="8 hours ago"
              likes={ 399 }
            />,
            <NewsPost
              avatar="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/f8/Amelia_Pinney.jpg/revision/latest?cb=20151228165724"
              author="John Doe"
              image="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_232,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170606120957-california---travel-destination---shutterstock-220315747.jpg"
              date="4 hours ago"
              likes={ 68 }
            />,
            <NewsPost
              avatar="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/f8/Amelia_Pinney.jpg/revision/latest?cb=20151228165724"
              author="John Doe"
              image="https://vignette.wikia.nocookie.net/mint524/images/e/e4/00003177.jpg/revision/latest?cb=20160706152130"
              caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              date="1 hour ago"
              likes={ 23 }
            />
          ]} /> ) }
        </Column>
      </Centered>
    </>
  );
};

export default Index;
