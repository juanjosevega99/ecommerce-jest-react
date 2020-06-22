import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('', () => {
  test('It should render of component footer', () => {
    const footer = mount(<Footer />);
    expect(footer.length).toEqual(1);
  });
});
