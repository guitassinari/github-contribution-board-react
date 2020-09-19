import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import WeeklyContribution from './WeeklyContribution';
import DailyContribution from '../DailyContribution/DailyContribution.js'

describe('WeeklyContribution', () => {
  test('Matches snapshot', () => {
    const component = renderer.create(<WeeklyContribution />);
    const tree = component.toJSON()
  
    expect(tree).toMatchSnapshot();
  });

  describe('when it receives null contributions', () => {
    const contributions = null 

    test('Matches snapshot', () => {
      const component = renderer.create(<WeeklyContribution contributions={contributions} />);
      const tree = component.toJSON()
    
      expect(tree).toMatchSnapshot();
    });

    test('renders no Daily Contributions', () => {
      const wrapper = shallow(<WeeklyContribution contributions={contributions} />);

      const renderedDailyContributions = wrapper.find(DailyContribution)
        
      expect(renderedDailyContributions.length).toEqual(0);
    })
  })

  describe('when it receives less than 7 contributions', () => {
    const contributions = [1, 2, 3, 4]

    test('Matches snapshot', () => {
      const component = renderer.create(<WeeklyContribution contributions={contributions} />);
      const tree = component.toJSON()
    
      expect(tree).toMatchSnapshot();
    });

    test('renders only the received contributions', () => {
      const wrapper = shallow(<WeeklyContribution contributions={contributions} />);

      const renderedDailyContributions = wrapper.find(DailyContribution)
        
      expect(renderedDailyContributions.length).toEqual(contributions.length);

      renderedDailyContributions.forEach((dailyContribution, index) => {
        expect(dailyContribution.props().count).toEqual(contributions[index])
      })
    })
  })

  describe('when it receives more than 7 contributions', () => {
    const contributions = [1, 2, 3, 4, 6, 7, 8, 9]

    test('Matches snapshot', () => {
      const component = renderer.create(<WeeklyContribution contributions={contributions} />);
      const tree = component.toJSON()
    
      expect(tree).toMatchSnapshot();
    });

    test('renders only the first seven contributions', () => {
      const wrapper = shallow(<WeeklyContribution contributions={contributions} />);

      const renderedDailyContributions = wrapper.find(DailyContribution)
        
      expect(renderedDailyContributions.length).toEqual(7);

      renderedDailyContributions.forEach((dailyContribution, index) => {
        expect(dailyContribution.props().count).toEqual(contributions[index])
      })
    })
  })
})
