import React from 'react';
import Banner from './Banner';
import renderer from 'react-test-renderer';

test('Banner page appears', () => {
  const component = renderer.create(
  	<div>
    	<Banner></Banner>
    	<Banner token={false} appName="Collective Knowledge" declaration="What we're all about"/>
    	<Banner token={true} appName="Collective Knowledge" declaration="What we're all about"/>
  	</div>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});