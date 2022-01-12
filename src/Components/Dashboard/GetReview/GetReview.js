import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

import { FaStar } from "react-icons/fa";
import './GetReview.css'
const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};




const GetReview = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const nameRef= useRef()
  const emailRef= useRef()
  const textRef= useRef()
  const stars = Array(5).fill(0)
  

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }
const handleSubmit =  e =>{
  const name = nameRef.current.value;
  const email= emailRef.current.value;
  const review= textRef.current.value;

  const userReview = {name: name, email: email, review: review , star: currentValue};

  fetch('http://localhost:5000/reviews',{
    method:'POST', 
    headers: {
      "content-Type":"application/json"
    },
    body: JSON.stringify(userReview)
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.insertedId){
      alert('successfully review added')
     
     }
     console.log(data)
  })





  e.preventDefault()
};



    console.log(currentValue)   
    



  return (
    <div className='review-form-area'>
      <Container>
        
        <div className='formArea'>
          <h3 className='mb-3'>Give us your Review</h3>
       {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
        <form  onSubmit={handleSubmit} className='mt-3'>
          <div className='w-100'>
          <input placeholder=' Your Name' className='w-100 mb-2 input' ref={nameRef} type="text" />
          </div>
          <div className='w-100'>
          <input placeholder=' Your Email' type='email' className='w-100 mb-2 input' ref={emailRef} />
          </div>
          <div className='w-100'>
          <textarea placeholder=' Your Comment'  className='w-100 mb-3 input'ref={textRef} name="" id="" cols="20" rows="10"></textarea>
          </div>
          <button className='btn btn-warning d-block mx-auto' type="submit"  >Send Feedback</button>
        </form>
    </div>
  
  
</Container>
    </div>
       
    );
};

export default GetReview;