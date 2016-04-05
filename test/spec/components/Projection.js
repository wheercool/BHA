'use strict';

describe('Projection', function () {
  var React = require('react/addons');
  var Projection, component;

  beforeEach(function () {
    Projection = require('components/Projection.js');
    component = React.createElement(Projection);
  });

  it('should create a new instance of Projection', function () {
    expect(component).toBeDefined();
  });
});
