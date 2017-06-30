import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

const Photos = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: scroll;
`;

const Image = styled.img`
  height: 400px;
`;

const Button = styled.button`
  position: absolute;
  padding: 0.5rem 1rem;
  margin-top: -2.625rem;
  border-radius: 0.125rem;
  border: 0;
  background-color: #00779a;
  font-family: "Fira Sans";
  font-size: 0.625rem;
  font-weight: 300;
  line-height: 1.0;
  color: #fff;
`;

export default () =>
  (<div>
    <Photos>
      <Image src={`${process.env.PUBLIC_URL}/img/complex_1.png`} alt="1st image" />
      <Image src={`${process.env.PUBLIC_URL}/img/complex_2.png`} alt="2nd image" />
      <Image src={`${process.env.PUBLIC_URL}/img/complex_3.png`} alt="3rd image" />
      <Image src={`${process.env.PUBLIC_URL}/img/complex_4.png`} alt="4th image" />
      <Image src={`${process.env.PUBLIC_URL}/img/complex_5.png`} alt="5th image" />
    </Photos>
    <Grid>
      <Button>41 фотография</Button>
    </Grid>
  </div>);
