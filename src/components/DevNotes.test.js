//This file was begun using code from Link.react.test.js, from the Jest Testing React Apps Guide
//https://facebook.github.io/jest/docs/en/tutorial-react.html
import React from 'react';
import DevNotes from './DevNotes';
import renderer from 'react-test-renderer';

test('Tags module test', () => {
  const component = renderer.create(
    	<DevNotes>
    	</DevNotes>
    );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});