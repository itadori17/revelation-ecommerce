import React, { useState } from 'react'

function Pending() {
  const [cards] = useState([
    {
      title: 'Bongani',
      price: 'R250',
      re
    }
  ])
  return (
    <div>
       <section>
        <div className='container'>
        <h1>Pending Orders</h1>
        <div className='cards'>
          <div className='card'>
            <h3>Customer 1</h3>
            <p>R230</p>
          </div>
        </div>
        </div>
       </section>
    </div>
  )
}

export default Pending
