import React from 'react'

function Welcome({setPage}) {

    const handleClickOffers = () => {
        setPage('offers');
    }

    const handleClickRequests = () => {
        setPage('requests');
    }

    return (
        <div>
            <h1>Hey everyone!</h1>
            <button onClick = {handleClickOffers}>Offers</button>
            <button onClick = {handleClickRequests}>Requests</button>

        </div>
    )
}

export default Welcome
