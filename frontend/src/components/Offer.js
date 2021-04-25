import React from 'react'

function Offer({setPage}) {

    const handleClickRequest = () => {
        setPage('requests');
    }

    return (
        <div>
            <h1>Offers</h1>
            <button onClick = {handleClickRequest}>Can't find a ride? Check the Requests Page</button>
        </div>
    )
}

export default Offer
