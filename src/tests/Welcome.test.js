import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Welcome, mapStateToProps } from '../containers/Welcome';
import { mockDefaultState, mockFullState } from './testMocks'

describe('Welcome', () => {
  describe('Welcome Component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Welcome isLoading={false}/>)
    })

    it('matches the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })

    it('should render the Loader if isLoading(true)', () => {
      wrapper = shallow(<Welcome isLoading={true} />)

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