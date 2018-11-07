import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { CardContainer, mapStateToProps } from '../containers/CardContainer';
import { mockStories, mockDefaultState, mockFullState } from './testMocks'

describe('CardContainer', () => {
  describe('CardContainer component', () => {
    let wrapper;
    let mockLocation;
    let mockHistory;

    beforeEach(() => {
      mockLocation = {
        pathname: '/immigration',
      }

      mockHistory = {
        goBack: jest.fn()
      }

      wrapper = shallow(<CardContainer
                          isLoading={false}
                          stories={mockStories}
                          location={mockLocation}
                          history={mockHistory}
                        />)
    })

    it('matches the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })

    it('should render the Loader if isLoading(true)', () => {
      wrapper = shallow(<CardContainer
                          isLoading={true}
                          stories={mockStories}
                          location={mockLocation}
                          history={mockHistory}
                        />)

      expect(wrapper).toMatchSnapshot()
    })

    it('matches the snapshot if location is /saved', () => {
      mockLocation = {
        pathname: '/saved',
      }

      wrapper = shallow(<CardContainer
                          isLoading={false}
                          stories={mockStories}
                          location={mockLocation}
                          history={mockHistory}
                        />)

      expect(wrapper).toMatchSnapshot();
    })

    it('calls history.goBack if back button is clicked', () => {
      mockLocation = {
        pathname: '/saved',
      }

      wrapper = shallow(<CardContainer
                          isLoading={false}
                          stories={mockStories}
                          location={mockLocation}
                          history={mockHistory}
                        />)

      wrapper.find('.cc-back-btn').simulate('click')


      expect(mockHistory.goBack).toHaveBeenCalled()
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