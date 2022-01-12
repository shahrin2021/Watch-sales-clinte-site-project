import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './HomeProduct.css'

const HomeProduct = ({homeProduct,handleLoveIt}) => {
 
    return (

            


        <Col>
            <Card style={{ width: '22rem', marginBottom:'30px' }}>
             
              
                <div className='image-box'>
                <Card.Img clsssName="card-img"  style={{height:'220px'}} variant="top" src={homeProduct.image}/>
            
                <div className='d-flex  align-items-center icon-box '>
                    <div onClick={handleLoveIt} className='cardIcon card-bg' >
                        <i className="uil uil-heart"></i>
                    </div>
                    <div className='cardIcon icon-bg'>
                        <i className="uil uil-shopping-cart-alt"></i>
                    </div>
                </div> 
                </div>
                <Card.Body>
                    <Card.Title>{homeProduct.name}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Link to ={`/product/${homeProduct._id}`}>
                    <Button  className='d-block mx-auto' variant="primary">Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default HomeProduct;