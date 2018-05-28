//This file was begun using code from Link.react.test.js, from the Jest Testing React Apps Guide
//https://facebook.github.io/jest/docs/en/tutorial-react.html
import React from 'react';
import { Editor } from './Editor';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

var paramsData= {slug:null};
var matchData= {params: paramsData};
var count = 0;
function onLoadF() {count++;};

test('Tags module test', () => {
  const component = renderer.create(
    <MemoryRouter>
    	<Editor match={matchData} onLoad={onLoadF}>
    	</Editor>
    </MemoryRouter>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(count).toBe(1);
});