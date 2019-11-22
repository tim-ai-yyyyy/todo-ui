import React from 'react'
import TodoExpandable from './TodoExpandable'
import {connect} from "react-redux"

class TodoList extends React.Component{
    render(){
        console.log(this.props);
        return (
            <div>
                <TodoExpandable objects={this.props.todoList}/>
            </div>);
    }
}

export default connect(state => ({update: state.put, todoList: state.todo}), null)(TodoList)