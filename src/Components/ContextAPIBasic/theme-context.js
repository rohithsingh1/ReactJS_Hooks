import React from "react";

export const ThemeContext=React.createContext({
    theme: "light",            // default (used only if no Provider)
    toggleTheme: () => { }      // placeholder function
})