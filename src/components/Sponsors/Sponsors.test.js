//This file was begun using code from Link.react.test.js, from the Jest Testing React Apps Guide
//https://facebook.github.io/jest/docs/en/tutorial-react.html
import React from 'react';
import SponsorComponent from './SponsorComponent';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

test('Tags module test', () => {
  const component = renderer.create(
	<SponsorComponent children="thing1;thing2;thing3;thing4u">
	</SponsorComponent>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});