import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';

const Discover = styled.div`
  margin-top: 4rem;
`;

const Title = styled.h2`
  margin: 0;
  text-align: center;
  font-family: "Fira Sans";
  font-size: 1.5rem;
  font-weight: 700;
  color: #3e4247;
`;

const Text = styled.p`
  text-align: center;
  font-family: "Fira Sans";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: #3e4247;
`;

const Contact = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const Button = styled.button`
  background-color: #000000;
  color: #fff;
  font-family: "Fira Sans";
  font-weight: 400;
  font-size: 1rem;
  padding: 0.75rem 2rem;
  border-style: none;
  border-radius: 0.125rem;
`;

export default () =>
  (<Discover>
    <Title>Discover Our New Developments</Title>
    <Col lgOffset={2} lg={8}>
      <Text>
        Compass brings a modern approach to new development marketing and sales. From boutique
        rental conversions
        to luxurious ground-up condominiums, browse our portfolio of current offerings.
      </Text>
      <Contact>
        <Button>Contact The Team</Button>
      </Contact>
    </Col>
  </Discover>);
