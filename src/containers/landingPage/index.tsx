import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import Autocomplete from "react-autocomplete";
import messages from "../../i18n";
import logo from '../../assets/img/logo.svg';
import { getSuggestions, setPackageInfo, setUserPackageToProcess } from "../../redux/actions";
import { useSuggestions, usePackageInfo } from "../../redux/store";
import { inputStyle, menuStyle, SuggestionsContaner, wrapperStyle} from "./styled";

const LandingPage = () => {
    /** Hooks */
    const dispatch = useDispatch();
    const [ value, setValue ] = useState("");
    /** Custom Hooks */
    const { suggestions } = useSuggestions();
    const { packageName } = usePackageInfo();

    /** Effects */
    useEffect(() => {
        if(value.length >= 3 && packageName)  {
            dispatch(getSuggestions(packageName));
        }
    }, [packageName]);

    /** Functions */
    /** Menu Item to render on Autocomplete */
    const renderList = useCallback((item: any, isHighlighted: any) => (
        item.highlight ? (
            <SuggestionsContaner hasBackgroundColor={isHighlighted} key={`key-${item.package?.name}`}>
                <div className="item-highlight" dangerouslySetInnerHTML={{__html: item.highlight} } />
                <div className="item-description">{item.package.description}</div>
            </SuggestionsContaner>
        ) : <div />
    ), []);
    
    /** Get package name and version from the user */
    const getValueAndVersion = useCallback((query : string) => {
        const [packageName, version] = query.split("@");
        dispatch(setPackageInfo({ packageName, version }));
        setValue(query);
    }, []);

    /** SetPackage selected by user */
    const selectValue = (val : string) => {
        dispatch(setUserPackageToProcess(val));
    }
    
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>{messages.landingPage.subtitle}</p>
            <Autocomplete
                autoHighlight
                wrapperStyle={wrapperStyle}
                inputProps={{
                    placeholder: messages.landingPage.inputPLaceholder,
                    style: inputStyle
                }}
                menuStyle={menuStyle}
                getItemValue={(item) => item.package.name ? item.package.name : ""}
                items={suggestions || []}
                renderItem={renderList}
                value={value}
                onChange={(e) => getValueAndVersion(e.target.value)}
                onSelect={selectValue}
            />
        </div>
    )
};

export default LandingPage;