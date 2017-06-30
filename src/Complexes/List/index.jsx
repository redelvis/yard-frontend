import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import BodyClassName from 'react-body-classname';

import CompassDevelopmentLogo from './CompassDevelopmentLogo';
import Discover from './Discover';
import Card from './Card';

const Cards = styled.div`
  margin: 4rem;
`;


function formatLocation(location) {
  return [location.subLocalityName, location.street, location.house]
    .filter(item => !!item)
    .join(', ');
}

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    return fetch('https://api.jqestate.ru/v1/complexes?filter[state]=public')
      .then(response => response.json())
      .then(({ items: complexes }) => {
        this.setState({ complexes });
      });
  }

  render() {
    const { complexes = [] } = this.state;

    return (
      <BodyClassName className="complexes">
        <div>
          <CompassDevelopmentLogo />
          <Discover />
          <Cards>
            <Grid>
              {complexes.map(complex =>
                (<Card
                  key={complex.id}
                  id={complex.id}
                  location={formatLocation(complex.location)}
                  title={`${complex.name}`}
                  image={`https://images.jqestate.ru/${complex.images[0].id}-jqestate-512`}
                />),
              )}
            </Grid>
          </Cards>
        </div>
      </BodyClassName>
    );
  }
}

export default List;