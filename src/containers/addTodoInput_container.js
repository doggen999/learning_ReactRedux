import React, {Component} from 'react';
import { connect } from 'react-redux'

import { addTodo } from '../actions/actions';

let AddTodo = ({dispatch}) => {
  let input

  return (
    <form onSubmit={e => {
      e.preventDefault();
      dispatch(addTodo(input.value));
      input.value='';}}>
    <input ref={node => {input = node}}/>
    <button type="subtmi">Add</button>
    </form>
  )
}



export default connect()(AddTodo)
