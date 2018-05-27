//This file was begun using code from Link.react.test.js, from the Jest Testing React Apps Guide
//https://facebook.github.io/jest/docs/en/tutorial-react.html
import React from 'react';
import ArticleMeta from './ArticleMeta';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { ArticleActions } from './ArticleActions';

var authorData = {username:"mikey", image:null};
var articleData = {author: authorData, createdAt: new Date(1997, 6, 24, 14, 39, 7)}

test('Tags module test', () => {
  const component = renderer.create(
    <MemoryRouter>
	    <ArticleActions>
	    	<ArticleMeta
	              article={articleData}
	              canModify={false}> </ArticleMeta>
	    </ArticleActions>
    </MemoryRouter>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});