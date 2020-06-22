import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('', () => {
  const footer = mount(<Footer />);

  test('It should render of component footer', () => {
    expect(footer.length).toEqual(1);
  });
  test('It should render of title', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});
