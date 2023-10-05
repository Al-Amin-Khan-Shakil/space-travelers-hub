import { screen, render } from "@testing-library/react";
import Navbar from "../components/NavBar/Navbar"
import { BrowserRouter } from "react-router-dom";

test('render navlink', async () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const navlink = screen.getAllByRole('link');
  expect(navlink.length).toBe(3);
})