import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { App, mapStateToProps } from '../containers/App';
import { mockDefaultState, mockFullState } from './testMocks'
describe('App', () => {
  describe('App Component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<App/>)
    })

    it('matches the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })
  })

  describe('matchStateToProps', () => {
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