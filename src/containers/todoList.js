import React, {Component} from 'react';
import {connect} from 'react-redux';
import Todo from '../components/todo_component';
import { toggleTodo } from '../actions/actions';

class TodoList extends Component {
  render() {
    const {onTodoClick, todos} = this.props;
    return (
      <ul>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            onClick={() => onTodoClick(todo.id)}
            {...todo}/>
        )}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
};

const mapDispatchToProps = (dispath) => {
  return {
    onTodoClick: (id) => {
      dispath(toggleTodo(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
