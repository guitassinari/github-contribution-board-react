import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import ContributionDay from './DailyContribution';
import Square from '../Square/Square.js'

describe('Contribution day', () => {
  test('Matches snapshot', () => {
    const component = renderer.create(<ContributionDay />);
    const tree = component.toJSON()
  
    expect(tree).toMatchSnapshot();
  });

  describe('When receives count prop', () => {
    describe('and it is 0 (no contribution)', () => {
      test('it matches snapshot', () => {
        const component = renderer.create(<ContributionDay count={0} />);
        const tree = component.toJSON()
      
        expect(tree).toMatchSnapshot();
      })

      test('it renders Square with correct background color', () => {
        const wrapper = shallow(<ContributionDay count={0} />);
        
        expect(wrapper.find(Square).props().backgroundColor).toEqual("#EBEDF0");
      })
    })

    describe('and it is between 1 and 2 (low contribution)', () => {
      test('it matches snapshot', () => {
        const component = renderer.create(<ContributionDay count={1} />);
        const tree = component.toJSON()
      
        expect(tree).toMatchSnapshot();
      })

      test('it renders Square with correct background color', () => {
        const wrapper = shallow(<ContributionDay count={1} />);
        
        expect(wrapper.find(Square).props().backgroundColor).toEqual("#9BE9A8");
      })
    })

    describe('and it is between 3 and 5 (medium contribution)', () => {
      test('it matches snapshot', () => {
        const component = renderer.create(<ContributionDay count={3} />);
        const tree = component.toJSON()
      
        expect(tree).toMatchSnapshot();
      })

      test('it renders Square with correct background color', () => {
        const wrapper = shallow(<ContributionDay count={3} />);
        
        expect(wrapper.find(Square).props().backgroundColor).toEqual("#40C463");
      })
    })

    describe('and it is between 6 and 8 (high contribution)', () => {
      test('it matches snapshot', () => {
        const component = renderer.create(<ContributionDay count={6} />);
        const tree = component.toJSON()
      
        expect(tree).toMatchSnapshot();
      })

      test('it renders Square with correct background color', () => {
        const wrapper = shallow(<ContributionDay count={6} />);
        
        expect(wrapper.find(Square).props().backgroundColor).toEqual("#30A14E");
      })
    })

    describe('and it is higher than 8 (lots of contributions)', () => {
      test('it matches snapshot', () => {
        const component = renderer.create(<ContributionDay count={9} />);
        const tree = component.toJSON()
      
        expect(tree).toMatchSnapshot();
      })

      test('it renders Square with correct background color', () => {
        const wrapper = shallow(<ContributionDay count={9} />);
        
        expect(wrapper.find(Square).props().backgroundColor).toEqual("#216E39");
      })
    })
  })
})
