import React from 'react'

export const TodoItem = ({completed, id, title, toggleTodo, DeleteTodo}) => {

    
  
    return (
        <li>
            <label>
            <input type="checkbox" checked={completed} 
            onChange={e => toggleTodo(id, e.target.checked)}/>
            {title}
            </label>
            <button onClick={()=> DeleteTodo(id)} className="btn btn-danger">Delete</button>
        </li>
    )
}
