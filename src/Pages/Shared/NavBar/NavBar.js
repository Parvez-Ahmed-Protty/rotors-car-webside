import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { BiLogInCircle } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./NavBar.css";

const NavBar = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar expand="lg">
      <Container className="py-1">
        <Navbar.Brand href="/home">
          <img src="https://i.ibb.co/jk7mqrK/logo.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/explore">
              Explore
            </Nav.Link>
            <Nav.Link as={Link} to="/gellery">
              Ore Gellery
            </Nav.Link>
            {user?.email && (
              <Nav.Link as={Link} to="/dash">
                DashBord
              </Nav.Link>
            )}
          </Nav>
          {user?.email && (
            <h6 className="mt-2 me-3 text-danger">
              <span className="me-1">
                <FaRegUserCircle />
              </span>
              {user?.displayName}
            </h6>
          )}

          {user?.email ? (
            <Nav.Link onClick={logOut}>
              <Button variant="outline-danger">
                LOGOUT <BiLogInCircle />
              </Button>
            </Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/login">
              <Button variant="outline-danger">
                LOGIN <BiLogInCircle />
              </Button>
            </Nav.Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
