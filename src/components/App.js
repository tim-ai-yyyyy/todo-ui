import React from 'react';
import './App.css';
import SideBar from "./Sidebar";
import {connect} from "react-redux";
import {toggleSideBar, getToDoList} from "../actions/index";
import TodoList from "./TodoList";

class App extends React.Component {
    componentWillMount() {
        this.props.getToDoList();
    }

    render(){
        return (
            <div className="App">
                <SideBar />
                <TodoList/>
                <button
                    id="AddButton"
                    className='ui button'
                    onClick={ () => this.props.toggleSideBar(this.props.sideBarVisibility)}>add</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({ sideBarVisibility: state.sideBarVisibility })

export default connect(mapStateToProps, { toggleSideBar, getToDoList })(App);