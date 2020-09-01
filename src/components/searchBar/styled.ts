import styled from "styled-components";
import { StyledProps } from "../../types/searchBar";

export const SuggestionsContaner = styled.div`
    background-color: ${({ hasBackgroundColor } : StyledProps ) => hasBackgroundColor ? "var(--color-secondary-light)" : ""};
    padding: 10px 22px;
    color: var(--color-text);
    font-size: 1rem;
    cursor: pointer;
    text-align: left;
    border-bottom: 1px solid var(--color-border);

    div.item-highlight {
        font-weight: 400;
        font-size: 1.2rem;
        font-family: 'Lato', sans-serif;
        em {
            font-weight: 700;
        }
    }

    div.item-description {
        font-weight: 100;
    }
`;

export const menuStyle : {[Key: string] : any} = {
    fontSize: "12px",
    maxWidth: "600px",
    width: "80%",
    margin: "0 auto",
    border: "1px solid var(--color-border)",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    borderBottom: "none",
    maxHeight: "300px",
    overflowY: "scroll",
};

export const inputStyle : {[Key: string] : any} = {
    color: "var(--color-primary-dark)",
    textAlign: "center",
    maxWidth: "600px",
    width: "80%",
    height: "48px",
    padding: "10px 5px 10px 20px",
    border: "none",
    borderBottom: "2px solid var(--color-border)",
    fontSize: "2.4rem",
    fontWeight: 100,
    fontFamily: "'Lato', sans-serif",
    margin: "0 auto",
    outline: "none",
};

export const wrapperStyle = {
    width: "600px",
    margin: "0 auto"
};
