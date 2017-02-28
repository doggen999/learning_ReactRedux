const initialState = [{id: 1, text: 'do stuff', completed: true}, {id:2, text:"paint everything pink", completed: false}];

const todos = (state=initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      return state.map(
        todo => todo.id !== action.id ? todo : Object.assign({}, todo, {completed: !todo.completed})
      )
    case 'ADD_TODO':
      return [
        ...state,
        {id: action.id, text: action.text, completed: action.completed}
      ]
  }

  return state;
}

export default todos;
