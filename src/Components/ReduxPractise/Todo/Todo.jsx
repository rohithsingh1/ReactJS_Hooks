import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {todoAdded, asyncTodoAdd} from "./todosSlice"

function Todo() {
    const [text, setText]=useState('')
    const todos=useSelector((state) => state.todos)
    const dispatch=useDispatch()

    const addTodoHandler=() => {
        if (text.trim().length<=0) {
            alert("text is required")
            return
        }
        // dispatch(todoAdded({text}))
        dispatch(asyncTodoAdd({text}))
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