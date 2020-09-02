import { githubAPI } from "../../network";
import { ThunkDispatch } from "redux-thunk";
import { RootReducerType } from "../../types";
import { Action } from "redux";
import {
    GET_PACKAGE_SUGGESTION_REQ,
    GET_PACKAGE_SUGGESTION_SUC,
    GET_PACKAGE_SUGGESTION_FAIL,
    SET_PACKAGE_INFO,
    SET_USER_PACKAGE_TO_PROCESS,
} from "../actionTypes";
import { PackageInfo } from "../../types";

/** GET_PACKAGE ACTIONS */

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

/** Get suggestions from github, dispatches API call */
export const getSuggestions = (query: string) => {
    return (dispatch: ThunkDispatch<RootReducerType, null, Action<string>>) => {
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


/** REDUX ONLY ACTIONS */

/** set package and version on reducer */
export const setPackageInfo = (packageInfo : PackageInfo) => ({
    type: SET_PACKAGE_INFO,
    payload: packageInfo,
});

/** Set user package to process */
export const setUserPackageToProcess = (packageName : string) => ({
    type: SET_USER_PACKAGE_TO_PROCESS,
    payload: packageName,
});