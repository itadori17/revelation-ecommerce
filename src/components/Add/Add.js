import React, { useRef, useState } from "react";
import { db } from ".././config/Firebase";
import { doc, setDoc, addDoc } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "@firebase/firestore";
import CmsCenter from "./CmsCenter";
import "./Add.css";

function Add({ path }) {
  const query = collection(db, `products`);
  const prodType = useRef();
  const brandCategory = useRef();
  const prodName = useRef();
  const prodDescription = useRef();
  // const prodImage = useRef();
  const prodColor = useRef();
  const prodSizes = useRef();
  const prodPrice = useRef();
  const prodQty = useRef();
  const [isEdit, setIsEdit] = useState(false);
  
  const [show,setShow]=useState(false); 
const [imgcon,setimgcon]=useState(""); 
  const [docs, loading] = useCollectionData(query);
  console.log(docs);
  console.log(imgcon);
const [image, setImage] = useState();
const imageRef = useRef();
function setPic(image){
  const imgPath = document.querySelector("#userImage1").files[0];
  const reader = new FileReader();
  reader.addEventListener("load", function() {
      localStorage.setItem('image', reader.result);
  }, false);
  reader.readAsDataURL(imgPath);
  // image=localStorage.getItem('image')
  // setimgcon(image)
  // console.log(image)
}

// const [imagePath, setImagePath] = useState();
// console.log(imagePath)
// const convert2base64 = e =>{
//   const file = e.target.files[0];
//   const reader = new FileReader();
//   reader.onloadend = () =>{
//     setImagePath(reader.result.toString())
//   }
//   reader.readAsDataURL(file);
// };
 
  let refId = null;
  
  async function handleSubmit(e) {
    e.preventDefault();
    // Add a new document with a generated id.
   
    await addDoc(collection(db, "inventorystock"), {
      prodType: prodType.current.value,
      prodName: prodName.current.value,
      brandCategory: brandCategory.current.value,
      prodDescription: prodDescription.current.value,
      image:localStorage.getItem('image'),
      productCode: new Date().getTime(),
    }).then(async (docRefRes) => {
      console.log("Document written with ID: ", docRefRes.id);
      refId = docRefRes.id;
    });

   
  }
  async function colorSubmit(e) {
    e.preventDefault();
    await setDoc(
      doc(
        db,
        "inventorystock",
        refId,
        "colours",
        prodColor.current.value + "_" + prodSizes.current.value
      ),
      {
        price: prodPrice.current.value,
        qty: prodQty.current.value,
        size: prodSizes.current.value,
        colour: prodColor.current.value,
      }
    ).then((docRef) => {
      console.log("added: ", docRef);
    });
    
  }

  return (
    (<CmsCenter />),
    (
      <div className="rightSideProductsInfo" >
        {loading && "Loading..."}
        <form className="formProduct" onSubmit={handleSubmit}>
           <div className="Addprod">
              <div className="prod">
                 <h2>Add Product</h2>
                   <select ref={prodType}>
                      <option value="0">Select Type</option>
                      <option value="Tops">Tops</option>
                      <option value="Shirts">Shirts</option>
                      <option value="Jackets,Sweatshirts&Blazers">Jackets, Sweatshirts & Blazers</option>
                      <option value="Denim">Denim</option>
                      <option value="Pants">Pants</option>
                      <option value="Shorts">Shorts</option>
                      <option value="Shoes">Shoes</option>
                      <option value="Bags">Bags</option>
                      <option value="Belts">Belts</option>
                      <option value="Hats&Scarves">Hats & Scarves</option>
                    </select>
                  </div>
                  <div>
                    <select name="" id="" ref={brandCategory}>
                      <option value="0">Select Category</option>
                      <option value="Summer">Summer</option>
                      <option value="Winter">Winter</option>
                      <option value="Accessories">Accessories</option>
                      <option value="Sale">Sale</option>
                   </select>
              </div>
              <div>
                   <input type="text" placeholder="Product Name" ref={prodName} />
              </div>
            <div>
                  <textarea
                  type="text"
                  placeholder="About the product"
                  ref={prodDescription}
                />
            </div>
            <div>
                <input type="alphanumeric" placeholder="Code"></input>
            </div>
           
            
               <div>
              
               <input type='file' placeholder="Image Here" id='userImage1' ref={imageRef} onChange={(event)=>setPic (setImage(event.target.value))} />
             
                  <img id="image"  src={localStorage.getItem('image')}  />
                    
               </div>
            <div>
              <button type="submit" onClick={()=>setShow (!show )}>ADD PRODUCT</button>
            </div>
          </div>
        </form>
        { show &&
        <form className='Addsizes'   onSubmit={colorSubmit}>
                <h2>Product Features</h2>
                <div className='sizes'>
                <label>Available colors</label>
                <div>
                   <select ref={prodColor}>
                      <option value="default">Select Type</option>
                      <option value="black">black</option>
                      <option value="red">red</option>
                      <option value="blue">blue</option>

                      <option value="green">green</option>
                      <option value="grey">grey</option>

                      <option value="yellow">yellow</option>
                      <option value="olive green">olive green</option>
                      <option value="maroon">maroon</option>
                      <option value="nude">nude</option>
                      <option value="purple">purple</option>
                      <option value="pink">pink</option>
                      <option value="orange">orange</option>
                      <option value="brown">brown</option>
                      <option value="beige">beige</option>
                      <option value="khaki">khaki</option>
                      <option value="navy blue">navy blue</option>
                      <option value="silver">silver</option>
                      <option value="gold">gold</option>
                      <option value="multi">multi</option>
                   </select>
                </div>
              <div>
                  <label>Available sizes</label>
                  <div>
                    <select ref={prodSizes}>
                      <option value="XS">Select Type</option>
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                      <option value="XXXL">XXXL</option>
                   </select>
                 </div>
              </div>
              <div>
               <label>Price</label>
                <div>
                  <input
                   type="number"
                   step="0.01"
                    placeholder="Price"
                   ref={prodPrice}
                  />
                </div>
              </div>
             <div>
              <label> Quantity</label>
                <div>
                  <input type="number" placeholder="Quantity" ref={prodQty}/>
                </div>
             </div>
                <button type="submit">Add</button>
             </div>
            </form>
            }
      </div>
    )

export default Add;


    );
}


