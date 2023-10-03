import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo-container">
      <a href="/">
        <img src="../planet.png" alt="logo" className="logo-img" />
        Space Travelers&apos; Hub
      </a>
      <ul className="nav-menu">
        <li className="nav-list">
          <NavLink className="nav-link" to="/">Rockets</NavLink>
        </li>
        <li className="nav-list">
          <NavLink className="nav-link" to="missions">Missions</NavLink>
        </li>
        <li className="nav-list">
          <NavLink className="nav-link" to="my-profile">My Profile</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
