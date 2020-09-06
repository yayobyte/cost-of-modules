import {
    GET_PACKAGE_SUGGESTION_REQ,
    GET_PACKAGE_SUGGESTION_SUC,
    GET_PACKAGE_SUGGESTION_FAIL,

    GET_DEPENDENCY_REQ,
    GET_DEPENDENCY_SUC,
    GET_DEPENDENCY_FAIL,

    SET_PACKAGE_INFO,
    SET_USER_PACKAGE_TO_PROCESS,
    SET_PAGE,
} from "../actionTypes";
import { RootReducerType, ReducerActionType } from "../../types";

const initialState : RootReducerType = {
    query: "",
    results: [],
    dependency: {},
    loading: false,
    message: null,
    packageName: null,
    version: null,
    userSelectedPackage: null,
    page: "search",
}

export const mainReducer = (store = initialState, action: ReducerActionType) => {
    switch(action.type) {
        // Get Package suggestion listeners
        case GET_PACKAGE_SUGGESTION_REQ:
            return ({
                ...store,
                loading: true,
                message: null,
            });
        case GET_PACKAGE_SUGGESTION_SUC:
            return ({
                ...store,
                loading: false,
                message: null,
                results: action.payload,
            });
        case GET_PACKAGE_SUGGESTION_FAIL:
            return ({
                ...store,
                loading: false,
                message: action.payload,
            });
        
        // Get Dependency Listeners
        case GET_DEPENDENCY_REQ:
            return ({
                ...store,
                loading: true,
                message: null,
            });
        case GET_DEPENDENCY_SUC:
            return ({
                ...store,
                loading: false,
                message: null,
                dependency: action.payload,
            });
        case GET_DEPENDENCY_FAIL:
            return ({
                ...store,
                loading: false,
                message: action.payload,
            });
        
        //Redux only actions
        case SET_PACKAGE_INFO:
            return({
                ...store,
                ...action.payload,
            });
        case SET_USER_PACKAGE_TO_PROCESS:
            return({
                ...store,
                userSelectedPackage: action.payload,
            });
        case SET_PAGE:
            return({
                ...store,
                page: action.payload,
            })
        default:
            return (store);
    }
};
