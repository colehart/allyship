import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Card, mapStateToProps } from '../containers/Card';
import { mockDefaultState, mockFullState, mockStories } from './testMocks';

describe('Card', () => {
  describe('Card Component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Card { ...mockStories[0] } />)
    })

    it('matches the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })
  })

  // describe('mapDispatchToProps', () => {
  //   it('should call dispatch with the toggleSaved action', () => {
  //     const mockDispatch = jest.fn()

  //     const mappedProps = mapDispatchToProps(mockDispatch)
  //     mappedProps.toggleSaved()

  //     expect(mockDispatch).toHaveBeenCalled()
  //   })
  // })
})