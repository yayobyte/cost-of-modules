import {
    GET_PACKAGE_SUGGESTION_REQ,
    GET_PACKAGE_SUGGESTION_SUC,
    GET_PACKAGE_SUGGESTION_FAIL,
} from "../actionTypes";
import { StoreType, ReducerActionType } from "../../types";

const initialState : StoreType = {
    query: "",
    results: [],
    loading: false,
    message: null,
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
        default:
            return (store);
    }
}