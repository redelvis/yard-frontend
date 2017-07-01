import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import { getImageUrl } from '../../utils';

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

export default props =>
  (<div>
    <Photos>
      {props.images.map(image =>
        <Image key={image.id} src={getImageUrl(image)} alt="complexImage" title="complexImage" />,
      )}
    </Photos>
    <Grid>
      <Button>41 фотография</Button>
    </Grid>
  </div>);
