import './App.css';
import React, { useState } from "react";
import Welcome from './components/Welcome';
import Offer from './components/Offer';
import Request from './components/Request';
import OfferForm from './components/OfferForm';
import RequestForm from './components/RequestForm';

function App() {

  const [page, setPage] = useState("welcome");


  return (
    <div className="App">
      {page == "welcome" ? <Welcome setPage = {setPage} /> : null}
      {page == "offers" ? <Offer setPage = {setPage} /> : null}
      {page == "requests" ? <Request setPage = {setPage} /> : null}
      {page == "offer_form" ? <OfferForm setPage = {setPage} /> : null}
      {page == "request_form" ? <RequestForm setPage = {setPage} /> : null}
      
    </div>
  );
}

export default App;
