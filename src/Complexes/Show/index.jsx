import React, { Component } from 'react';

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
import { get } from '../../api';

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.load(this.props.match.params.id);
    console.log(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.load(nextProps.match.params.id);
    }
    console.log(nextProps);
  }

  load() {
    get(`/complexes/${this.props.match.params.id}`).then(complex =>
      this.setState(complex)
    );
    console.log(this.props.match.params);
    console.trace();
  }

  render() {
    const { name, location = {}, images = [], statistics = {} } = this.state;
    const { propertiesCount } = statistics;

    return (
      <BodyClassName className="complex">
        <div>
          <ComplexTitle name={name} location={location} />
          <ImagesScroller images={images} />
          <Summary />
          <Features propertiesCount={propertiesCount} />
          <Description />
          <Infrastracture />
          <Offers />
          <Area />
          <Nearby />
        </div>
      </BodyClassName>
    );
  }
}

export default Show;
