import {TODO, TOGGLE_SIDEBAR} from "./action-types";

export const addTodoList = todo => ({
    type: TODO,
    payload: todo
})

export const toggleSideBar = status => ({
    type: TOGGLE_SIDEBAR,
    payload: !status
})