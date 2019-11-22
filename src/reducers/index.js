import {combineReducers} from "redux";
import {TODO, TOGGLE_SIDEBAR, TODO_GET} from "../actions/action-types";

const todoReducer = (state = [], action) => {
    if(action.type === TODO_GET)
        return action.payload

    return state;
}

const sidebarReducer = (state = false, action) => {
    if(action.type === TOGGLE_SIDEBAR)
        return action.payload

    return state;
}

const putReducer = (state = {}, action) => {
    if(action.type === TODO){
        console.log("Executed Action")
        return action.payload
    }
    return state
}

export default combineReducers({put: putReducer, todo: todoReducer,
    sideBarVisibility: sidebarReducer})