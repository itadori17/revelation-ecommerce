import { getDatabase, ref, child, get,push } from "firebase/database";
import React, {useEffect, useState} from 'react';

import { db } from '../config/Firebase';
import './Add.css'
import CmsCenter from "./CmsCenter";

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
    const [Colors, setColors] = useState("");
    const [Filters, setFilter] = useState("");
    const [productTimeStamp, setProductTimeStamp] = useState(today);
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
  
    useEffect(() => {
      
          // read
      const dbRef = ref(getDatabase());
      get(child(dbRef, `productInformation`)).then((snapshot) => {
     if (snapshot.exists()) {
      console.log(snapshot.val());
      let keys = Object.keys(snapshot.val())
      const Key = snapshot.key;
      const Data = snapshot.val();

      let arr = []
      for (var x = 0; x < keys.length; x++){
        arr.push(Data[keys[x]])
      }
      console.log(arr)
      setObjHandler(arr);

    //   snapshot.forEach((Data) => {
    //   const childDatas = Data.val();
    //   let results =  childDatas;
    //   let arr = [];
    //   const obj  = results;
    //   arrObj.push(arr)
    //   console.log(arrObj);

    //   console.log(arr);

    //   // Data.forEach((childDatas) =>{
    //   //   const Datas = childDatas.key;
    //   //   const Keys = childDatas.val();
     
       
    //   // })

      

    // })
     
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
        
        
      },[]);

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

        
        push(ref(db, `productInformation`), {
            productInformation:productInfo
          });
    }


  return (
    
    <CmsCenter/>,
   
    
       <div className='rightSideProductsInfo'>
        <form className='formProduct'>
           <div className='Addprod'>
              <div className='prod'>
                 <p>Add Product</p>
                    <select  onChange={(text) => {
                       setBrand(text.target.value);
                      }}>
                       <option value="1">Select Brand</option>
                          <option value="Brand 1">Brand 1</option>
                          <option value="Brand 2">Brand 2</option>
                          <option value="Brand 3">Brand 3</option>
                          <option value="Brand 4">Brand 4</option>
                    </select>
                    <button>+</button>
              </div>
              <div >
                    <select name="" id=""  onChange={(text) => {
                        setCategory(text.target.value);
                     }} >
                      <option value="Category 1">Select Category</option>
                         <option value="Category 2">Category 1</option>
                         <option value="Category 3">Category 2</option>
                         <option value="Category 4">Category 3</option>
                         <option value="Category 5">Category 4</option>
                     </select>
                     <button>+</button>
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
                <textarea type='text' placeholder='About the product'
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
            <p><input type='file'
              
              onChange={(text) => {
                 setImage(text.target.value);
               }}
             ></input>+
              </p>
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
                     <input type="checkbox" value="XS" placeholder='Available size'
                        onChange={(text) => {
                         setSize(text.target.value);
                          }}
                       ></input>
                      <label><div className='colorblock'></div></label>
               
                 
                      <input type="checkbox" value="S" placeholder='Available size'
                        onChange={(text) => {
                         setSize(text.target.value);
                         }}
                      ></input>
                      <label><div className='colorblock1'></div></label>
               
                      <input type="checkbox" value="M" placeholder='Available size'
                       onChange={(text) => {
                         setSize(text.target.value);
                        }}
                      ></input>
                     <label><div className='colorblock2'></div></label>
                   <input type="checkbox" value="M" placeholder='Available size'
                     onChange={(text) => {
                      setSize(text.target.value);
                       }}
                    ></input>
                 <label><div className='colorblock3'></div></label>
                 
                  <input type="checkbox" value="L" placeholder='Available size'
                   onChange={(text) => {
                    setSize(text.target.value);
                  }}
                   ></input>
                  <label><div className='colorblock4'></div></label>
              
              <div className='filter'>  
                <input type='text' placeholder='Notes' onChange={(text) => {
                    setFilter(text.target.value);
                  }}></input>
                </div>
           
            </div>
           
            </div>
            <div className='Buttonxontainer'>
                 <input type="text" placeholder='Product Code' onChange={(text) => {
                    setProductName(text.target.value);
                   }} >
                 </input>
                <p>or</p>
                <button className='button1'>
                  GENERATE CODE
                </button >
                <button className='button2'>
                 ADD TO STALL
                </button>
                <button className='button3'>
                 CLEAR FORM
                </button>
            </div>
            <button
            type="button"
            className="btn btn-secondary btn-block"
            onClick={add}
            >Add</button>
        </form>
        </div>
        
        
    
  
  )
}

export default Add