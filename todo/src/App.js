import React, { useReducer } from 'react';
import { reducer, initialState } from './reducers/todoReducer'
import List from './Components/List'
import './App.css';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)



  return (
    <div className="App">
     <header>
       <h1>Ian's Todos</h1>
     </header>
       <List todos={state.todos} newTask={state.newTask} dispatch={dispatch} />
    </div>
  );
}

export default App;
