import React from 'react'
import MyRestaurantCard from './MyRestaurantCard'
import '../css/Card.css'
const RestaurantList = () => {
  return (
    <div>
      <div className="restaurant-carousel">'
        <button className='pre-btn'><p>&lt;</p></button>
        <button className='next-btn'><p>&gt;</p></button>

        <div className="restaurant-container">
        <MyRestaurantCard/>
        <MyRestaurantCard/>
        <MyRestaurantCard/>
        </div>

      </div>
    </div>
  )
}

export default RestaurantList
