import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Card } from '../containers/Card';

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})