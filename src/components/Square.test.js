import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer'
import Square from './Square';

describe('Square', () => {
  test('Matches snapshot', () => {
    const component = renderer.create(<Square />);
    const tree = component.toJSON()
  
    expect(tree).toMatchSnapshot();
  });

  describe('When receives backgroundColor prop', () => {
    test('Matches snapshot', () => {
      const component = renderer.create(<Square backgroundColor="#000000" />);
      const tree = component.toJSON()
    
      expect(tree).toMatchSnapshot();
    })
  })
})
