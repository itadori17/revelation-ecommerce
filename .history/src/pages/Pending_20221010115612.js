import React, { useState } from 'react';
import '../styles/pending.css';
import Popup from './Popup';

function Pending() {

  const [isOpen, setIsOpen ] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const [cards] = useState([
    {
      title: 'Bongani',
      price: 'R250',
      ref: 'REF brkn-283753'
    },
    {
      title: 'KAt',
      price: 'R754',
      ref: 'REF brkn-283753'
    },
    {
      title: 'Sadiki',
      price: 'R1450',
      ref: 'REF brkn-283753'
    },
    {
      title: 'Kamo',
      price: 'R250',
      ref: 'REF brkn-283753'
    },
    {
      title: 'Moabi',
      price: 'R250',
      ref: 'REF brkn-283753'
    },
    {
      title: 'Moabi',
      price: 'R250',
      ref: 'REF brkn-283753'
    },
    
   
   
    

  ])
  return (
    <div>
      <h1>Pending Orders</h1>
       <section>
        <div className='container'>
        
        <div className='cards'>
          {
            cards.map((card, i) => (
            <div key={i} className='card'>
            <h3>{card.title}</h3>
            <p>{card.price}</p>
            <p>{card.ref}</p>
            <button className='btn' onClick={togglePopup} >View Order</button>

            {isOpen && <Popup}
          </div>
            ))
          }
          
        </div>
        </div>
       </section>
    </div>
  )
}

export default Pending
