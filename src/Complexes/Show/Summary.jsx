import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

import Line from './SeparationLine';

const Summary = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Title = styled.h2`
  display: block;
  margin: 1.5rem 0 1.5rem 3rem;
  font-family: "Philosopher";
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.12;
  color: #3e4247;
  &:first-child {
    margin-left: 0;
  }
`;

const Small = styled.small`
  display: block;
  font-family: "Fira Sans";
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.57;
  color: #a9afb6;
  margin-top: 0.625rem;
`;

export default () =>
  (<Grid>
    <Summary>
      <Title>
        950
        <Small>
          предложений
        </Small>
      </Title>
      <Title>
        John McAslan + Partners
        <Small>
          архитектор
        </Small>
      </Title>
      <Title>
        Группа «ПСН»
        <Small>
          застройщик
        </Small>
      </Title>
    </Summary>
    <Line />
  </Grid>);
