import React from 'react'
import { Accordion, Label, Message } from 'semantic-ui-react'

const options =
    [{
        key: 'Jenny Hess',
        title: "Description",
        content: {content: <div>Hello</div>}
    }]

const TodoExpandable = () => <Accordion defaultActiveIndex={0} panels={options} styled />

export default TodoExpandable