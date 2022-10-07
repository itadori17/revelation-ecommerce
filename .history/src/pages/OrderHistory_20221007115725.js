import React, { useState }  from 'react'

function OrderHistory() {
  const [cards] = useState([
  {
    title: 'Bongani',
    price: 'R250',
    ref: 'REF brkn-283753'
  },
  {
    title: 'KAt',
    price: 'R754',
    ref: 'Order Collec'
  },
  {
    title: 'Sadiki',
    price: 'R1450',
    ref: 'Order Delivered'
  },
  {
    title: 'Kamo',
    price: 'R250',
    ref: 'Order Delivered'
  },
  {
    title: 'Moabi',
    price: 'R250',
    ref: 'Order Collectec'
  },
  {
    title: 'Moabi',
    price: 'R250',
    ref: 'Order Delivered'
  },])
  return (
    <div>
       <h1>Order History</h1>
       <section>
        <div className='container'>
        
        <div className='cards'>
          {
            cards.map((card, i) => (
            <div key={i} className='card'>
            <h3>{card.title}</h3>
            <p>{card.price}</p>
            <p>{card.ref}</p>
            <button className='btn'>View Order</button>
          </div>
            ))
          }
          
        </div>
        </div>
       </section>
    </div>
  )
}

export default OrderHistory
