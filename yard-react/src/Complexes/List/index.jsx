import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import BodyClassName from 'react-body-classname';


import CompassDevelopmentLogo from './CompassDevelopmentLogo';
import Discover from './Discover';
import Card from './Card';

const Cards = styled.div`
  margin: 4rem;
`;



export default () =>
  (<BodyClassName className="complexes">
    <div>
      <CompassDevelopmentLogo />
      <Discover />
      <Cards>
        <Grid>
          <Card id={1} loc="SOUTH BEACH, SAN FRANCISCO" title="764 Metropolitan Avenue" info="The Lewis Steel Building is a masterful industrial conversion located in the heart of Williamsburg. Located at 76 North 4th Street, the former 1930's steel factory has been transformed into 83 individually unique and luxury loft apartments." />
          <Card id={2} loc="MIDTOWN EAST, MANHATTAN" title="100 East 53rd Street" info="One Hundred East Fifty Third Street by Foster + Partners is a limited collection of modern residences in Midtown Manhattan's Cultural District. The 94 residences ranging from alcove lofts to four bedrooms within the 63-story tower are generously proportioned." />
          <Card id={3} loc="NOLITA, MANHATTAN" title="152 Elizabeth" info ="152 Elizabeth is an ultra-luxury condominium building—the first in New York City designed by Japanese master architect Tadao Ando. Located at the corner of Kenmare and Elizabeth Streets in Nolita, the 32,000-square-foot building will stand as a profound architectural statement and embrace the industrial character of the neighborhood." />
        </Grid>
      </Cards>
    </div>
  </BodyClassName>);
