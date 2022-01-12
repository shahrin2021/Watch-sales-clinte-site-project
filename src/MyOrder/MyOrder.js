import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './MyOrder.css'

const MyOrder = ({order,handleDelete}) => {
    return (
        <Col lg={4} md={6} sm={12} className=' d-flex justify-content-center align-iteams-center p-3'>
           <Card style={{ maxWidth: '24rem',  }}>
                <Card.Img  style={{ height: '200px',  }}variant="top" src={order?.singleProduct?.image} />
                <Card.Body>
                    <Card.Title>{order?.singleProduct?.name}</Card.Title>
                    <Card.Text>Order id: {order?.singleProduct?._id}  </Card.Text>
                    <Card.Text>Email: {order?.email} </Card.Text>
                    <Card.Text>phone: {order?.phone} </Card.Text>
                    <Card.Text>Price: {order?.singleProduct?.price} </Card.Text>
                    <div className='d-flex justify-content-between'>
                    <Button variant="primary">Pay</Button>
                    <Button onClick={()=>handleDelete(order._id)} variant="danger">Cancle</Button>
                    </div>
                    
                   
                    
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MyOrder;