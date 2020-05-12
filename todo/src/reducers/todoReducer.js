export const reducer = (state, action) => {

    const toggledTodos = newValue => {
        const newTodos = state.todos.map( item => {
            if (item.id === action.payload) {
                item.completed = newValue;
                return item
            } else return item
        })
        return newTodos
    }

    switch(action.type)  {
    case "TYPE_TODO":
        return { ...state, newTask: action.payload}
      case "ADD_TODO":
        return { ...state, newTask: '', todos: [...state.todos, action.payload] }
      case "COMPLETE_TODO":
          console.log('entering complete todo')

        return { ...state, todos: toggledTodos(true), }
        case "ACTIVATE_TODO":
          console.log('entering activate todo')

        return { ...state, todos: toggledTodos(false), }
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