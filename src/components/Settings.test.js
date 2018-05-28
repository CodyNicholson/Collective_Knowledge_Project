//This file was begun using code from Link.react.test.js, from the Jest Testing React Apps Guide
//https://facebook.github.io/jest/docs/en/tutorial-react.html
import React from 'react';
import { Settings } from './Settings';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';


test('Tags module test', () => {
  const component = renderer.create(
    <MemoryRouter>
    	<Settings>
    	</Settings>
    </MemoryRouter>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});