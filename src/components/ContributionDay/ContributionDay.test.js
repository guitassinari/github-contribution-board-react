import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import ContributionDay from './ContributionDay';
import Square from '../Square/Square.js'

describe('Contribution day', () => {
  test('Matches snapshot', () => {
    const component = renderer.create(<ContributionDay />);
    const tree = component.toJSON()
  
    expect(tree).toMatchSnapshot();
  });

  describe('When receives contributionCount prop', () => {
    describe('and it is 0 (no contribution)', () => {
      test('it matches snapshot', () => {
        const component = renderer.create(<ContributionDay contributionCount={0} />);
        const tree = component.toJSON()
      
        expect(tree).toMatchSnapshot();
      })

      test('it renders Square with correct background color', () => {
        const wrapper = shallow(<ContributionDay contributionCount={0} />);
        
        expect(wrapper.find(Square).props().backgroundColor).to.eq("#EBEDF0");
      })
    })

    describe('and it is between 1 and 2 (low contribution)', () => {
      test('it matches snapshot', () => {
        const component = renderer.create(<ContributionDay contributionCount={1} />);
        const tree = component.toJSON()
      
        expect(tree).toMatchSnapshot();
      })

      test('it renders Square with correct background color', () => {
        const wrapper = shallow(<ContributionDay contributionCount={0} />);
        
        expect(wrapper.find(Square).props().backgroundColor).to.eq("#9BE9A8");
      })
    })

    describe('and it is between 3 and 5 (medium contribution)', () => {
      test('it matches snapshot', () => {
        const component = renderer.create(<ContributionDay contributionCount={0} />);
        const tree = component.toJSON()
      
        expect(tree).toMatchSnapshot();
      })

      test('it renders Square with correct background color', () => {
        const wrapper = shallow(<ContributionDay contributionCount={0} />);
        
        expect(wrapper.find(Square).props().backgroundColor).to.eq("#40C463");
      })
    })

    describe('and it is between 6 and 8 (high contribution)', () => {
      test('it matches snapshot', () => {
        const component = renderer.create(<ContributionDay contributionCount={0} />);
        const tree = component.toJSON()
      
        expect(tree).toMatchSnapshot();
      })

      test('it renders Square with correct background color', () => {
        const wrapper = shallow(<ContributionDay contributionCount={0} />);
        
        expect(wrapper.find(Square).props().backgroundColor).to.eq("#30A14E");
      })
    })

    describe('and it is higher than 8 (lots of contributions)', () => {
      test('it matches snapshot', () => {
        const component = renderer.create(<ContributionDay contributionCount={0} />);
        const tree = component.toJSON()
      
        expect(tree).toMatchSnapshot();
      })

      test('it renders Square with correct background color', () => {
        const wrapper = shallow(<ContributionDay contributionCount={0} />);
        
        expect(wrapper.find(Square).props().backgroundColor).to.eq("#9BE9A8");
      })
    })
  })
})
