import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// swiper bundle styles
import 'swiper/swiper-bundle.min.css'
import './Banner.css'
// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import SwiperCore, {
    EffectFade,Navigation,Pagination
  } from 'swiper';
import { Container } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
  
  // install Swiper modules
  SwiperCore.use([EffectFade,Navigation,Pagination]);
  
// import Swiper core and required modules


// install Swiper modules
// SwiperCore.use([Pagination]);


  
  // install Swiper modules

  

const Banner = ()=> {
  
  
  
  return (
    <>
    <Swiper spaceBetween={30} effect={'fade'} navigation={true} pagination={{
  "clickable": true
}} className="mySwiper">
  <SwiperSlide >
      <div className='banner-image'>
            <Container>
                <div className='banner-text'>
            <h1>TAKE YOUR FIRST STEP WITH SMART WATCH</h1>
            <p>Starting with $150 </p>
            <Button className='btn btn-info banner-btn'>SHOP NOW</Button>
                </div>
            </Container>
      </div>
  </SwiperSlide>
  <SwiperSlide >
      <div className='banner-image1'>
      <Container>
               <div className="banner-text text-center">
               <h2>TAKE YOUR TRIPTO YOUR VIRTUALWORLD</h2>
               <h6>Hurry up</h6>
            <Button className='btn btn-warning banner-btn'>SHOP NOW</Button>
               </div>
           </Container>  
      </div>
  </SwiperSlide>
  <SwiperSlide >
      <div className='banner-image2'>
           <Container>
               <div className="banner-text">
               <h2 className='text-danger'>get 5% cashback up to $50</h2>
               <h6>Hurry up . Limite priod offer</h6>
            <Button className='btn btn-info banner-btn'>SHOP NOW</Button>
               </div>
           </Container>
      </div>
  </SwiperSlide>
  </Swiper>
    </>
    
 
  )
}

export default Banner;

// Import Swiper React components

// Import Swiper styles




