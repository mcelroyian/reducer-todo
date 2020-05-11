export const reducer = (state, action) => {
    switch(action.type)  {
    case "TYPE_TODO":
        return { ...state, newTask: action.payload}
      case "ADD_TODO":
          debugger
        return { ...state, newTask: '', todos: [...state.todos, action.payload] }
      case "TOGGLE_COMPLETE":
        return { ...state,  }
      default:
        return state
    }
  }

export const initialState = {
    newTask: '',
    todos:  [{
        id: 123456789,
        title: 'Learn about stuff',
        completed: false
        },
        {
        id: 987456789,
        title: 'Do Stuff',
        completed: false
        },
        {
        id: 8569842,
        title: 'Break Things',
        completed: true
        },
    ]
}