import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../Components/Hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
   const [orders, setOrders] = useState([]);
   const {user} = useAuth()
   useEffect(()=>{
       fetch(`http://localhost:5000/orders/${user.email}`)
       .then(res=>res.json())
       .then(data=>{
        setOrders(data)
        console.log(data)
       })
   },[user.email])


//    const handleDelete = (id)=>{
//        fetch(`http://localhost:5000/orders/${id}`, {
//            method: 'DELETE'
//        })
//        .then(res=> res.json())
//        .then(data=> {
//            if(data.deletedCount> 0){
//             const remaining = orders.filter(order=> order?._id == id);
//             setOrders(remaining)
//             alert('successfully deleted')
//            }
//        })
//    }

   const handleDelete= (id)=>{
    const url = `http://localhost:5000/orders/${id}`;
    fetch(url,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount> 0){
            const remaining = orders.filter(order=> order?._id == id);
            setOrders(remaining)
            alert('successfully deleted')
        }
    })
}



    return (
        <div className='order-section'>
        <Container>
            <Row>
                {
                   orders.map(order=><MyOrder
                    order={order}
                    key = {order._id}
                    handleDelete={handleDelete}
                   >

                   </MyOrder>) 
                }
            </Row>
        </Container>
        </div>
    );
};

export default MyOrders;
