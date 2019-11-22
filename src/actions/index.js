import {TODO, TOGGLE_SIDEBAR, TODO_GET} from "./action-types";
import axios from 'axios';

async function getFromDB(){
    return axios.get('http://localhost:8090/to-do-list')
}

async function putToDB(data){
    return axios.put('http://localhost:8090/to-do-list', {
        description: data.description,
        name: data.name
    });
}

export const getToDoList = () => {
    return function(dispatch) {
        getFromDB().then(
            response => dispatch(returnGetList(response.data))
        );
    }
}

const returnGetList = (data) => {
    return {
        type: TODO_GET,
        payload: data
    }
}

const refreshToDoRenderedList = (response) => {
    return function (dispatch) {
        console.log("Here");
        getFromDB().then(
            response => dispatch(returnGetList(response.data))
        )
    }
}

export const addTodoList = todo => {
    return function(dispatch) {
        putToDB(todo).then(
            response => dispatch(refreshToDoRenderedList(response.data))
        )
    }
}

export const toggleSideBar = status => ({
    type: TOGGLE_SIDEBAR,
    payload: !status
})