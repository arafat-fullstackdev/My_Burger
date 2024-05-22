import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavItem, NavLink, Navbar, NavbarBrand,Nav} from 'reactstrap';
import Logo from '../../image/logo.png';

const Nabvar = () => {
  return (
    <div className='Navigation'>
  <Navbar
    style={{
        backgroundColor:"#F79227",
        height:"70px",
    }}
  >
    <NavbarBrand href="/" className='mr-auto ml-md-5 Brand'>
      <img
        alt="logo"
        src={Logo}
        style={{
          height: 50,
          width: 80,
        }}
      />
      </NavbarBrand>
      <Nav className='mr-md-5'>
        <NavItem>
            <NavLink href='#' className='NavLink'>Some</NavLink>
        </NavItem>
      </Nav>
    
  </Navbar>
    </div>
  )
}

export default Nabvar;