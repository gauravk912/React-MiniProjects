//only this one method is needed but we will also call 1 more method for nano id
import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos:[{id:1,text:"hello world"}]
}

export const todoSlice= createSlice({
    name: 'todo',
    initialState,
    //property and function
    reducers:{
        addTodo: (state,action) =>{
            const todo = {
                id:nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) =>{
            state.todos = state.todos.filter ((todo) => 
                todo.id !== action.payload )
        }

    }
})

export const {addTodo,removeTodo} =  todoSlice.actions

export default todoSlice.reducer