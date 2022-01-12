import React, { useEffect, useState } from 'react';
import { Col, Container, Modal, Row, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useRef } from "react";
import './ProductsDetails.css'
import Button from '@restart/ui/esm/Button';
import { useForm } from "react-hook-form";
import useAuth from '../Hooks/useAuth';




const ProductDetails = () => {
    const {id} = useParams();
    const [products ,serProducts]=useState([])
    const {  reset } = useForm();
    const {user}= useAuth()

// SwiperCore.use([FreeMode,Navigation,Thumbs]);
    useEffect(()=>{
        fetch("http://localhost:5000/products")
        .then(res=> res.json())
        .then(data=>{
            serProducts(data)
        })
    },[id])

    const singleProduct= products.find(service=> service._id == id)
        
    const [smShow, setSmShow] = useState(false);
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{
   
    const confirmOrders = {
      name: data.name,
      email: data.email,
      phone:data.phone,
      address: data.address,
      singleProduct:singleProduct
    }
    console.log(confirmOrders)

    fetch('http://localhost:5000/orders',{
      method: 'POST',
      headers:{
          'content-type': 'application/json'
          
      }, body: JSON.stringify(confirmOrders)
    })
    .then(res=> res.json())
    .then(data=>{
      if(data?.insertedId){
        alert('booking success fully')
        setSmShow(false)
        reset()
      }
    })
    
  } 
  
   

      
    return (<div className='productsDetails'>
       <Container>
            <Row>
                <Col lg={6} md={6} sm={12} style={{display:"flex", justifyContent:'center'}}>
                
                    <div>
                        <div>
                            <img style={{maxWidth:'100%'}} src={singleProduct?.image}/>
                        </div>
                        
                    </div>
    
                </Col> 
                  
                <Col lg={6} md={6} sm={12} style={{display:'flex', justifyContent:'center' , alignItems:'center'}}>
                <div>
                    <div>
                        <h5>OverView</h5>
                        <p>{singleProduct?.detail}</p>
                        <h5>Brand :{singleProduct?.brand}</h5>
                        <h6>price: {singleProduct?.price}</h6>
                        <Button onClick={() => setSmShow(true)}>Confirm Order</Button>
                       
                    </div>
                  </div> 
                </Col>
            </Row>  
            <div className='product-description'>
   
            <h3 style={{color:'#4C3F91',textAlign:'center', fontSize:' 30px' ,margin:'30px 0'}}>Watch Spacification </h3>
            <Row>
              <Col lg={6} md={12} sm={12}>
            <Table striped bordered hover size="sm">
  
  <tbody>
    <tr>
    
      <td>Brand: </td>
      <td>{singleProduct?.brand}</td>
      <td>Color:</td>
      <td>{singleProduct?.color}</td>
     
    </tr>
    
    <tr>
      <td>Index:</td>
      <td>{singleProduct?.imdex}</td>
      <td>Shape</td>
      <td>{singleProduct?.imdex}</td>
    </tr>
    
  </tbody>
</Table>
</Col>
              <Col lg={6} md={12} sm={12}>
            <Table striped bordered hover size="sm">
  
  <tbody>
    
    
 
    <tr>
      <td>Gender:</td>
      <td>{singleProduct?.gender}</td>
      <td>watch resistance</td>
      <td>{singleProduct?.watchResistance}</td>
    </tr>
    <tr>
      <td>style:</td>
      <td>{singleProduct?.style}</td>
      <td>Material</td>
      <td>{singleProduct?.material}</td>
    </tr>
  </tbody>
</Table>
</Col>
</Row>
            </div>
       </Container>


       <Modal
          size="lg"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm" >
             Please confirm your order
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='text-center'>
          <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{maxWidth:"600px",margin:'0 auto',marginBottom:'30px'}}>
      <input style={{width:"100%"}} placeholder="test" {...register("name")} />
      </div>
      <div  style={{maxWidth:"600px",margin:'0 auto',marginBottom:'30px'}}>
      <input style={{width:"100%"}}  defaultValue={user.email} {...register("email")} />
      </div>
      <div  style={{maxWidth:"600px",margin:'0 auto',marginBottom:'30px'}}>
      <input style={{width:"100%"}}  placeholder="test" {...register("phone")} />
      </div>
      <div  style={{maxWidth:"600px" ,margin:'0 auto',marginBottom:'30px'}}>
    
      <input style={{width:"100%"}}  placeholder="test" {...register("address")} />
      </div>

          {errors.exampleRequired && <span>This field is required</span>}
      
      <Button type="submit" >Booking</Button>
    </form>
    </div>
          </Modal.Body>
        </Modal>

       </div>
    );
};

export default ProductDetails;