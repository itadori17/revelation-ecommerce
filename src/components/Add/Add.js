import { ref, push } from 'firebase/database';
import React, {useState} from 'react';
import { db } from '../config/Firebase';
import './Add.css'
import { uid } from "uid";

function Add() {

  var today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
  let yyyy = today.getFullYear();
  let minutes = today.getMinutes();
  let hour = today.getHours();
  let sec = today.getSeconds();
  if(dd<10){
    dd='0'+dd
  }
  if(mm<10){
    mm='0'+mm
  }
  today = yyyy+'-'+mm+'-'+dd+'-'+ hour + ":" + minutes +':' + sec;
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [productName, setProductName] = useState("");
    const [image, setImage] = useState("");
    const [Price, setPrice] = useState("");
    const [About, setAboutProduct] = useState("");
    const [Size, setSize] = useState("");
    const [xS, setSizeXs] = useState("");
    const [s, setSizeS] = useState("");
    const [m, setSizeM] = useState("");
    const [l, setSizeL] = useState("");
    const [xL, setSizeXl] = useState("");
    const [xXl, setSize2Xl] = useState("");
    const [xXxl, setSize3Xl] = useState("");
    const [Colors, setColors] = useState("");
    const [Filters, setFilter] = useState("");
    const [productTimeStamp, setProductTimeStamp] = useState(today);

    const add = async  () => {
        
    

        let availableSize ={
          XS:xS,
          S:s,
          M:m,
          L:l,
          X:xL,
          XXL:xXl,
          XXXL:xXxl
        }

        let productInfo = {
          brandname: brand,
          categoryName: category,
          productname: productName,
          productImage: image,
          productPrice: Price,
          aboutProducr: About,
          productSize: availableSize,
          productColors: Colors,
          productFilter: Filters,
          timeStamp: productTimeStamp
          
        };

        const uidd = uid();
        push(ref(db, `${uidd}/`), {
            productInformation:productInfo
          });
    }
    const generateCode = async  () => {

    }

  return (
    
    <div className='productsInfo'>
    
       <div className='rightSideProductsInfo'>
        <form className='formProduct'>
           <div className='Addprod'>
              <div className='prod'>
                 <p>Add Product</p>
                    <select  onChange={(text) => {
                       setBrand(text.target.value);
                      }}>
                       <option value="1">Select Brand</option>
                          <option value="Brand 1">Sale</option>
                          <option value="Brand 2">Clothing</option>
                          <option value="Brand 3">PPEs & Uniforms</option>
                          <option value="Brand 4">Office Supplies</option>
                    </select>
              </div>
              <div >
                    <select name="" id=""  onChange={(text) => {
                        setCategory(text.target.value);
                     }} >
                      <option value="Category 1">Select Category</option>
                         <option value="Category 2">Female</option>
                         <option value="Category 3">Male</option>
                         <option value="Category 4">Unisex</option>
                         <option value="Category 5">Supplies</option>
                     </select>
            </div>
            
               <div>
                   <input type="text" placeholder='Product Name' onChange={(text) => {
                    setProductName(text.target.value);
                   }} ></input>
               </div>
               <div>
                <input type='number' step="0.01" placeholder='Price'
                   onChange={(text) => {
                    setPrice(text.target.value);
                  }}
                ></input>
               </div>
            
            <div>
                <textarea type='text' placeholder='Product description'
                onChange={(text) => {
                    setAboutProduct(text.target.value);
                  }}
                ></textarea>
            </div>
            </div> 

            <div className='Addsizes'>
               <div className='sizes'>
                  <p>Available sizes</p>
                 
                    <input type="checkbox" value="XS" placeholder='Available size'
                      onChange={(text) => {
                       setSizeXs(text.target.value);
                       }}
                     ></input>
                    <label>XS</label>
               
                 
                    <input type="checkbox" value="S" placeholder='Available size'
                      onChange={(text) => {
                        setSizeS(text.target.value);
                        }}
                     ></input>
                    <label>       S       </label>
               
                <input type="checkbox" value="M" placeholder='Available size'
                onChange={(text) => {
                    setSizeM(text.target.value);
                  }}
                ></input>
                 <label>        M     </label>
                
                <input type="checkbox" value="L" placeholder='Available size'
                onChange={(text) => {
                    setSizeL(text.target.value);
                  }}
                ></input>
                 <label>    L</label>
                
                <input type="checkbox" value="XL" placeholder='Available size'
                onChange={(text) => {
                    setSizeXl(text.target.value);
                  }}
                ></input>
                <label>XL</label>
              
                <input type="checkbox" value="2XL" placeholder='Available size'
                onChange={(text) => {
                    setSize2Xl(text.target.value);
                  }}
                ></input>
                  <label>2XL</label>
                
                <input type="checkbox" value="3XL" placeholder='Available size'
                onChange={(text) => {
                    setSize3Xl(text.target.value);
                  }}
                ></input>
                <label>3XL</label>
            </div>
          
            <div className='imagecon' >
               <p>+</p>
                <input type='file'
              
                 onChange={(text) => {
                    setImage(text.target.value);
                  }}
                ></input>
            </div>
         
            </div>
            {/* <select id=""  onChange={(text) => {
                    setColors(text.target.value);
                  }}>
                <option value="1">Select Colors</option>
                <option value="2">1</option>
                <option value="3">2</option>
                <option value="4">3</option>
                <option value="5">4</option>
            </select> */}
                 <div className='Addcolor'>
                  <div className='color'>
                    <p>Available colors</p>
                     <input type="checkbox" value="purple" placeholder='Available colors'
                        onChange={(text) => {
                         setColors(text.target.value);
                          }}
                       ></input>
                     <label> L</label>
               
                 
                      <input type="checkbox" value="red" placeholder='Available colors'
                        onChange={(text) => {
                         setColors(text.target.value);
                         }}
                      ></input>
                     <label>    L</label>
               
                      <input type="checkbox" value="blue" placeholder='Available colors'
                       onChange={(text) => {
                         setColors(text.target.value);
                        }}
                      ></input>
                     <label>    L</label>
                   <input type="checkbox" value="green" placeholder='Available colors'
                     onChange={(text) => {
                      setColors(text.target.value);
                       }}
                    ></input>
                 <label>    L</label>
                 
                  <input type="checkbox" value="yellow" placeholder='Available colors'
                   onChange={(text) => {
                    setColors(text.target.value);
                  }}
                   ></input>
                    <label>    L</label>
                 <div>
                  
                <textarea placeholder='Filters' onChange={(text) => {
                    setFilter(text.target.value);
                  }}></textarea>
            </div>
            </div>
                  </div>
            <button
            type='button'
            className='btn btn-secondary btn-block'
            onClick={generateCode}>
              Generate code
              </button>
            <button
            type="button"
            className="btn btn-secondary btn-block"
            onClick={add}
            >Add item</button>
        </form>
        </div>
    </div>
  
  )
}

export default Add