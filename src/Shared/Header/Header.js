import React from 'react';
import { Container, Nav, Navbar, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Components/Hooks/useAuth';
import useFirebase from '../../Components/Hooks/useFirebase';

const Header = () => {
  const {user , handleLogout,count,isLoading} = useAuth();
  console.log(count)

  if(isLoading){
    return  (<div  style={{height:'100vh'}}className='d-flex justify-content-center align-items-center'>
    <Spinner animation="border" variant="danger" />
    </div>);
    
}

    return (
        <div>
            <Navbar bg="light" expand="lg" className='fixed-top'>
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link}  to="/register">Register</Nav.Link>
        <Nav.Link as={Link}  to="/myOrder">My Order</Nav.Link>
        {/* <Nav.Link as={Link}  to="/MakeAdmin">Make Admin</Nav.Link> */}
        <Nav.Link as={Link}  to="/products">Products</Nav.Link>
       
      </Nav>
      {
        user.email && <Nav.Link as={Link}  to="/dashboard">Dashboard</Nav.Link>
      }
      {
        user.email && <h6>{user.displayName}</h6>
      }
      {
        user.email && <h6>{user.email}</h6>
      }

      {
        user.email ? <button onClick={handleLogout} className='btn btn-danger'>SingOut</button> :<Nav.Link as={Link}  to="/login">Login</Nav.Link>
      }

      
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;
