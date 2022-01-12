import React from 'react';
import AddProduct from '../../Dashboard/AddProduct/AddProduct';
import GetReview from '../../Dashboard/GetReview/GetReview';
import Reviews from '../../Reviews/Reviews';
import Banner from '../Banner/Banner';
import HomeProducts from '../HomeProducts/HomeProducts';
import Services from '../Services/Services'
const Home = () => {
    return (
        <div>
               <Banner/>
               <Services/>
               <HomeProducts/>
              <Reviews></Reviews>
              <AddProduct></AddProduct>
             
        </div>
    );
};

export default Home;