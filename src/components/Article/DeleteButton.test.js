//This file was begun using code from Link.react.test.js, from the Jest Testing React Apps Guide
//https://facebook.github.io/jest/docs/en/tutorial-react.html
import React from 'react';
import { DeleteButton } from './DeleteButton';
import renderer from 'react-test-renderer';

test('Tags module test', () => {
  const component = renderer.create(
	<DeleteButton>
	</DeleteButton>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});