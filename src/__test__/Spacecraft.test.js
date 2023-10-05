import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import { screen, render } from '@testing-library/react';
import Spacecraft from '../components/Rocket/Spacecraft';

const mockStore = configureMockStore([]);

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
});

it('Spacecraft renders correctly', () => {
  const mockSpace = () => {
    return (
      <Provider store={store}>
        <Spacecraft />
      </Provider>
    )
  };

  render(mockSpace());
  const list = screen.getAllByRole('listitem');
  expect(list.length).toBe(2);
});

it('render heading', () => {
  const mockSpace = () => {
    return (
      <Provider store={store}>
        <Spacecraft />
      </Provider>
    )
  };

  render(mockSpace());
  const heading = screen.getAllByRole('heading');
  expect(heading.length).toBe(2);
  expect(heading).toBeTruthy();
})