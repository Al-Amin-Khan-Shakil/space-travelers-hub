import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/NavBar/Navbar';

test('render navlink', async () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  const navlink = screen.getAllByRole('link');
  expect(navlink.length).toBe(3);
});
