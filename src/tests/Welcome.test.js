import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Welcome, mapStateToProps, mapDispatchToProps } from '../containers/Welcome';
import { mockDefaultState, mockFullState, mockUrl } from './testMocks'

describe('Welcome', () => {
  describe('Welcome Component', () => {
    let wrapper;
    let mockFetchStories;

    beforeEach(() => {
      mockFetchStories = jest.fn()
      wrapper = shallow(
        <Welcome isLoading={false} fetchStories={mockFetchStories} />
      )
    })

    it('matches the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })

    it('should render the Loader if isLoading(true)', () => {
      wrapper = shallow(
        <Welcome isLoading={true} fetchStories={mockFetchStories} />
      )

      expect(wrapper).toMatchSnapshot()
    })

    it('should call handleClick when buttons are clicked', () => {

      wrapper.find('.w-transgender').simulate('click')

      expect(mockFetchStories).toHaveBeenCalled()

      wrapper.find('.w-immigration').simulate('click')

      expect(mockFetchStories).toHaveBeenCalled()

      wrapper.find('.w-black-lives-matter').simulate('click')

      expect(mockFetchStories).toHaveBeenCalled()
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

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the fetchStories thunk', () => {
      const mockDispatch = jest.fn()

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchStories(mockUrl)

      expect(mockDispatch).toHaveBeenCalled()
    })
  })
})