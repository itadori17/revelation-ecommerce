import React from 'react';
import '../styles/homepage.css'
const HomePage = () => {
    return(
        <>
        <div className='btns'>
            <button className='tabs'>
                Inventory
            </button>
            <br/>
            <button className='tabs'>
                Pending Orders
            </button>
            <br/>
            <button className='tabs'>
                Order History
            </button>
        </div>
        <div className='cmscenter'>

        </div>

        </>

    )
}

export default HomePage;