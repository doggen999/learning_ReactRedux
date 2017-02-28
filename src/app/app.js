import React, { Component } from 'react';

import AddTodoInput from '../containers/addTodoInput_container'
import TodoList from '../containers/todoList'

class App extends Component {
  render() {
    return(
      <div>
        <AddTodoInput/>
        <TodoList/>
      </div>
    )
  }
}

export default App
