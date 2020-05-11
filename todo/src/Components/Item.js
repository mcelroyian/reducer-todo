import React from 'react'

const Item = props => {

    return (
        <div className={props.todo.completed === true ? 'todo-item completed' : 'todo item'}>
            <h2>{props.todo.title}</h2>
        </div>
    )
}
export default Item