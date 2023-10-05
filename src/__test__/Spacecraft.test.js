import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
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
      },
    ],
  },
});

it('Spacecraft renders correctly', () => {
  const mockSpace = () => (
    <Provider store={store}>
      <Spacecraft />
    </Provider>
  );

  render(mockSpace());
  const list = screen.getAllByRole('listitem');
  expect(list.length).toBe(2);
});

it('render heading', () => {
  const mockSpace = () => (
    <Provider store={store}>
      <Spacecraft />
    </Provider>
  );

  render(mockSpace());
  const heading = screen.getAllByRole('heading');
  expect(heading.length).toBe(2);
  expect(heading).toBeTruthy();
});


it('test list elements', () => {
  const mockSpace = () => (
    <Provider store={store}>
      <Spacecraft />
    </Provider>
  );

  render(mockSpace());
  const title = screen.getByText('name 1');
  const title2 = screen.getByText('name 2');
  const description = screen.getByText('description 1');
  const description2 = screen.getByText('description 2');

  expect(title).toBeTruthy();
  expect(title2).toBeTruthy();
  expect(description).toBeTruthy();
  expect(description2).toBeTruthy();
});
