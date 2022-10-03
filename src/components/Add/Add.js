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
    const [Colors, setColors] = useState("");
    const [Filters, setFilter] = useState("");

    const add = async  () => {
        
        let productInfo = {
          brandname: brand,
          categoryName: category,
          productname: productName,
          productImage: image,
          productPrice: Price,
          productColors: Colors,
          productFilter: Filters
          
        };
        
        push(ref(db, `ProductInfo`), {
            productInformation:productInfo
          });
    }


  return (
    
    <div className='productsInfo'>
      <div className='leftSideProductsInfo'>leftSideProductsInfo</div>
      <div className='MiddleProductsInfo'>MiddleProductsInfo</div>
       <div className='rightSideProductsInfo'>
        <form >
         
            <div className='formProduct'>
            <h2>Add Product</h2>
            <select  onChange={(text) => {
                    setBrand(text.target.value);
                  }}>
            <option value="1">Select Brand</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <button>+</button>
            </div>
            <div>
            <select name="" id=""  onChange={(text) => {
                    setCategory(text.target.value);
                  }} >
                <option value="1">Select Category</option>
                <option value="2">1</option>
                <option value="3">2</option>
                <option value="4">3</option>
                <option value="5">4</option>
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
                <input type='file'
                 onChange={(text) => {
                    setImage(text.target.value);
                  }}
                ></input>
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