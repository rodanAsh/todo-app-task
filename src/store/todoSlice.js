import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("todos")) || []

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers: {
        addTodo(state,{payload}){
            state.push(payload)
            localStorage.setItem("todos",JSON.stringify(state))
        },
        removeTodo(state,{payload}) {
            const updatedTodo = state.filter(todo => todo.id !== payload)
            localStorage.setItem("todos",JSON.stringify(updatedTodo))
            return updatedTodo;
        },
        completedTodo(state,{payload}){
            const updatedTodos = state.map((todo) => 
                todo.id === payload ? {...todo,isCompleted: !todo.isCompleted} : todo
            )
            localStorage.setItem("todos", JSON.stringify(updatedTodos))
            return updatedTodos;
        }
    }
})

export const {addTodo,removeTodo,completedTodo} = todoSlice.actions;
export default todoSlice.reducer