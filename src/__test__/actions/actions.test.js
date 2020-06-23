import actions from '../../actions';
import ProductMock from '../../__mocks__/ProductMock';

describe('Actions', () => {
  test('It should addToCart action', () => {
    const payload = ProductMock;
    const expected = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(expected);
  });
});
