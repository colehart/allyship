import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Header } from '../containers/Header';

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})