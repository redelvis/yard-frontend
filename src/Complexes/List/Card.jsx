import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export default props =>
  (<Card to={`/complex/${props.id}`}>
    <Image src={`${process.env.PUBLIC_URL}/img/apt_${props.id}.png`} />
    <Content>
      <Location>{props.location}</Location>
      <Title>{props.title}</Title>
      <Info>{props.children}</Info>
    </Content>
  </Card>);
