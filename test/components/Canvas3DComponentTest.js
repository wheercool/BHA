/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import Canvas3DComponent from 'components//Canvas3DComponent.js';

describe('Canvas3DComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(Canvas3DComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('canvas3d-component');
  });
});
