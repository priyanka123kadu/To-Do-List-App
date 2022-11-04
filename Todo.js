import React from 'react';


const Todos = ({todos, deleteTodo})  => {

    const todoList = todos.map( (todo) => {
        return(
        <div className='collection-item' key={todo.id}>
            <span className='blue-text' onClick={() => {deleteTodo(todo.id)}}>{todo.item}</span>
        </div>
        )
    })
    return (
        <div className='todos collection'> 
            {todoList}
        </div>
    )
}

export default Todos;