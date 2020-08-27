import React, { useState, useEffect } from "react";
import Autocomplete from "react-autocomplete";
import messages from "../../i18n";
import { inputStyle, menuStyle, SuggestionsContaner, wrapperStyle} from "./styled";

const items = [
    { highlight: 'react', description: "javascript library for building things..." },
    { highlight: 'redux', description: "javascript library for storing things..." },
    { highlight: 'react-redux',  description: "javascript library for conecting react and redux" }
];


const SearchBar = () => {
    const [value, setValue] = useState("");
    const [selected, setSelected] = useState("");

    useEffect(() => {
        console.log(selected);
    }, [selected]);
    return (
        <Autocomplete
            wrapperStyle={wrapperStyle}
            inputProps={{
                placeholder: messages.landingPage.inputPLaceholder,
                style: inputStyle
            }}
            menuStyle={menuStyle}
            getItemValue={(item) => item.label}
            items={items}
            renderItem={(item, isHighlighted) =>
                <SuggestionsContaner hasBackgroundColor={isHighlighted} key={`key-${item.highlight}`}>
                    <div className="item-highlight">{item.highlight}</div>
                    <div className="item-description">{item.description}</div>
                </SuggestionsContaner>
            }
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onSelect={(val) => setSelected(val)}
        />
    );
}

export default SearchBar;
