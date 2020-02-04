import * as React from 'react';
import { shallow } from 'enzyme';
import ResultsBar from './ResultsBar';

describe('<ResultsBar />', () => {
  test('renders', () => {
    const wrapper = shallow(<ResultsBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
  