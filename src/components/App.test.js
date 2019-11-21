import React from 'react';
import {shallow, mount} from 'enzyme';
import Sidebar from './SideBar'
import App from './App';
import {createStore} from "redux";
import reducers from "../reducers/index";
import {Provider} from "react-redux";

const store = createStore(reducers)

describe('<App />', () => {

    it('renders without crashing', () => {
        const wrapper = mount(<Provider store={store}><App /></Provider>)
        expect(wrapper.find('button').length).toBe(2);
    });

})

describe('<Sidebar />', () => {
    it('shoulder render sidebar on click of add', () => {
        const wrapper = mount(<Provider store={store}><App /></Provider>)
        const button = wrapper.find('#AddButton')

        button.simulate('click', () => null)
        expect(wrapper.find('Sidebar').props().visible).toBe(true)

        button.simulate('click', () => null)
        expect(wrapper.find('Sidebar').props().visible).toBe(false)
    })

    it('should render all elements', () => {
        const sidebar = mount(<Provider store={store}><Sidebar/></Provider>)

        expect(sidebar.find('h1').first().text()).toBe("ADD TODO")
        expect(sidebar.find('form').length).toBe(1)
        expect(sidebar.find('form').find('input').length).toBe(2)
        expect(sidebar.find('form').find('Button').length).toBe(1)
    })

    it('Add todo button', () => {

    })
})