import { createContext,useContext } from "react";


export const TodoContext = createContext({
    todos: [
        {
            id:1,
            todo: "Todo Msg",
            completed:false,
        }
    ],
    addTodo:(todo) =>{},
    updateTodo:(id, todo)=>{},
    delete:(id) => {},
    toggleComplete:(id) =>{}
})

export const useTodo = () =>{
    return useContext(TodoContext) //useContext always needs a context
}

export const TodoProvider = TodoContext.Provider