import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-flow: column;
  background-color: #fff;
`;

const Title = styled.h3`
  font-family: "Philosopher";
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.75rem;
  margin: 1.5rem 2rem 0 2rem;
  color: #3e4247;
`;

const Wrapper = styled.dl`
  display: flex;
  flex-flow: column;
  margin: 1.5rem 2rem 0 2rem;
`;

const Label = styled.dt`
  font-family: "Fira Sans", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.38;
  color: #a9afb6;
`;

const Value = styled.dd`
  font-family: "Fira Sans";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.375rem;
  color: #3e4247;
  margin-top: 0.5rem;
  margin-left: 0;
`;

const Button = styled.button`
  background-color: #000;
  color: #fff;
  text-align: center;
  font-family: "Fira Sans";
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.0;
  border-style: none;
  border-radius: 0.125rem;
  padding: 0.75rem 0.125rem;
  margin: 2rem 4rem 1.5rem 4rem;
`;

export default props =>
  (<Card to={`/complex/${props.id}`}>
    <Title>{props.title}</Title>
    <Wrapper>
      <Label>Площадь</Label>
      <Value>от 59 до 120 м²</Value>
    </Wrapper>
    <Wrapper>
      <Label>Стоимость</Label>
      <Value>от 20.3 до 84.2 млн руб</Value>
    </Wrapper>
    <Button>Посмотреть предложения</Button>
  </Card>);
