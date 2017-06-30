import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Features = styled.div`
  background-color: #fff;
  padding-top: 2rem;
  padding-bottom: 3rem;
`;
const FeaturesTitle = styled.h2`
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

const Label = styled.dt`
  width: 50%;
  font-family: "Fira Sans";
  font-size: 1rem;
  line-height: 1.5;
  color: #a9afb6;
`;
const Value = styled.dd`
  width: 50%;
  font-family: "Fira Sans";
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: #3e4247;
`;

export default () =>
  (<Features>
    <Grid>
      <FeaturesTitle>Характеристики</FeaturesTitle>
      <Row>
        <Col lg={4}>
          <Block>
            <Label>Количество квартир </Label>
            <Value>1 503 </Value>
          </Block>
          <Block>
            <Label>Статус </Label>
            <Value>Квартиры </Value>
          </Block>
          <Block>
            <Label>Цены </Label>
            <Value>от 5.3 млн до 143.5 млн </Value>
          </Block>
        </Col>
        <Col lg={4}>
          <Block>
            <Label>Количество квартир </Label>
            <Value>1 503 </Value>
          </Block>
          <Block>
            <Label>Количество квартир </Label>
            <Value>1 503 </Value>
          </Block>
          <Block>
            <Label>Количество квартир </Label>
            <Value>1 503 </Value>
          </Block>
        </Col>
        <Col lg={4}>
          <Block>
            <Label>Количество квартир </Label>
            <Value>1 503 </Value>
          </Block>
          <Block>
            <Label>Количество квартир </Label>
            <Value>1 503 </Value>
          </Block>
          <Block>
            <Label>Количество квартир </Label>
            <Value>1 503 </Value>
          </Block>
        </Col>
      </Row>
    </Grid>
  </Features>);
