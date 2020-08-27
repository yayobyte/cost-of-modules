import React from "react";
import messages from "../../i18n";
import logo from '../../assets/img/logo.svg';
import SearchBar from "../../components/searchBar";

const LandingPage = () => {
    
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>{messages.landingPage.subtitle}</p>
            <SearchBar />
        </div>
    )
};

export default LandingPage;