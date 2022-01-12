import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import useAuth from '../Hooks/useAuth';

const Login = () => {
    const [login , setLogin] = useState({})

    const {handleLoginWithEmailAndPassword,user,error,signInwithGoogle} = useAuth()
    const { register, handleSubmit } = useForm();


    const navigate = useNavigate();
    const location = useLocation();



    const onSubmit = data => {
        handleLoginWithEmailAndPassword(data.email, data.password,navigate, location)
        setLogin(data)
        console.log(data)
    }
  
  
    return (
        <div className='register-area'>
             <Container>
                <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-2'>  
                <input type='email' {...register("email", )} />
                </div> 
                <div  className='mb-2'>
                <input type='password' {...register("password", )} />
                </div>
                <button type="submit">Login</button>
                </form>
             
             <Button onClick={()=>signInwithGoogle(location,navigate)}>Signin with Google</Button>
                </div>
            </Container>
        </div>
    );
};

export default Login;