import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Features = styled.div`
  background-color: #fff;
  padding-top: 2rem;
  padding-bottom: 3rem;
`;
const GlobalTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0.6rem;
  font-family: "Philosopher";
  font-size: 1.5rem;
  line-height: 1.688rem;
  font-weight: 700;
  color: #3e4247;
  display: block;
`;
const Block = styled.dl`
  display: flex;
  margin: 0.5rem 0 0 0;
`;

const Title = styled.dt`
  width: 50%;
  font-family: "Fira Sans";
  font-size: 1rem;
  line-height: 1.5;
  color: #a9afb6;
`;
const Number = styled.dd`
  width: 50%;
  font-family: "Fira Sans";
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: #3e4247;
`;

export default () =>
  <Features>
    <Grid>
      <GlobalTitle>Характеристики</GlobalTitle>
      <Row>
        <Col lg={4}>
          <Block>
            <Title>Количество квартир </Title>
            <Number>1 503 </Number>
          </Block>
          <Block>
            <Title>Статус </Title>
            <Number>Квартиры </Number>
          </Block>
          <Block>
            <Title>Цены </Title>
            <Number>от 5.3 млн до 143.5 млн </Number>
          </Block>
        </Col>
        <Col lg={4}>
          <Block>
            <Title>Количество квартир </Title>
            <Number>1 503 </Number>
          </Block>
          <Block>
            <Title>Количество квартир </Title>
            <Number>1 503 </Number>
          </Block>
          <Block>
            <Title>Количество квартир </Title>
            <Number>1 503 </Number>
          </Block>
        </Col>
        <Col lg={4}>
          <Block>
            <Title>Количество квартир </Title>
            <Number>1 503 </Number>
          </Block>
          <Block>
            <Title>Количество квартир </Title>
            <Number>1 503 </Number>
          </Block>
          <Block>
            <Title>Количество квартир </Title>
            <Number>1 503 </Number>
          </Block>
        </Col>
      </Row>
    </Grid>
  </Features>;
