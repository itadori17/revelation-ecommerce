import React from 'react';

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
                Oder
            </button>
        </div>
        </>

    )
}

export default HomePage;