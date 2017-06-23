import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';
import CompassDevelopmentLogo from '../../img/compass-development-logo.png';

const Wrapper = styled.div`
  discplay:flex;
  background: #161616;
`;

const CompassLogo = Wrapper.extend`
  width: 26.188rem;
  height: 8.188rem;
  margin: 5rem;
`;


export default () =>
  (<Wrapper>
    <Row center="lg">
      <CompassLogo>
        <img src={CompassDevelopmentLogo} alt="Compass Development Logo" />
      </CompassLogo>
    </Row>
  </Wrapper>);
