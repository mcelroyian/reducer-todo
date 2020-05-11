export const reducer = (state, action) => {
    switch(action.type)  {
    case "TYPE_TODO":
        return { ...state, newTask: action.payload}
      case "ADD_TODO":
        return { ...state, newTask: '', todos: [...state.todos, action.payload] }
      case "TOGGLE_COMPLETE":
          const newTodos = state.todos.map(item => {
              if (item.id === action.payload) {
                  debugger
                  item.completed = !item.completed
                  return item
              } else return item
          })
          debugger
        return { ...state, todos: newTodos, }
      default:
        return state
    }
  }

export const initialState = {
    newTask: '',
    todos:  [{
        id: '123456789',
        title: 'Learn about stuff',
        completed: false
        },
        {
        id: '987456789',
        title: 'Do Stuff',
        completed: false
        },
        {
        id: '8569842',
        title: 'Break Things',
        completed: true
        },
    ]
}