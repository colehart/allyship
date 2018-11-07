import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { CardContainer, mapStateToProps } from '../containers/CardContainer';
import { mockStories, mockDefaultState, mockFullState } from './testMocks'

describe('CardContainer', () => {
  describe('CardContainer component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<CardContainer isLoading={false} stories={mockStories}/>)
    })

    it('matches the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })

    it('should render the Loader if isLoading(true)', () => {
      wrapper = shallow(<CardContainer isLoading={true} stories={mockStories}/>)

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('mapStateToProps', () => {
    it('should parse isLoading from state', () => {
      const expected1 = false

      const mappedProps1 = mapStateToProps(mockDefaultState)
      expect(mappedProps1.isLoading).toEqual(expected1)

      const expected2 = true

      const mappedProps2 = mapStateToProps(mockFullState)
      expect(mappedProps2.isLoading).toEqual(expected2)
    })
  })
})