import {create} from "zustand";

export const useTodoStore=create((set) => {
    return {
        todos: [],
        addTodo: (todo) => {
            set((state) => {
                return {
                    todos: [...state.todos, todo]
                }
            })
        },
        asyncAddTodo: async (todo) => {
            // const res=await fetch('https://jsonplaceholder.typicode.com/users');
            setTimeout(() => {
                set((state) => {
                    return {
                        ...state,
                        todos: [...state.todos, todo]
                    }
                })
            }, 1000)
        }
    }
})