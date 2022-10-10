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

  return (
    <div>
       <h1>Order History</h1>
    </div>
  )
}

export default OrderHistory
