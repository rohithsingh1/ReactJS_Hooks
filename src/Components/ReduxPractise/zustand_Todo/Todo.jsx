import React, {useState} from 'react'
import {useTodoStore} from './TodoReducer'

function Todo() {
    const [text, setText]=useState('')
    const {todos, addTodo, asyncAddTodo}=useTodoStore()

    const addTodoHandler=() => {
        if (text.trim().length<=0) {
            alert("text is required")
            return
        }
        const obj={
            id: Date.now(),
            text
        }
        // addTodo(obj)
        asyncAddTodo(obj)
    }
    return (
        <div>
            <h2>Todo</h2>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={addTodoHandler} >Add Todo</button>
            <div style={{marginTop: 12, display: "flex", flexDirection: "column", gap: 12}} >
                {todos?.map((todo) => {
                    return <div key={todo?.id} >
                        <div>{todo.text}</div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Todo