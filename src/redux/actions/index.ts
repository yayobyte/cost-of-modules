import { githubAPI } from "../../network";
import { ThunkDispatch } from "redux-thunk";
import { StoreType } from "../../types";
import { Action } from "redux";
import {
    GET_PACKAGE_SUGGESTION_REQ,
    GET_PACKAGE_SUGGESTION_SUC,
    GET_PACKAGE_SUGGESTION_FAIL,
} from "../actionTypes";

const getSuggestionsRequest = () => ({
    type: GET_PACKAGE_SUGGESTION_REQ
});

const getSuggestionsSuccess = (data: [{[Key: string]: any}]) => ({
    type: GET_PACKAGE_SUGGESTION_SUC,
    payload: data,
});

const getSuggestionsFail = (message: string) => ({
    type: GET_PACKAGE_SUGGESTION_FAIL,
    payload: message,
});

export const getSuggestions = (query: string) => {
    return (dispatch: ThunkDispatch<StoreType, null, Action<string>>) => {
        dispatch(getSuggestionsRequest());
        githubAPI.get("/search/suggestions", { params: { q: query } })
        .then((data) => {
            dispatch(getSuggestionsSuccess(data.data));
        })
        .catch((error) => {
            dispatch(getSuggestionsFail(error));
        });
    };
};
