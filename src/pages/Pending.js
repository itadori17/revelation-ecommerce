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

            {isOpen && <Popup 
            handleClose={togglePopup}
              content = {<div>
                <h2>{card.title}</h2>
              <p>{card.ref}</p>
              <div className='Orderstutus'>
     
     <div className='right'>
        <div className='OrderedProduct'>
              <div  className='head'>
                  <h1>Ordered Product</h1>
              </div>
              <div className='imagcon'>
                <div className='left'>
                  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmnuy3iEvmjzv31G_5fq8N-zzMjDnE05Quvw&usqp=CAU"/>
                </div>
                <div className='right1'>
                   <p>Sweater <br/><span>R150</span></p>
                   <p>QTY:1</p>
                   <p>Colour:Yellow</p>
                   <p>Size:S</p>
                </div>
              </div>
         </div>
       
    </div>
       
     <div  className='left'>
      <p>Order Details<br/>
      Bongani  <br/>
      +2794501573</p>
      <p>REF Relevation601861</p>        
     <p>Use this reference number to compare against the reference number provided by your back provider.
      <br/>Date of Purchase</p>
      <p>28/09/2022</p>
      <p>Products: sweater</p>
      <p>Total Quantity</p>
      <p>Total R330.00</p>
      <p>Delivery Fee R230.00</p>
      <p>Grand Total R100</p>
      <p> Order type :Delivery</p>
      <p>Order Address 541 Section E ,Springs</p>
     </div>
     <div className='bottom'>
        <h1>Order details</h1>
          <div className='orderprocess'>
             <div className='ordernumber'>
             <div className='progress-step'></div>
             <div className='progress-step'></div>
             <div className='progress-step'></div>
             <div className='progress-step'></div>
              
             </div>
             <div className='orderbtn'>
               <button className='cancel'>Cancel Order</button>
               <button className='proceed'>Proceed Order</button>
             </div>
          </div>
        </div>
  </div>
              </div>}
              />}
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
