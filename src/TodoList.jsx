import React, { useState } from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos, toggleTodo, DeleteTodo}) => {


  return (
    <div>
        <ul className="list">
            {todos.length === 0 && "No Todos"}
            {todos.map(todo => {
            return (
                <TodoItem
                {...todo} key={todo.id} toggleTodo={toggleTodo} DeleteTodo={DeleteTodo}/>
            )
            })}
        </ul>
    </div>
  )
}
