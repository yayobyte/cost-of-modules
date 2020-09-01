import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Autocomplete from "react-autocomplete";
import { getSuggestions } from "../../redux/actions";
import { useSuggestions } from "../../redux/store";
import messages from "../../i18n";
import { inputStyle, menuStyle, SuggestionsContaner, wrapperStyle} from "./styled";

const items = [
    { highlight: 'react', description: "javascript library for building things..." },
    { highlight: 'redux', description: "javascript library for storing things..." },
    { highlight: 'react-redux',  description: "javascript library for conecting react and redux" }
];


const SearchBar = () => {
    /** Hooks */
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const [selected, setSelected] = useState("");
    /** Custom Hooks */
    const { suggestions } = useSuggestions();

    /** Effects */
    useEffect(() => {
        console.log(selected);
        console.log(value);
    }, [selected]);

    useEffect(() => {
        if(value.length >= 3)  {
            dispatch(getSuggestions(value));
        }
    }, [value]);

    const renderList = (item: any, isHighlighted: any) => {
        return (
            <SuggestionsContaner hasBackgroundColor={isHighlighted} key={`key-${item.highlight}`}>
                <div className="item-highlight" dangerouslySetInnerHTML={{__html: item.highlight} } />
                <div className="item-description">{item.package.description}</div>
            </SuggestionsContaner>
        )
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
            getItemValue={(item) => item.highlight}
            items={suggestions || []}
            renderItem={(i, s) => renderList(i, s)}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onSelect={(val) => setSelected(val)}
        />
    );
}

export default SearchBar;
