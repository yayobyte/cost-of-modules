import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import Autocomplete from "react-autocomplete";
import messages from "../../i18n";
import {
    getSuggestions,
    setPackageInfo,
    setUserPackageToProcess,
    setPage,
    getDependency,
} from "../../redux/actions";
import { useSuggestions, usePackageInfo, useUserSelectedPackage } from "../../redux/store";
import { inputStyle, menuStyle, SuggestionsContaner, wrapperStyle} from "./styled";

const SearchBar = () => {
    /** Hooks */
    const dispatch = useDispatch();
    /** Custom Hooks */
    const { suggestions } = useSuggestions();
    const { packageName } = usePackageInfo();
    const { userSelectedPackage} = useUserSelectedPackage();
    
    /** Internal States */
    const [ value, setValue ] = useState(userSelectedPackage || "");
    
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
        dispatch(getDependency(val));
        dispatch(setPage("graph"));
    }
    
    return (
        <Autocomplete
            autoHighlight
            wrapperStyle={wrapperStyle}
            inputProps={{
                placeholder: messages.landingPage.inputPLaceholder,
                style: inputStyle
            }}
            menuStyle={menuStyle}
            getItemValue={(item : {[Key: string]: any}) => item.package.name ? item.package.name : ""}
            items={suggestions || []}
            renderItem={renderList}
            value={value}
            onChange={(e: any) => getValueAndVersion(e.target.value)}
            onSelect={selectValue}
        />
    )
};

export default SearchBar;
