import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ArrowImage from './../public/img/combined-shape.png';

const Footer = styled.footer`
  padding-top: 2rem;
  padding-bottom: 1.75rem;
  background-color: #111;
`;

const Line = styled.hr`
  height: 0.125rem;
  border-style: none;
  background-color: #3e4247;
  margin: 0;
`;

const Title = styled.h4`
  font-family: "Fira Sans";
  font-weight: 700;
  font-size: 0.875rem;
  color: #646971;
  margin-top: 1rem;
`;

const CredentialsTitle = Title.extend`
  margin: 0;
  &:last-child {
    margin-top: 1rem;
  }
`;

const Credentials = styled.h4`
  display: block;
  font-family: "Fira Sans";
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #fff;
  text-decoration: none;
  margin-top: 0.5rem;
`;

const Link = styled.a`
  display: block;
  font-family: "Fira Sans";
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #fff;
  text-decoration: none;
  margin-top: 0.5rem;
`;

const ArrowLink = Link.extend`
  margin-top: 1rem;
`;

const ArrowImg = styled.img`
  margin-left: 0.5rem;
`;

const Legal = styled.p`
  font-family: "Fira Sans";
  font-weight: 300;
  font-size: 0.688rem;
  line-height: 1rem;
  color: #a9afb6;
  margin-top: 6rem;
`;

export default () =>
  (<Footer>
    <Grid>
      <Row>
        <Col lg={2}>
          <CredentialsTitle>ООО «Ярд»</CredentialsTitle>
          <Credentials>ОГРН 1175074002531</Credentials>
          <Credentials>ИНН 5036165365</Credentials>
          <Credentials>+7 (999) 821-14-88</Credentials>
        </Col>
        <Col lgOffset={2} lg={2}>
          <Line />
          <Title>Жилые комплексы</Title>
          <Link href="#">ВТБ Арена Парк</Link>
          <Link href="#">Садовые кварталы</Link>
          <Link href="#">Резиденция Монэ</Link>
          <ArrowLink href="#">
            Все ЖК Москвы
            <ArrowImg src={ArrowImage} alt="Arrow" />
          </ArrowLink>
        </Col>
        <Col lg={2}>
          <Line />
          <Title>Компания</Title>
          <Link href="#">Команда</Link>
          <Link href="#">О компании</Link>
        </Col>
      </Row>
      <Row>
        <Col lgOffset={4} lg={8}>
          <Legal>
            Любая информация, представленная на данном сайте, носит
            исключительно информационный характер и ни при каких условиях не
            является публичной офертой, определяемой положениями статьи 437 ГК
            РФ. © ООО «Ярд», 2017
          </Legal>
        </Col>
      </Row>
    </Grid>
  </Footer>);
