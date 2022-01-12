import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './MakeAdmin.css'

const MakeAdmin = () => {
    const [success, setSuccess] = useState(false);
    const [smShow, setSmShow] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        const user = {email: data.email};
        console.log(data.email)
        fetch(' http://localhost:5000/users/admin',{
            method:'PUT',
            headers:{
                
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        }).then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount ){
                setSuccess(true)
                
            }
            
            console.log(data)
        })

        
        


    };

   

    return ( <div className='adminForm-area'>
        <div  className='adminForm'>
            <form className='w-100' onSubmit={handleSubmit(onSubmit)}>
      
      <input type='email' style={{maxWidth:'300px'}} placeholder='Enter a Email'   {...register("email", { required: true })} />
      
      {errors.exampleRequired && <span>This field is required</span>}
      
      <button onClick={()=> setSmShow(true)} className='d-block mx-auto mt-3 btn btn-danger' type="submit" >Make Admin</button>
    </form>
        </div>


        {
            success &&  (<Modal
            size="sm"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>Admin added successfully</Modal.Body>
          </Modal>)
        }
        </div>
    );
};

export default MakeAdmin;