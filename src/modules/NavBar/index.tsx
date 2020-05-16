import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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
import { User } from '../../store/types/User';

const NavBar = (): JSX.Element => {
  const user: User = useSelector(state => state.userReducer);
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const toggle: () => void = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar navbar-dark bg-dark" light expand="md">
        <NavbarBrand href="/">address-centralizer</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <NavbarText>{`${user.firstName} ${user.lastName}`}</NavbarText>
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
