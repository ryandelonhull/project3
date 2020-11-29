import React from 'react';

const NavBar = () => {
    return (
        <div>
            <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">PROJECT X</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#login">Login</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  
</>
            
        </div>
    );
}

export default NavBar;
