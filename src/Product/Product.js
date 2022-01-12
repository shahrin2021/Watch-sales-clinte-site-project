import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    return (
        <Col>
            <Card style={{ width: '22rem', marginBottom:'30px' }}>
             
              
             <div className='image-box'>
             <Card.Img clsssName="card-img"  style={{height:'220px'}} variant="top" src={product.image}/>
         
             <div className='d-flex  align-items-center icon-box '>
                 <div  className='cardIcon card-bg' >
                     <i className="uil uil-heart"></i>
                 </div>
                 <div className='cardIcon icon-bg'>
                     <i className="uil uil-shopping-cart-alt"></i>
                 </div>
             </div> 
             </div>
             <Card.Body>
                 <Card.Title>{product.name}</Card.Title>
                 <h6>Price : {product.price}</h6>
                 <Card.Text>

                 </Card.Text>
                 <Link to ={`/product/${product._id}`}>
                    <Button  className='d-block mx-auto' variant="primary">Details</Button>
                    </Link>
                
             </Card.Body>
         </Card>
        </Col>
    );
};

export default Product;