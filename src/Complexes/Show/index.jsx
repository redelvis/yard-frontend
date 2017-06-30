import React from 'react';

import BodyClassName from 'react-body-classname';

import ComplexTitle from './ComplexTitle';
import ImagesScroller from './ImagesScroller';
import Summary from './Summary';
import Features from './Features';
import Description from './Description';
import Infrastracture from './Infrastracture';
import Offers from './Offers';
import Area from './Area';
import Nearby from './Nearby';

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    return fetch('https://api.jqestate.ru/v1/complexes${this.props.match.params.id}',
  )
  .then(complexes => this.setState(complexes));


export default () =>
  (<BodyClassName className="complex">
    <div>
      <ComplexTitle />
      <ImagesScroller />
      <Summary />
      <Features />
      <Description />
      <Infrastracture />
      <Offers />
      <Area />
      <Nearby />
    </div>
  </BodyClassName>);
