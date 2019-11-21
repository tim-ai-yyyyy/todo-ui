import {GETLIST, TOGGLE} from "./action-types";

export default function getToDoListReducer(state = [], action){
    if(action.type === GETLIST){
        return action.payload;
    }
}

export function toggleSideBar(state = false, action){
    if(action.type === TOGGLE){
        return action.payload;
    }
}