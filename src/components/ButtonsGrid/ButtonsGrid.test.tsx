import * as React from 'react';
import { shallow } from 'enzyme';
import ButtonsGrid from './ButtonsGrid';

describe('<ButtonsGrid />', () => {
  test('renders', () => {
    const wrapper = shallow(<ButtonsGrid />);
    expect(wrapper).toMatchSnapshot();
  });
});
  