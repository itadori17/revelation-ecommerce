import { getDatabase, ref as ref_database, child, get, push } from "firebase/database";

import React, { useEffect, useState,useRef } from 'react';
import { uid } from "uid";
import { db } from "../config/Firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  setDoc,
  doc,
  Timestamp
} from "firebase/firestore";

import './Add.css'
import CmsCenter from "./CmsCenter";

function Add() {

  var today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
  let yyyy = today.getFullYear();
  let minutes = today.getMinutes();
  let hour = today.getHours();
  let sec = today.getSeconds();
  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }

  today = yyyy+'-'+mm+'-'+dd+'-'+ hour + ":" + minutes +':' + sec;
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [productName, setProductName] = useState("");
    const [image, setImage] = useState("");
    const [Price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [Quantity,setQuantity] =useState("");
    const [Size, setSize] = useState("");
    const [Colors, setColors] = useState("");
   
   const [ productCode,  setProductCode] =useState("")
    const usersCollectionRef = collection(db, "products");


  const [allInfo, setAllInfo] = useState([]);




  const [xS, setSizeXs] = useState("");
  const [s, setSizeS] = useState("");
  const [m, setSizeM] = useState("");
  const [l, setSizeL] = useState("");
  const [xL, setSizeXl] = useState("");
  const [xXl, setSize2Xl] = useState("");
  const [xXxl, setSize3Xl] = useState("");


  const [ojbHandler, setObjHandler] = useState([]);
  const arrObj = [];
  const uidd = uid();
  useEffect(() => {

    // read
    const dbRef = ref_database(getDatabase());
    get(child(dbRef, `${uidd}`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        let keys = Object.keys(snapshot.val())
        const Key = snapshot.key;
        const Data = snapshot.val();

        let arr = []
        for (var x = 0; x < keys.length; x++) {
          arr.push(Data[keys[x]])
        }
        console.log(arr)
        setObjHandler(arr);

      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });


  }, []);

  const add = async () => {
    // const prodSizes = 'S';
    let colour, size;
    await addDoc(usersCollectionRef, {
      brandName: brand, category: category, description: description, price: Price, xS: xS, xL, Colors: Colors,
      productCode: productCode, productName: productName, timeStamp: new Date()
    }).then(async (r) => {
      const prodColle = doc(db, "prod", r.id, 'colours', colour + '_' + size);
      await setDoc(prodColle, { price: Price, qty: "newQty", size: Size, colour: colour }).then(() => {
        console.log('Finished', r.id);
      }).catch(er => {
        console.log(er.message)
      });;
    }).catch(er => {
      console.log(er.message)
    });;

  };

  return (

    
    <CmsCenter/>,
   
    
       <div className='rightSideProductsInfo'>
        <form className='formProduct'>
           <div className='Addprod'>
              <div className='prod'>
                 <p>Add Product</p>
                    <select onChange={(text) => {
                        setBrand(text.target.value);
                     }}>
                       <option value="1">Select Brand</option>
                          <option value="Brand 1">Brand 1</option>
                          <option value="Brand 2">Brand 2</option>
                          <option value="Brand 3">Brand 3</option>
                          <option value="Brand 4">Brand 4</option>
                    </select>
                   
              </div>
              <div >
                    <select name="" id=""  onChange={(text) => {
                        setCategory(text.target.value);
                     }} >
                      <option value="Category 1">Select Category</option>
                         <option value="Category 2">Summer</option>
                         <option value="Category 3">Winter</option>
                         <option value="Category 4">Accessories</option>
                         <option value="Category 5">Sale</option>
                     </select>
                    
            </div>
            
               <div>
                   <input type="text" placeholder='Product Name' onChange={(text) => {
                    setProductName(text.target.value);
                   }} ></input>
               </div>
              
            
               <div>
                <textarea type='text' placeholder='About the product'
                  onChange={(text) => {
                    setDescription(text.target.value);
                  }}
                ></textarea>
               </div>
               <div>
                 <input type='file'></input>
               </div>
               <div>
                 <input type="text" placeholder='Product Code' onChange={(text) => {
                    setProductCode(text.target.value);
                   }} >
                 </input>
               </div>
               <div>
                   <button>ADD PRODUCT</button>
               </div>

            </div> 

            <div className='Addsizes'>
               <div className='sizes'>
                  <h2>Product features</h2>
                  <div>
                     <select name="" id=""  onChange={(text) => {
                        setColors(text.target.value);
                     }} >
                        <option    >Select Colour</option>
                        <option value="Black">Black</option>
                         <option value="Brown">Brown</option>
                         <option value="Orange">Orange</option>
                         <option value="Yellow">Yellow</option>
                         <option value="White">White</option>
                     </select>
                  </div>
                  <div>
                    <select name="" id=""  onChange={(text) => {
                        setSize(text.target.value);
                     }} >
                        <option    >Select Sizes</option>
                        <option value="XS">XS</option>
                         <option value="s">S</option>
                         <option value="Orange">M</option>
                         <option value="Yellow">L</option>
                         <option value="White">XL</option>
                         <option value="White">2XL</option>
                         <option value="White">3XL</option>
                     </select>
                  </div>
                  <div>
                    <input type="text" placeholder='Qantity' onChange={(text) => {
                       setQuantity(text.target.value);
                     }} >
                     </input>
                 </div>
                 <div>
                    <input type='number' step="0.01" placeholder='Price'
                    onChange={(text) => {
                    setPrice(text.target.value);
                   }}
                  ></input>
                 </div>
                 <div>
                   <button>Submit</button>
               </div>
            </div>
            
            </div>
            <div className='Buttonxontainer'>
                 
                <button type="button"
            className="btn btn-secondary btn-block"
            onClick={add}
          >Add</button>
          <button className='button3'>
            CLEAR FORM
          </button>
        </div>

      </form>
    </div>




  )
}

export default Add
