import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const NavBar = () => { 
  return (
    <nav className='position-relative'>
      <Nav className='me-auto bg-primary text-white rounded justify-content-end'>
        <Nav.Link as={NavLink} to='/' className='navar-band text-white position-absolute start-0 '>Blog.app</Nav.Link>
        <Nav.Link as={NavLink} to='/' className='text-white'>Home</Nav.Link>
        <Nav.Link as={NavLink} to='/about' className='text-white'>About</Nav.Link>
      </Nav>


    </nav>
  )
};
export default NavBar;