import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { App, mapStateToProps } from '../containers/App';
import { mockDefaultState } from './testMocks'
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
      const expected = false

      const mappedProps = mapStateToProps(mockDefaultState)
      expect(mappedProps.isLoading).toEqual(expected)
    })
  })
})