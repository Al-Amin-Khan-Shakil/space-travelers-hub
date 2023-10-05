import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import Missions from '../components/Mission/Missions';
import { joinMission } from '../redux/missions/missionsSlice';

const mockStore = configureStore([]);
const store = mockStore({
  missions: {
    missionData: [
      {
        mission_id: 1, mission_name: 'Mission 1', description: 'Description 1', reserved: false,
      },
      {
        mission_id: 2, mission_name: 'Mission 2', description: 'Description 2', reserved: true,
      },
    ],
  },
});

it('Mission component renders without error', () => {
  render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );
});

it('Clicking "Join Mission" button dispatches joinMission action', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );

  const joinButton = getByText('Join Mission');
  fireEvent.click(joinButton);

  expect(store.getActions()).toContainEqual(joinMission(1));
});

it('Missions component renders missions correctly', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );

  expect(getByText('Mission 1')).toBeInTheDocument();
  expect(getByText('Description 1')).toBeInTheDocument();
  expect(getByText('Mission 2')).toBeInTheDocument();
  expect(getByText('Description 2')).toBeInTheDocument();
});
