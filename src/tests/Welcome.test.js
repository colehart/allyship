import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Welcome } from '../containers/Welcome';

describe('Welcome', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Welcome />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})