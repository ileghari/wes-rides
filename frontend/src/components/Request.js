import React from 'react'

function Request({setPage}) {

    const handleClickRequest = () => {
        setPage('request_form');
    }

    const handeClickOffer = () => {
        setPage('offer_form');
    }

    return (
        <div>
            <h1>Request</h1>
            <button onClick = {handleClickRequest}>Create an Request</button>
            <button onClick = {handeClickOffer}>Create an Offer</button>
        </div>
    )
}

export default Request
