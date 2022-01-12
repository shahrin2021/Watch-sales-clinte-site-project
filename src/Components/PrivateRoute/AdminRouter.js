import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const AdminRoute = ({children, ...rest}) => {
    const {user,admin ,isLoading} =useAuth();
    const location = useLocation();

    if(isLoading){
        return  (<div  style={{height:'100vh'}}className='d-flex justify-content-center align-items-center'>
         <Spinner animation="border" variant="success" />
        </div>)};

    if(user.email && admin){
        return children;
    };

    return <Navigate to='/login' state={{from:location}}> </Navigate>
};

export default AdminRoute;