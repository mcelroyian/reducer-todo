import React from 'react'

const Item = props => {

    return (
        <div    id={props.todo.id} 
                onClick={(e) =>{props.dispatch({ 
                        type: 'TOGGLE_COMPLETE', 
                        payload: e.currentTarget.id } )
                    }} 
                className={props.todo.completed === true ? 'todo-item completed' : 'todo item'}>
            <h2>{props.todo.title}</h2>
        </div>
    )
}
export default Item