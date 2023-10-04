import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo-container">
      <div>
        <img src="../planet.png" alt="logo" className="logo-img" />
        <div className="logo-title">Space Travelers&apos; Hub</div>
      </div>
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
