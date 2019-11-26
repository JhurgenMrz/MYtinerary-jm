import React from 'react';
import Adapter from 'enzyme-adapter-react-16'
import { shallow, mount, render,configure } from 'enzyme';

import {Activities} from '../components/Activities/index';

configure({adapter: new Adapter()})
describe('A suite', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<Activities />).contains(<img  />)).toBe(true);
    // <img className="nav-img" src={nav} alt='Activities' />
  });
});