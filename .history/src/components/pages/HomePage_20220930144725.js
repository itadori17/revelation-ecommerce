import React from 'react';
import '../styles/homepage.css'
const HomePage = () => {
    return(
        <>
        <div className='btns'>
            <button className='tab1'>
                Inventory
            </button>
            <br/>
            <button className='tab2'>
                Pending Orders
            </button>
            <br/>
            <button className='tabs'>
                Order History
            </button>
        </div>
        <div className='cmscenter'>
            CMS 
            CENTRE
        </div>

        </>

    )
}

export default HomePage;