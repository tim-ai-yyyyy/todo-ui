import {Menu, Sidebar} from "semantic-ui-react";
import React from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react';
import {connect} from "react-redux";
import {addTodoList, toggleSideBar, getToDoList} from "../actions/index";

class SideBar extends React.Component {

    state = { name: '', description: '' }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        const { name, description } = this.state

        this.props.addTodoList( { name, description } )
        this.setState({name: '', description: ''})

        this.props.toggleSideBar(this.props.sideBarVisibility)
    }

    render() {
        return (
            <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                vertical
                visible={this.props.sideBarVisibility}
                width='wide'
            >
                <Menu.Item as='h1'>
                    ADD TODO
                </Menu.Item>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Input
                        onChange={this.handleChange}
                        value={this.state.name}
                        name="name"/>
                    <Form.Input
                        onChange={this.handleChange}
                        value={this.state.description}
                        name="description"/>
                    <Button
                        type='submit'>DONE</Button>
                </Form>
            </Sidebar>
        )
    }
}

const mapStateToProps = state => ({ todo: state.todo, sideBarVisibility: state.sideBarVisibility })

export default connect(mapStateToProps, { addTodoList, toggleSideBar , getToDoList})(SideBar);