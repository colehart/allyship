import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { CardContainer } from '../containers/CardContainer';

describe('CardContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CardContainer />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})