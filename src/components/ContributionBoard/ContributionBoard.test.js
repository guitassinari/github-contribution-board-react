import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import ContributionBoard from './ContributionBoard';
import WeeklyContribution from '../WeeklyContribution/WeeklyContribution.js'
import { splitArrayIntoChunksOf } from '../../helpers/array'

describe('WeeklyContribution', () => {
  test('Matches snapshot', () => {
    const component = renderer.create(<WeeklyContribution />);
    const tree = component.toJSON()
  
    expect(tree).toMatchSnapshot();
  });

  describe('when it receives null contributions', () => {
    const contributions = null 

    test('Matches snapshot', () => {
      const component = renderer.create(<ContributionBoard contributions={contributions} />);
      const tree = component.toJSON()
    
      expect(tree).toMatchSnapshot();
    });

    test('renders no WeeklyContributions', () => {
      const wrapper = shallow(<ContributionBoard contributions={contributions} />);

      const renderedWeeklyContributions = wrapper.find(WeeklyContribution)
        
      expect(renderedWeeklyContributions.length).toEqual(0);
    })
  })

  describe('when receive empty contributions', () => {
    const contributions = [] 

    test('Matches snapshot', () => {
      const component = renderer.create(<ContributionBoard contributions={contributions} />);
      const tree = component.toJSON()
    
      expect(tree).toMatchSnapshot();
    });

    test('renders no WeeklyContributions', () => {
      const wrapper = shallow(<ContributionBoard contributions={contributions} />);

      const renderedWeeklyContributions = wrapper.find(WeeklyContribution)
        
      expect(renderedWeeklyContributions.length).toEqual(0);
    })
  })

  describe('when it receives contributions', () => {
    const contributions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    const weeklyContributions = splitArrayIntoChunksOf(7, contributions)

    test('Matches snapshot', () => {
      const component = renderer.create(<ContributionBoard contributions={contributions} />);
      const tree = component.toJSON()
    
      expect(tree).toMatchSnapshot();
    });

    test('renders weeks of contributions', () => {
      const wrapper = shallow(<ContributionBoard contributions={contributions} />);

      const renderedWeeklyContributions = wrapper.find(WeeklyContribution)
        
      expect(renderedWeeklyContributions.length).toEqual(weeklyContributions.length);

      renderedWeeklyContributions.forEach((weeklyContribution, index) => {
        expect(weeklyContribution.props().contributions).toEqual(weeklyContributions[index])
      })
    })
  })
})
