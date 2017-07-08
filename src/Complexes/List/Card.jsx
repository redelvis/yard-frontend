// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import type { Children } from 'react';

const Card = styled(Link)`
  display: flex;
  background: #fff;
  text-decoration: none;
  margin-bottom: 3rem;
  border-bottom: solid 0.125rem #646971;
  &:hover {
    box-shadow: 0 0 1.25rem rgba(0,0,0,.3);
  }
  &:first-child {
    margin-top: 0;
  }
`;

const Location = styled.p`
  text-align: left;
  color: #646971;
  font-family: Monaco;
  margin: 0;
`;

const Title = styled.h3`
  text-align: left;
  color: #000;
  font-family: "Fira Sans";
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0;
`;

const Info = styled.p`
  text-align: left;
  color: #3E4247;
  font-family: "Fira Sans";
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  display: flex;
  flex-flow: column;
  padding: 1.5rem 2rem;
`;

const Image = styled.img`
  width: 30.25rem;
  height: 21.875rem;
  flex-shrink: 0;
`;

type CardProps = {
  id: number,
  image: string,
  location: string,
  title: string,
  children: Children,
};

export default ({ id, image, location, title, children }: CardProps) =>
  (<Card to={`/complex/${id}`}>
    <Image src={image} />

    <Content>
      <Location>{location}</Location>
      <Title>{title}</Title>
      <Info>{children}</Info>
    </Content>
  </Card>);
