
import React from 'react'
import '../css/Card.css'

const MyRestaurantCard = (props) => {
  let slideIndex=0;


  function moveSlide(n) {
      const slider=document.querySelector('.slider')
      const cards=document.querySelectorAll('.card');
      const totalcards=cards.length;
      slideIndex+=n;
      if (slideIndex < 0) {
          slideIndex = totalcards - 1;
      } else if (slideIndex >= totalcards) {
          slideIndex = 0;
      }
      const newTransformValue=-slideIndex*220;
      slider.style.transform=`translateX(${newTransformValue}px)`;
      
  }

    
  

  return (
    <div className="parent">
      <button class="prev" onClick={()=>moveSlide(-1)}>&#10094;</button>
      <div className="slider">
    <div className='card'>
      <img className='image' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png" alt="" />
      
      
      </div>
      <div className='card'>
      <img className='image' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png" alt="" />
      
      
      </div>
      <div className='card'>
      <img className='image' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png" alt="" />
      
      
      </div>
      <div className='card'>
      <img className='image' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png" alt="" />
      
      
      </div>
      <div className='card'>
      <img className='image' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png" alt="" />
      
      
      </div>
      <div className='card'>
      <img className='image' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png" alt="" />
      
      
      </div>
      <div className='card'>
      <img className='image' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png" alt="" />
      
      
      </div>
      <div className='card'>
      <img className='image' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png" alt="" />
      
      
      </div>
      </div>
      <button class="next" onClick={()=>moveSlide(1)}>&#10095;</button>
    </div>
  )
}

export default MyRestaurantCard
