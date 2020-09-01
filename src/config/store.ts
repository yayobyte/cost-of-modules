import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { mainReducer } from "../redux/reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    store: mainReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    ),
);

export default store;
