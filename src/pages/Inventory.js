import React, { useState, useEffect } from 'react'
import Add from '../components/Add/Add'
import { db } from '../components/config/Firebase';
import "./Inventory.css";

import {
  collection,
  getDocs,
} from "firebase/firestore";
function Inventory() {

  const handlesubmit = event => {
    event.preventDefault()
  }
  const [stock, setStock] = useState([]);
 
  const [prodList,setprodList] =useState([])
  console.log(stock)
  useEffect(() => {
    
    
    getDocs(collection(db, "inventorystock/")).then((res) => {
      
      res.forEach((doc) => {
        // console.log("GET DATA: ", doc.data())
        getDocs(collection(db, "inventorystock/", doc.id, 'colours')).then((response) => {
          // doc.data() is never undefined for query doc snapshots
          let coloursList = [];
          
          response.forEach((e) => {
            // prodList.push(doc.data(), e.data());
            // setProductList(prodList)

            // console.log('Colours 3: ', prodList)

            coloursList.push(e.data())
            // getInventoryStock.push(
            //   doc.id
            // )
            // console.log(e.id, " => ", e.data());
            // setStock(getInventoryStock)

          })
          // console.log("GET DATA: ", doc.data())
          
          setprodList(item=>[...item,Object.assign(doc.data(), {coloursList: coloursList})]);
          
          console.log('Colours: ', prodList)


        },[]);
  
       
      });
      console.log('Colours:test ', prodList)
      setStock(prodList)
      
    });
  }, []);
  return (
    <div className='InventoryPage'>
      <h1>Inventory</h1>
      <Add />
      <div className='Inventorycontainer'>
        <div className='InventoryItems'>
          {/* <div className='Inventoryinput' >
                   <input type="text" placeholder='Search Inventory'  ></input>
               </div> */}
          <div className='container'>
            <div className='cardrs'>
              {
              prodList.map((id,index )=>{
                  console.log("===========",id);
                  return(
                  <div key={id } className='cardz' >
                   
                    <h3>{id.prodName}</h3>
                    
                    <p>{id.prodDescription}</p>
                    <p>{id.coloursList[0].size}</p>
                    <p>{id.coloursList[0].colour}</p>
                    <p>{id.coloursList[0].price}</p>
                    <p>{id.coloursList[0].qty}</p> 

                    <div className='Image'>image container<img src={id.image}  alt="Product Image" style={{ width: "100%", height: "100%", margin: "auto", display: "flex", alignItems: "center", marginTop: "-18px" }} /></div>
                   
                    <div className='inputs'>
                      {/* <div className='input'>
                        <button className='btnInven' >-</button>
                        <   input type="text" placeholder='3'  ></input>
                        <button className='btnInvent'>+</button>
                      </div> */}
                      <div className='btns'>
                        <button className='save'>Save</button>
                        <button className='delete'>Delete</button>
                      </div>
                    </div>
                  </div>
                  )
                
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Inventory