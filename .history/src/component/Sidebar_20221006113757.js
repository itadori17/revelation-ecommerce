import React, { useState } from 'react';
import {
    FaBars,
    
   
 } from "react-icons/fa";

import {MdInventory, MdHistoryEdu, MdPendingActions} from "react-icons/md"
import { NavLink } from 'react-router-dom';
import '\'


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Inventory",
            icon:<MdInventory/>
        },
        {
            path:"/order",
            name:"Order History",
            icon:<MdHistoryEdu/>
        },
        {
            path:"/pending",
            name:"Pending Oders",
            icon:<MdPendingActions/>
        },
        
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1> */}
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;