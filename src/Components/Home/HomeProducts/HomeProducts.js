import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useFirebase from '../../Hooks/useFirebase';
import HomeProduct from '../HomeProduct/HomeProduct';

const HomeProducts = () => {

    const {products,}=useFirebase();
    const homeProducts = products.slice(0,6)

    const [count , setCount] =useState(0)
   
    return (
        <Container>
            <p>{count}</p>
            <Row>
                {
                    homeProducts.map(homeProduct=><HomeProduct
                    
                        homeProduct={homeProduct}
                        key = {homeProduct._id}
                     
                    />)
                }
            </Row>
        </Container>
    );
};

export default HomeProducts;