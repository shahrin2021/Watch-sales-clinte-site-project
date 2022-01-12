import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './services.css'
const Services = () => {
    return (
        <section className='service-area'>
            <Container>
                <Row>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <div className='service-item'>
                            <div className='service-icon'>
                                <i className="uil uil-car-sideview"></i>   
                            </div>
                            <div className='service-text'>
                                <h5>Free Delivery</h5>
                                <p>Free shipping over $100</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <div className='service-item'>
                            <div className='service-icon'>
                                <i className="uil uil-car-sideview"></i>   
                            </div>
                            <div className='service-text'>
                                <h5>Free Return</h5>
                                <p>Free return over $100</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <div className='service-item'>
                            <div className='service-icon'>
                                <i className="uil uil-car-sideview"></i>   
                            </div>
                            <div className='service-text'>
                                <h5>Customer Support</h5>
                                <p>Free shipping over $100</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <div className='service-item'>
                            <div className='service-icon'>
                                <i className="uil uil-car-sideview"></i>   
                            </div>
                            <div className='service-text'>
                                <h5>Money Back Guarantee</h5>
                                <p>Free shipping over $100</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Services;