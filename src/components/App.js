import React from 'react';
import './App.css';
import SideBar from "./SideBar";
import {connect} from "react-redux";
import {toggleSideBar} from "../actions/index";
import TodoList from "./TodoList";

class App extends React.Component {
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

export default connect(mapStateToProps, { toggleSideBar })(App);