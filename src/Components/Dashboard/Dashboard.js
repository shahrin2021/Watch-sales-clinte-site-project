import React, { useState }  from 'react';
import { Button, Container,  Offcanvas } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (<div>
    <div style={{margin:'80px 0 30px 0'}} >
      <Container>
      <Button variant="primary" onClick={handleShow}>
      <i className="uil uil-align-right"></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Link to='/dashboard/makeadmin'>Make Admin</Link>
          <Link to='/dashboard/myorder'>MY Order</Link>
          <Link to='/dashboard/Getreview'>Review us</Link>
          
        </Offcanvas.Body>
      </Offcanvas>




      </Container>
      </div>
      
<Outlet></Outlet>
</div> 
    );
};

export default Dashboard;