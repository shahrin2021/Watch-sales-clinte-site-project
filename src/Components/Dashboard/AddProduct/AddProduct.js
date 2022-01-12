import React, { useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddProduct.css'
const AddProduct = (props) => {
    const [show, setShow] = useState(false);

    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [brand, setBrand] = useState('');
    const [gender, setGender] = useState('');
    const [image, setImage] = useState(null);
    const [imdex, setImdex] = useState('');
    const [material, setMaterial] = useState('');
    const [color,setColor ] = useState('');
    const [diameter,setDiameter] = useState('');
    const [detail,setDetail ] = useState('');
    const [shape,setShape ] = useState('');

    // const [success, setSuccess] = useState(false)


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  const handleOnSubmit = (e) => {
    
 const formData = new FormData();

    formData.append('id', id);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('brand', brand);
    formData.append('gender', gender);
    formData.append('imdex', imdex);
    formData.append('material', material);
    formData.append('color', color);
    formData.append('image', image);
    formData.append('diameter', diameter);
    formData.append('shape', shape);
    formData.append('detail', detail);

    fetch('http://localhost:5000/products',{
      method: 'POST',
      body: formData
    })
    .then(res=> res.json())
    .then(data=> {
      if(data.insertedId){
        alert('product has been added')
      }
      
     
    })


   
    console.log(formData)
    e.preventDefault()
  };


    return (<div>
        <div className='addProductsArea'>
            <Container>
                <div>
                <button variant="primary" onClick={handleShow}>Add a  Products</button>

        
                </div>

               


            </Container>
        </div>
  
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Products </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='productForm'> 
        <form onSubmit={handleOnSubmit}>
        <label htmlFor="">Id:</label>
        <div className='w-100'>
        <input className='w-100' placeholder='id'onChange={e=>setId(e.target.value)} />
        </div>

        <label htmlFor="">Name : </label>
        <div className='w-100'>
        <input className='w-100' placeholder='Name'  onChange={e=>setName(e.target.value)} />
        </div>

        <label htmlFor="">Price : </label>
        <div className='w-100'>
        <input className='w-100'  placeholder='Price' onChange={e=>setPrice(e.target.value)} />
        </div>

        <label htmlFor="">Brand : </label>
        <div className='w-100'>
        <input className='w-100' placeholder='Brand' onChange={e=>setBrand(e.target.value)} />
        </div>

        <label  htmlFor="">Gender : </label>
      <div className='w-100'>
      <input className='w-100' onChange={e=>setGender(e.target.value)} />
      </div>

        <label htmlFor="">Index : </label>
      <div className='w-100'>
      <input className='w-100' onChange={e=>setImdex(e.target.value)} />
      </div >

        <label htmlFor="">Material</label>
      <div className='w-100'>
      <input className='w-100'   onChange={e=>setMaterial(e.target.value)} />
      </div>

        <label htmlFor="">Color:</label>
      <div className='w-100'>
      <input className='w-100'onChange={e=>setColor(e.target.value)} />
      </div >
        <label htmlFor="">Shape:</label>
      <div className='w-100'>
      <input className='w-100' onChange={e=>setShape(e.target.value)} />
      </div>
        <label htmlFor="">Diameter:</label>
      <div className='w-100'>
      <input className='w-100' onChange={e=>setDiameter(e.target.value)} />
      </div>
        <label htmlFor="">Image:</label>
      <div className='w-100'>
      <input className='w-100'  type='file' accept="image/*"  onChange={e=>setImage(e.target.files[0])}/>
      </div>

        <label htmlFor="">Details:</label>
      <div className='w-100'>
            <textarea className='w-100' name="" id="" cols="30" rows="10" onChange={e=>setDetail(e.target.value)}></textarea>
      </div>
  
      
      <button type="submit">submit</button>
    </form>
        </div>
        </Modal.Body>
        
      </Modal>
       
        </div>
    );
};

export default AddProduct;