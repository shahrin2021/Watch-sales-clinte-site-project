import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router';
import useAuth from '../Hooks/useAuth';
import useFirebase from '../Hooks/useFirebase';
import './Register.css'

 
const Register = () => {
const {registerUserWithGmailAndPassword,user,error} = useAuth()
const [registerData, setRegisterData ] = useState({});

const navigate = useNavigate();
   


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setRegisterData(data);
        registerUserWithGmailAndPassword(registerData.email,registerData.password,registerData.name ,navigate)
        
        console.log(registerData.name);
    }
  
   
    return (
        <div className="register-area">
            <Container >
                <div style={{border:'1px solid #ddd',maxWidth:'600px', margin:'0 auto',padding:'50px'}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div >
                    <input className='w-75 mb-3' type='text'{...register("name", )} placeholder='Your Name'/>
                    </div>
                    <div >
                    <input className='w-75 mb-3' type='email' {...register("email", )} placeholder='Your Email'/>
                    </div>
                    <div >
                    <input className='w-75 mb-3' type="password" {...register("password", )} placeholder='Enter a Password '/>
                    </div>
                    <button type='submit'>Register</button>
                </form>


                {
                    error && <div>{error}</div>
                }
                </div>
            </Container>
        </div>
    );
};

export default Register;