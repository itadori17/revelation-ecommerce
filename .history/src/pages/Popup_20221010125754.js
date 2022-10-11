import React from 'react';

import { FaTimesCircle } from "react-icons/fa";


const Popup = (props) => {
  return (
    <div className='popup-box'>
        <div className='box'>
        <button className='btn-close' onClick={props.handleClose} ><FaTimesCircle size={25} /></button>
        {props.content}
        </div>
      
    </div>
  )
}

export default Popup
