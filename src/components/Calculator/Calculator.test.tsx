import * as React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';

describe('<Calculator />', () => {
  test('renders', () => {
    const wrapper = shallow(<Calculator />);
    expect(wrapper).toMatchSnapshot();
  });
});
  