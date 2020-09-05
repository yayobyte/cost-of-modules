import {
    GET_PACKAGE_SUGGESTION_REQ,
    GET_PACKAGE_SUGGESTION_SUC,
    GET_PACKAGE_SUGGESTION_FAIL,

    SET_PACKAGE_INFO,
    SET_USER_PACKAGE_TO_PROCESS,
    SET_PAGE,
} from "../actionTypes";
import { RootReducerType, ReducerActionType } from "../../types";

const initialState : RootReducerType = {
    query: "",
    results: [],
    loading: false,
    message: null,
    packageName: null,
    version: null,
    userSelectedPackage: null,
    page: "search",
}

export const mainReducer = (store = initialState, action: ReducerActionType) => {
    switch(action.type) {
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
