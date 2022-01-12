import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, Route, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user,isLoading} =useAuth()
    const location = useLocation()
    if(isLoading){
        return <Spinner animation="border" variant="success" />
     }
 
     if(user.email){
        return children;
     
     }
     return <Navigate to='/login' state={{from:location}}> </Navigate>
    
 };


export default PrivateRoute;