import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Infrastracture = styled.div`
  background-color: #fff;
`;

const Wrapper = styled.div`
  padding-top: 2rem;
  padding-bottom: 4rem;
  border-top: 0.063rem solid #e0e0e1;
`;

const Label = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: "Philosopher";
  font-size: 1.5rem;
  line-height: 1.688rem;
  font-weight: 700;
  color: #3e4247;
  display: block;
`;
const Value = styled.p`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-family: "Fira Sans";
  font-size: 1rem;
  color: #3e4247;
  line-height: 1.38rem;
`;

export default () =>
  (<Infrastracture>
    <Grid>
      <Wrapper>
        <Label>
          Инфраструктура
        </Label>
        <Row>
          <Col lg={2}>
            <Value>Бассейн</Value>
          </Col>
          <Col lg={2}>
            <Value>Детский сад</Value>
          </Col>
          <Col lg={2}>
            <Value>Частная школа</Value>
          </Col>
          <Col lg={2}>
            <Value>Бассейн</Value>
          </Col>
          <Col lg={2}>
            <Value>Детский сад</Value>
          </Col>
          <Col lg={2}>
            <Value>Частная школа</Value>
          </Col>
          <Col lg={2}>
            <Value>Частная школа</Value>
          </Col>
          <Col lg={2}>
            <Value>Частная школа</Value>
          </Col>
          <Col lg={2}>
            <Value>Частная школа</Value>
          </Col>
        </Row>
      </Wrapper>
    </Grid>
  </Infrastracture>);
