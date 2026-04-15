import {configureStore} from "@reduxjs/toolkit";

import {todoReducer} from "./Components/ReduxPractise/Todo/todosSlice";

export const store=configureStore({
    reducer: {
        todos: todoReducer
    }
})
