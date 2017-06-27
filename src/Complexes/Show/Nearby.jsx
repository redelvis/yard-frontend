import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Places = styled.div`
  margin-top: -9.6rem;
  margin-bottom: 2rem;
`;
const Map = styled.img`
  width: 100%;
  height: 19.125rem;
  box-shadow: 0 0 1.875rem 0 rgba(0, 0, 0, 0.5);
`;

const List = styled.div`
  box-shadow: 0 0 1.875rem 0 rgba(0, 0, 0, 0.5);
`;

const Item = styled.div`
  padding: 1.5rem;
  background-color: white;
  border-bottom: solid 1px #e0e0e1;
`;

const Location = styled.p`
  margin: 0;
  font-family: "Fira Sans";
  font-size: 1rem;
  line-height: 1.38;
  font-weight: 500;
  color: #3e4247;
`;
const Distance = styled.p`
  margin: 0.5rem 0 0 0;
  font-family: "Fira Sans";
  font-size: 16px;
  line-height: 1.38;
  color: #a9afb6;
`;

export default () =>
  (<Places>
    <Grid>
      <Row>
        <Col lg={6}>
          <Map src={`${process.env.PUBLIC_URL}/img/area-map.jpg`} alt="Map" />
        </Col>
        <Col lg={6}>
          <List>
            <Item>
              <Location>Красный октябрь</Location>
              <Distance>24 минуты, 6 км</Distance>
            </Item>
            <Item>
              <Location>World class</Location>
              <Distance>2 минуты, 300 м</Distance>
            </Item>
            <Item>
              <Location>Третьяковская галерея</Location>
              <Distance>14 минут, 4 км</Distance>
            </Item>
          </List>
        </Col>
      </Row>
    </Grid>
  </Places>);
