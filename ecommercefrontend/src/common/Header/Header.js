import React from 'react';
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import FlipzonLogo from '../../assets/images/FlipzonLogo.png';
import './Header.css';

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={FlipzonLogo} width="200px" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-between">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{ width: '500px' }}
              />
              <button>Search</button>
            </Form>
            <Navbar.Text>
              <Nav.Link to={''}>
                <button>Login</button>
              </Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
