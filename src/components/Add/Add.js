import { ref, push } from 'firebase/database';
import React, {useState} from 'react';
import { db } from '../config/Firebase';
import './Add.css'

function Add() {
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [productName, setProductName] = useState("");
    const [image, setImage] = useState("");
    const [Price, setPrice] = useState("");
    const [About, setAboutProduct] = useState("");
    const [Size, setSize] = useState("");
    const [Colors, setColors] = useState("");
    const [Filters, setFilter] = useState("");

    const add = async  () => {
        



        let productInfo = {
          brandname: brand,
          categoryName: category,
          productname: productName,
          productImage: image,
          productPrice: Price,
          aboutProducr: About,
          productSize: Size,
          productColors: Colors,
          productFilter: Filters
          
        };
        
        push(ref(db, `ProductInfo`), {
            productInformation:productInfo
          });
    }


  return (
    
    <div className='productsInfo'>
    
       <div className='rightSideProductsInfo'>
        <form className='formProduct'>
           <div className='Addprod'>
              <div className='prod'>
                 <h2>Add Product</h2>
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
            <h2>Add Product</h2>
            <div>
              <label>XS</label>
                <input type="checkbox" value="XS" placeholder='Available size'
                onChange={(text) => {
                    setSize(text.target.value);
                  }}
                ></input>
                 <label>S</label>
                <input type="checkbox" value="S" placeholder='Available size'
                onChange={(text) => {
                    setSize(text.target.value);
                  }}
                ></input>
                <label>M</label>
                <input type="checkbox" value="M" placeholder='Available size'
                onChange={(text) => {
                    setSize(text.target.value);
                  }}
                ></input>
                <label>L</label>
                <input type="checkbox" value="L" placeholder='Available size'
                onChange={(text) => {
                    setSize(text.target.value);
                  }}
                ></input>
                <label>XL</label>
                <input type="checkbox" value="XL" placeholder='Available size'
                onChange={(text) => {
                    setSize(text.target.value);
                  }}
                ></input>
                <label>2XL</label>
                <input type="checkbox" value="2XL" placeholder='Available size'
                onChange={(text) => {
                    setSize(text.target.value);
                  }}
                ></input>
                <label>3XL</label>
                <input type="checkbox" value="3XL" placeholder='Available size'
                onChange={(text) => {
                    setSize(text.target.value);
                  }}
                ></input>
            </div>
            <div>
                <input type='file'
                 onChange={(text) => {
                    setImage(text.target.value);
                  }}
                ></input>
            </div>
            </div>
            <select name="" id=""  onChange={(text) => {
                    setColors(text.target.value);
                  }}>
                <option value="1">Select Colors</option>
                <option value="2">1</option>
                <option value="3">2</option>
                <option value="4">3</option>
                <option value="5">4</option>
            </select>
            <div>
                <input type='text' placeholder='Filters' onChange={(text) => {
                    setFilter(text.target.value);
                  }}></input>
            </div>
            <button
            type="button"
            className="btn btn-secondary btn-block"
            onClick={add}
            >Add</button>
        </form>
        </div>
    </div>
  
  )
}

export default Add