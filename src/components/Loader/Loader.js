import React, { useState } from 'react'
import './LoaderStyle.css'

function Loader ({loading}) {


    return (
        <>
        {
            loading &&  <div className='loader'><h1>Loading</h1></div>
             
        }
         
        </>
      
    )
}

export default Loader