import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Header, mapStateToProps } from '../containers/Header';
import { mockDefaultState, mockStories, mockFullState } from './testMocks'

describe('Header', () => {
  describe('Header Component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Header />)
    })

    it('matches the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })
  })

  describe('matchStateToProps', () => {
    it('should parse caughtError from state', () => {
      const expected1 = ''

      const mappedProps1 = mapStateToProps(mockDefaultState)
      expect(mappedProps1.caughtError).toEqual(expected1)

      const expected2 = 'Bad API key'
      const mappedProps2 = mapStateToProps(mockFullState)
      expect(mappedProps2.caughtError).toEqual(expected2)
    })

    it('should parse stories from state', () => {
      const expected1 = []

      const mappedProps1 = mapStateToProps(mockDefaultState)
      expect(mappedProps1.stories).toEqual(expected1)

      const expected2 = mockStories

      const mappedProps2 = mapStateToProps(mockFullState)
      expect(mappedProps2.stories).toEqual(expected2)
    })
  })
})