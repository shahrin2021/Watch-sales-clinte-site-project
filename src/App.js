import logo from './logo.svg';
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Header from './Shared/Header/Header';
import Register from './Components/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Products from './Products/Products';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import MyOrders from './MyOrders/MyOrders';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';
import AdminRouter from './Components/PrivateRoute/AdminRouter';
import AdminRoute from './Components/PrivateRoute/AdminRouter';
import Dashboard from './Components/Dashboard/Dashboard';
import GetReview from './Components/Dashboard/GetReview/GetReview';
function App() {
  return (
    <div className="App">
     <AuthProvider> 
      <Router>
        <Header/>
        
        <Routes>
          <Route path='/' element={<Home/>}> </Route>
          <Route path='/home' element={<Home/>}> </Route>
          <Route path='/login' element={<Login/>}> </Route>
          <Route path='/register' element={<Register/>}> </Route>
          <Route path='/products' element={<Products/>}> </Route>
          
          <Route path='/product/:id' element={<ProductDetails/>}> </Route>
          

        <Route path='/dashboard' element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>

          <Route  path='/dashboard/myorder' element={<MyOrders></MyOrders>}>
          
        
        </Route>

        <Route  path='/dashboard/Getreview'element={<GetReview></GetReview>}></Route>
        <Route exact path='/dashboard' element={<MyOrders></MyOrders>}></Route>
        
     
        <Route path='/dashboard/makeadmin' element={<AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>}>
          
        </Route>
       
        
          </Route>
        </Routes>

      </Router>
    </AuthProvider> 
   
      
     
    </div>
  );
}

export default App;
