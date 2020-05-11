import React from 'react'
import Item from './Item'

const List = props => {

    const handleChanges = e => {
        props.dispatch({ type:'TYPE_TODO', payload: e.target.value })
        
    }

    const onSubmit = (e) => {
        e.preventDefault()
        props.dispatch( 
            { type: "ADD_TODO", 
            payload: { 
                id: Date.now(), 
                title: props.newTask, 
                completed: false } } )
    }

    return (
        <main>
            <div className='form'>
                <form onSubmit={onSubmit}>
                    <input 
                        type='text'
                        name='newTask'
                        placeholder="What shall we do?"
                        onChange={handleChanges}
                        value={props.newTask}
                    />
                    <button>Add Todo</button>
                </form>
            </div>
            {props.todos.map(todo => <Item todo={todo} key={todo.id} dispatch={props.dispatch}/> )}
        </main>
    )
}
export default List