import React, { useState } from 'react'

function Pending() {
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
  ])
  return (
    <div>
       <section>
        <div className='container'>
        <h1>Pending Orders</h1>
        <div className='cards'>
          {
            cards.map((card, i) => (
            <div key={i} className='card'>
            <h3>{card.title}</h3>
            <p>{card.price}</p>
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
