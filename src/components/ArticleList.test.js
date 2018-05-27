//This file was begun using code from Link.react.test.js, from the Jest Testing React Apps Guide
//https://facebook.github.io/jest/docs/en/tutorial-react.html
import React from 'react';
import ArticleList from './ArticleList';
import renderer from 'react-test-renderer';

test('ArticleList component test', () => {
  const component = renderer.create(
	<ArticleList>
	</ArticleList>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});