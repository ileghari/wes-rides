import React, {useState} from 'react';
import axios from "axios";

function RequestForm({setPage}) {
    
    const [data, setData] = useState({
        destination : "",
        date : "",
        means_of_transport : "",
        description : ""
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const [isNotSubmitted, setIsNotSubmitted] = useState(true);

    const handleChange = event => {
        const value = event.target.value;
        setData({
            ...data,
            [event.target.name] : value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();

        axios.post("http://localhost:8000/api/requests/", {destination : data.destination, date : data.date, means_of_transport : data.means_of_transport, description : data.description})
            .then(res => {
                setIsError(false);
            })       
            .catch(err =>{
                setIsError(true);
                setErrorMessage(err.response.data.title);
            });
                
        setIsNotSubmitted(false);
    }

    const handleClickMain = () => {
        setPage("welcome")
    }

    const handleClickOffer = () => {
        setPage("offers")
    }

    const handleClickRequest = () => {
        setPage("requests")
    }

    return (
        <div>
            { isNotSubmitted ? 
            <div>
                <form className = 'offer-form' onSubmit = {handleSubmit}>
                    <input
                        type = "text" 
                        placeholder = "Enter a Destination" 
                        value = {data.destination} 
                        name = "destination" 
                        className = "request-input"
                        onChange = {handleChange}>
                    </input>
                    <input
                        type = "date" 
                        placeholder = "Enter the Date" 
                        value = {data.date} 
                        name = "date" 
                        className = "request-input"
                        onChange = {handleChange}>
                    </input>
                    <input
                        type = "text" 
                        placeholder = "Enter the Means of Transport" 
                        value = {data.means_of_transport} 
                        name = "means_of_transport" 
                        className = "request-input"
                        onChange = {handleChange}>
                    </input>
                    <input
                        type = "text" 
                        placeholder = "Enter a Description" 
                        value = {data.description} 
                        name = "description" 
                        className = "request-input"
                        onChange = {handleChange}>
                    </input>
                    <button className = "offer-button">Submit a Request</button>
                </form>
                <p>{isError ? errorMessage : null}</p>
            </div>
            : 
            <div>
                <p>Your request has been submitted!</p>
                <button onClick = {handleClickMain}>Go back to our Main Page</button>
                <button onClick = {handleClickOffer}>Offers Page</button>
                <button onClick = {handleClickRequest}>Requests Page</button>
            </div>
            }
        </div>
    )
}

export default RequestForm
