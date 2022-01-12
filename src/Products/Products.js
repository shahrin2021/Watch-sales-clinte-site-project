import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../Components/Hooks/useAuth';
import Product from '../Product/Product';

const Products = () => {
    const {products} = useAuth()
    return (
        <Container>
            <Row>
                {
                    products.map(product=><Product
                        product={product}
                        key = {product._id}
                    />)
                }
            </Row>
        </Container>
    );
};

export default Products;