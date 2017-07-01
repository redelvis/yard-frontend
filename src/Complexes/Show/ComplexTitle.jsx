import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const ComplexTitle = styled.div`
  padding: 1.5rem 0 1rem 0;
  background-color: #fff;
`;
const Name = styled.h1`
  font-family: "Philosopher";
  font-size: 2rem;
  line-height: 1.13;
  font-weight: 700;
  color: #3e4247;
  margin: 0;
`;

const Adress = styled.p`
  font-family: "Fira Sans";
  font-size: 0.88rem;
  line-height: 1.57;
  font-weight: 300;
  color: #a9afb6;
  margin: 0.5rem 0 0 0;
`;

const Button = styled.button`
  font-family: "Fira Sans";
  padding: 0.5rem 1rem;
  border-radius: 0.125px;
  border: solid 1px #e0e0e1;
  background-color: white;
  font-size: 0.63rem;
  line-height: 0.63rem;
  font-weight: 300;
  color: #00779a;
`;

function formatLocation(location) {
  const locationBase = [location.subLocalityName, location.street, location.house]
    .filter(item => !!item)
    .join(', ');

  if (location.postalCode) return `${locationBase} • ${location.postalCode}`;
  return locationBase;
}

export default props =>
  (<ComplexTitle>
    <Grid>
      <Row>
        <Col lg={6}>
          <Name>{props.name}</Name>
          <Adress>{formatLocation(props.location)}</Adress>
        </Col>
        <Col lg={6}>
          <Row end="lg">
            <Button>В избранное</Button>
          </Row>
        </Col>
      </Row>
    </Grid>
  </ComplexTitle>);
