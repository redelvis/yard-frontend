import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Area = styled.div`
  background-color: #3e4247;
  padding-top: 4rem;
  padding-bottom: 13.6rem;
  line-height: 0;
`;

const Title = styled.h2`
  margin: 0;
  font-family: "Philosopher";
  font-size: 1.5rem;
  line-height: 1.625rem;
  color: #a9afb6;
  font-weight: 700;
`;

const Description = styled.p`
  margin: 3rem 0 3rem 0;
  font-family: "Philosopher";
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.25;
  color: #ffffff;
`;

const Guide = styled.a`
  text-decoration: none;
  font-family: "Fira Sans";
  font-size: 1rem;
  line-height: 1.56rem;
  color: #00779a;
`;

const Image = styled.img`
  width: 100%;
`;

export default () =>
  (<Area>
    <Grid>
      <Row middle="lg">
        <Col lg={6}>
          <Title>
            Якиманка
          </Title>
          <Description>
            Исторический центр Москвы в двух <br />километрах от Кремля
          </Description>
          <Guide>
            Гид по Якиманке →
          </Guide>
        </Col>
        <Col lg={6}>
          <Image src={`${process.env.PUBLIC_URL}/img/polyanka-photo.png`} alt="Polyanka" />
        </Col>
      </Row>
    </Grid>
  </Area>);
