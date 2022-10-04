import React from 'react'
import './Item-card.css';
import {FaShoppingCart, FaHeart} from 'react-icons/fa';

export default function ItemCard() {
  return (
    <div className="Card">
        <div className='Card-img'><img src='' alt='image'/></div>
        <div className='Card-name'>Item name</div>
        <div className='Card-price'>R0</div>
        <div className='Card-icons'>
          <FaHeart className='icon' size={25}/>
          <FaShoppingCart className='icon' size={25}/>
        </div>
      </div>
  );
}
