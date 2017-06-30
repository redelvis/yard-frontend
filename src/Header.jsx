import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import logo from './../public/img/compass-logo.png';

const Header = styled.header`
  background: #fff;
  border-bottom: solid 1px #e0e0e1;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CompassLogo = styled.img`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Nav = styled.nav`
  display: flex;
  line-height: 1rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #3e4247;
  text-decoration: none;
  font-size: 1rem;
  font-family: "Fira Sans";
  margin: 0;
  line-height: 1.0;
  text-align: center;
  vertical-align: middle;
 }

  &:first-child {
    margin-left: 0;
    margin-right: 2rem;
  }

  &:last-child {
    margin-left: 2rem;
    margin-right: 0;
  }
`;

export default () =>
  (<Header>
    <Grid>
      <Wrapper>
        <Link to="/">
          <CompassLogo src={logo} alt="Compass Logo" />
        </Link>
        <Nav>
          <NavLink to="#buy">Купить</NavLink>
          <NavLink to="#rent">Снять</NavLink>
          <NavLink to="#our_agents">Наши агенты</NavLink>
        </Nav>
      </Wrapper>
    </Grid>
  </Header>);
