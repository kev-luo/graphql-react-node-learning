import { Link, NavLink } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
  return (

    <Navbar bg="dark" className="mb-5">
      <Navbar.Brand>Kevin Luo</Navbar.Brand>  
      <Nav className="justify-content-end">
        <Nav.Link><Link to="/">Home</Link></Nav.Link>
        <Nav.Link><Link to="/portfolio">Portfolio</Link></Nav.Link>
        <Nav.Link><NavLink to="/contact">Contact</NavLink></Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavigationBar;