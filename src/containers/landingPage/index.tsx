import React from "react";
import SearchBar from "../../components/searchBar";
import messages from "../../i18n";
import logo from '../../assets/img/logo.svg';


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
