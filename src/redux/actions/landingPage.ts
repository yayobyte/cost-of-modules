import { githubAPI, localAPI } from "../../network";
import { ThunkDispatch } from "redux-thunk";
import { RootReducerType } from "../../types";
import { Action } from "redux";
import {
    GET_PACKAGE_SUGGESTION_REQ,
    GET_PACKAGE_SUGGESTION_SUC,
    GET_PACKAGE_SUGGESTION_FAIL,

    GET_DEPENDENCY_REQ,
    GET_DEPENDENCY_SUC,
    GET_DEPENDENCY_FAIL,

    //Redux only actions
    SET_PACKAGE_INFO,
    SET_USER_PACKAGE_TO_PROCESS,
    SET_PAGE,
} from "../actionTypes";
import { PackageInfo, Page } from "../../types";

/** GET_PACKAGE SUGGESTIONS ACTIONS */

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
    return async (dispatch: ThunkDispatch<RootReducerType, null, Action<string>>) => {
        dispatch(getSuggestionsRequest());
        try {
            const result = await githubAPI.get("/search/suggestions", { params: { q: query } });
            dispatch(getSuggestionsSuccess(result.data));
        }
        catch (error) {
            dispatch(getSuggestionsFail(error));
        }
    };
};
/** END GET_PACKAGE SUGGESTIONS ACTIONS */

/** GET_DEPENDENCY ACTIONS */

const getDependencyRequest = () => ({
    type: GET_DEPENDENCY_REQ,
});

const getDependencySuccess = (result: Array<{[Key: string] : any}>) => ({
    type: GET_DEPENDENCY_SUC,
    payload: result,
});

const getDependencyFail = (error: any) => ({
    type: GET_DEPENDENCY_FAIL,
    payload: error,
});

export const getDependency = (name : string) => {
    return async (dispatch: ThunkDispatch<RootReducerType, null, Action<string>>) => {
        dispatch(getDependencyRequest());
        try {
            const result = await localAPI.get(`package-history?package=${name}`);
            dispatch(getDependencySuccess(result.data));
        }
        catch (error) {
            dispatch(getDependencyFail(error.data));
        }
    }
};
/** END GET_DEPENDENCY ACTIONS */


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

/** Set page */
export const setPage = (page : Page) => ({
    type: SET_PAGE,
    payload: page,
});

