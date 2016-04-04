'use strict';

describe('Wellbore', function () {
  var React = require('react/addons');
  var Wellbore, component;

  beforeEach(function () {
    Wellbore = require('components/Wellbore.js');
    component = React.createElement(Wellbore);
  });

  it('should create a new instance of Wellbore', function () {
    expect(component).toBeDefined();
  });
});
