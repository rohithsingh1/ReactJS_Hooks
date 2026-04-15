import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const todoSlice=createSlice({
    initialState: [],
    name: "todos",
    reducers: {
        todoAdded(state, action) {
            console.log("action todoAdded>>>>>>", action);

            state.push({
                id: Date.now(),
                text: action.payload.text,
                isCompleted: false
            })
        },
        todoToggled(state, action) {
            const todo=state.find((todo) => todo.id===action.payload)
            todo.isCompleted=!todo.isCompleted
        }
    },
    extraReducers: (builder) => {
        builder.addCase(asyncTodoAdd.pending, () => {
            //console.log("pending state>>>>>>");
        }).
            addCase(asyncTodoAdd.fulfilled, (state, action) => {
                //console.log("state,action in fullfilled state>>>>>>", state, action);
                state.push({
                    id: Date.now(),
                    text: action.payload.text,
                    isCompleted: false
                })
            })
    }
})

export const asyncTodoAdd=createAsyncThunk("todos/asyncTodoAdd", async (action) => {
    // console.log("action>>>>>>>", action);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(action)
        }, 1000)
    })
})

export const {todoAdded, todoToggled}=todoSlice.actions
export const todoReducer=todoSlice.reducer