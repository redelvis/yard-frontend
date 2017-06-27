import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from './Card';

const Offers = styled.div`
  background-color: #f4f5f9;
`;

const Title = styled.h2`
  padding-top: 4rem;
  text-align: center;
  font-family: "Philosopher";
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.12;
  color: #3e4247;
  margin: 0 auto;
`;

const Cards = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 4rem;
`;

export default () =>
  (<Offers>
    <Grid>
      <Title>Предложения в ЖК «Полянка/44»</Title>
      <Cards>
        <Row>
          <Col lg={4}>
            <Card title="1-комнатные квартиры" />
          </Col>
          <Col lg={4}>
            <Card title="2-комнатные квартиры" />
          </Col>
          <Col lg={4}>
            <Card title="3-комнатные квартиры" />
          </Col>
        </Row>
      </Cards>
    </Grid>
  </Offers>);
