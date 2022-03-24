import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <div>

<Navbar bg="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"><img src={'https://www.themealdb.com/images/logo-small.png'} alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto me-3 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link className=' fw-bold text-w-50 text-white
        ' href="#action2">Recipes</Nav.Link>
        <Nav.Link className=' fw-bold text-w-50 text-white
        ' href="#action2">Food</Nav.Link>
        <Nav.Link className=' fw-bold text-w-50 text-white
        ' href="#action1">Home</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default Header;