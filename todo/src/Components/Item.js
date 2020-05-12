import React from 'react'

const Item = props => {

    return (
        <div 
                onClick={(e) =>{
                    console.log('hello from onClick')
                    const type = (props.todo.completed ? 'ACTIVATE_TODO' : 'COMPLETE_TODO')
                        props.dispatch({ 
                        type: type, 
                        payload: props.todo.id } )
                        
                    }} 
                className={props.todo.completed === true ? 'todo-item completed' : 'todo item'}>
            <h2>{props.todo.title}</h2>
        </div>
    )
}
export default Item