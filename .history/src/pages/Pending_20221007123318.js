import React, { useState } from 'react'
import '../styles/pending.css'
import '../styles/popup'

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
    {
      title: 'Moabi',
      price: 'R250',
      ref: 'REF brkn-283753'
    },])
  const [popup,setPop]=useState(false)
  const handleClickOpen=()=>{
      setPop(!popup)
  }
  const closePopup=()=>{
      setPop(false)
  }
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
            <button className='btn' onClick={handleClickOpen} >View Order</button>
            <div>
                {
                    popup?
                    <div className="main">
                        <div className="popup">
                            <div className="popup-header">
                                <h1>popup</h1>
                                <h1 onClick={closePopup}>X</h1>
                            </div>
                            <div>
                            <p>This is simple popup in React js</p>
                            </div>
                        </div>
                    </div>:""
                }
            </div>
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
