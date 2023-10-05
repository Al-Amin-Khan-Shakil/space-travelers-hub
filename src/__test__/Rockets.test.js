import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { screen, render } from '@testing-library/react';
import Rockets from '../components/Rocket/Rockets';

const mockStore = configureMockStore([]);



it('rockets renders correctly', () => {
  const store = mockStore({
    rockets: {
      rockets: [
        {
          id: '1',
          name: 'name 1',
          description: 'description 1',
          flickr_images: 'flickr_images[0]',
          reserved: false,
        },
        {
          id: '2',
          name: 'name 2',
          description: 'description 2',
          flickr_images: 'flickr_images[1]',
          reserved: false,
        }
      ]
    }
  })

  render(
    <Provider store={store}>
      <Rockets />
    </Provider>
  );
  const ulList = screen.getByRole('list');
  expect(ulList).toBeTruthy();
});