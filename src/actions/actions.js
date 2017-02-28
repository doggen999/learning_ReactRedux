// setVisibilityFilter(filter)
let nextTodo = 0;

export const addTodo = text => ({type: 'ADD_TODO', id: nextTodo++, text: text, completed: false})

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
