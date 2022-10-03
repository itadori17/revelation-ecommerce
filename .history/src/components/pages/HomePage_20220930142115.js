import React from 'react';
import 
const HomePage = () => {
    return(
        <>
        <div className='container'>
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
        </>

    )
}

export default HomePage;