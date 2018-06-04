//This file was begun using code from Link.react.test.js, from the Jest Testing React Apps Guide
//https://facebook.github.io/jest/docs/en/tutorial-react.html
import React from 'react';
import { ListPagination } from './ListPagination';
import renderer from 'react-test-renderer';

test('ListPagination component test', () => {
  const component = renderer.create(
	<ListPagination
        articlesCount={100}
        currentPage={3}>
	</ListPagination>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});