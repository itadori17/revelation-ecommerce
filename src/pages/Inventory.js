import React, { useState } from 'react'
import Add from '../components/Add/Add'
import "./Inventory.css"
function Inventory() {
  const [cards] = useState([
    {
      title: 'Bongani',
      price: '3',
      ref: 'REF brkn-283753',
      image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fclarity&psig=AOvVaw2BF6qTL07UJ9wa6mBL8eY9&ust=1665151007996000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKjiqIbhy_oCFQAAAAAdAAAAABAi"
    },
    {
      title: 'KAt',
      price: '7',
      ref: 'REF brkn-283753'
    },
    {
      title: 'Sadiki',
      price: '1',
      ref: 'REF brkn-283753'
    },
    {
      title: 'Kamo',
      price: '5',
      ref: 'REF brkn-283753'
    },
    {
      title: 'Moabi',
      price: '2',
      ref: 'REF brkn-283753'
    },
  ])
  return (
    <div  className='InventoryPage'>
      <Add/>
       <div className='Inventorycontainer'>
          <div className='InventoryItems'>

               <div className='Inventoryinput' >
                   <input type="text" placeholder='Search Inventory'  ></input>
               </div>
               
 
                   <div className='container'>
        
                          <div className='cardrs'>
                       {
                      cards.map((card, i) => (
            <div key={i} className='cardz'>
            <h3>{card.title}</h3>
            <p>{card.price}</p>
           
            <div className='Image'>image container<img src={card.image}/></div>
              <div  className='inputs'>
                <div className='input'>
                  <span>-</span>
                    <   input type="text" placeholder='3'  ></input>
                 <span>+</span>
              </div>
                
                <div className='btns'>
             <button className='save'>Save</button>
              <button className='delete'>Delete</button>
              </div>
            </div>
          </div>
            ))
          }
          
        </div>
        </div>
    
          </div>
       </div>
    </div>
  )
}

export default Inventory
