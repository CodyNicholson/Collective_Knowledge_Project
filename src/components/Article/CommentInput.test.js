//This file was begun using code from Link.react.test.js, from the Jest Testing React Apps Guide
//https://facebook.github.io/jest/docs/en/tutorial-react.html
import React from 'react';
import { CommentInput } from './CommentInput';
import renderer from 'react-test-renderer';

var user = {image: null, username: "john"}

test('Comment Input component test', () => {
  const component = renderer.create(
	   <CommentInput currentUser={user}>
	   </CommentInput>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  //console.log(JSON.stringify(tree, null, 2));


//create input for textarea
//is setBody() called?

//  let tree = component.toJSON();
 // expect(tree).toMatchSnapshot();

//simulate submit

//create mock create comment


});