import React from "react";
import { createContext,useContext } from "react";
// import { ThemeContext } from './theme';

export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme: () =>{},
    lightTheme: () =>{}
})

export const ThemeProvider  = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}