import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const NavBar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const toggle: () => void = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar navbar-dark bg-dark" light expand="md">
        <NavbarBrand href="/">address-centralizer</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <NavbarText>FirstName LastName</NavbarText>
            <NavItem>
              <NavLink>login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>register</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
