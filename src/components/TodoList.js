import React from 'react'
import TodoExpandable from './TodoExpandable'
import {connect} from "react-redux"

class TodoList extends React.Component{
    render(){
        return (
            <div>
                <TodoExpandable objects={this.props.todoList}/>
            </div>);
    }
}

export default connect(state => ({todoList: state.todo}), null)(TodoList)