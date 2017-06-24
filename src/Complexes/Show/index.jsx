import React from 'react';

import BodyClassName from 'react-body-classname';

import ComplexTitle from './ComplexTitle';
import ImagesScroller from './ImagesScroller';
import Summary from './Summary';
import Features from './Features';
import Description from './Description';
import Infrastracture from './Infrastracture';
import Offers from './Offers';

export default () =>
  <BodyClassName className="complex">
    <div>
      <ComplexTitle />
      <ImagesScroller />
      <Summary />
      <Features />
      <Description />
      <Infrastracture />
      <Offers />
    </div>
  </BodyClassName>;
