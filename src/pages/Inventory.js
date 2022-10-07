import React, { useState } from 'react'
import Add from '../components/Add/Add'
import "./Inventory.css"
function Inventory() {
  const [cards] = useState([
    {
      title: 'Bongani',
      price: '3',
      ref: 'REF brkn-283753',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmnuy3iEvmjzv31G_5fq8N-zzMjDnE05Quvw&usqp=CAU"
    },
    {
      title: 'KAt',
      price: '7',
      ref: 'REF brkn-283753',
      image:"https://elevationstore.fr/8454-home_default/pack-2-tee-shirts-col-rond.jpg"
    },
    {
      title: 'Sadiki',
      price: '1',
      ref: 'REF brkn-283753',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMqUvBHX9Qw96UjEcrykJRI1kXjOWV_uoeAA&usqp=CAU"
    },
    {
      title: 'Kamo',
      price: '5',
      ref: 'REF brkn-283753',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmnuy3iEvmjzv31G_5fq8N-zzMjDnE05Quvw&usqp=CAU"
    },
    {
      title: 'Moabi',
      price: '2',
      ref: 'REF brkn-283753',
      image:"https://www.johncraig.co.za/wp-content/uploads/CLG02FA-CARLO-G-BRENDAN-CHECK-TROUSER-2-PLEAT-FAWN-469-V1-300x300.jpg"
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
           
            <div className='Image'>image container<img src={card.image} style={{width:"100%" ,height:"100%",margin:"auto",display:"flex",alignItems:"center",marginTop:"-18px"}}/></div>
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
