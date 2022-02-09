import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { logOut } from '../services/authService';

import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg">
        <Navbar.Brand className="NavTitle">
          <Link to="/">
            Help
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle className="toggle" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto links">
            <Link to="/">Home</Link>
            <Link to="/Favorites">Favorites</Link>
            <button onClick={logOut} className="logOutBtn">Sign Out</button>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;