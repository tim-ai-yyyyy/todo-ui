import {combineReducers} from "redux";
import {TODO, TOGGLE_SIDEBAR} from "../actions/action-types";

const todoReducer = (state = [], action) => {
    if(action.type === TODO)
        return [...state, action.payload]

    return state;
}

const sidebarReducer = (state = false, action) => {
    if(action.type === TOGGLE_SIDEBAR)
        return action.payload

    return state;
}

export default combineReducers({todo: todoReducer,
    sideBarVisibility: sidebarReducer})