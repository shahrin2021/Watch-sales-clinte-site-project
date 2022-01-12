import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Review from './Review/Review';
import SwiperCore, {
  Navigation,Pagination,History
} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import './Reviews.css'
const Reviews = () => {
    const [reviews , setReviews] = useState([])
    
    useEffect(() => {
       fetch('http://localhost:5000/reviews')
       .then(res=>res.json())
       .then(data=> {
        setReviews(data)
        console.log(data)
       })
      
    }, [])

    SwiperCore.use([Navigation,Pagination,History]);
    return (
        <div>
            <Container>
         
              <>   
              <Swiper spaceBetween={10} slidesPerView={1} navigation={true} pagination={true} history={{
              "key": "slide"
            }} className="mySwiper" style={{ marginBottom:'30px'}}>
          {
            reviews.map(review=> 
                  <SwiperSlide style={{ marginBottom:'60px'}}>
                    <div style={{maxWidth:'600px', margin:'auto'}} className='slideBox'>
                   <div>
                     <h6>{review.name}</h6>
                     <h5>{review.email}</h5>
                   </div>
                   <p>{review.review}</p>
                   </div>
                  </SwiperSlide>
             

            )
          }
          </Swiper>
              </>
       
            </Container>
        </div>
    );
};

export default Reviews;