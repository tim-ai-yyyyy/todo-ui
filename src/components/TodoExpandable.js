import React from 'react'
import { Accordion, Label, Message } from 'semantic-ui-react'

let options = []

const mapToOptions = (props) => {
    if(props.length !== 0){
        options = []
        props.forEach(item => {
            options.push({key: item.name, title: item.name, content: {content: <div>{item.description}</div>}})
        })
    }
}

const TodoExpandable = (props) => {
    mapToOptions(props.objects);
    return <Accordion defaultActiveIndex={0} panels={options} styled />
}

export default TodoExpandable