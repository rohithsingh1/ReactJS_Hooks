import React, {useState, useMemo} from "react";
import {ThemeContext} from "./theme-context"

export default function ThemeProvider({children}) {
    const [theme, setTheme]=useState("light")

    const toggleTheme=() => {
        setTheme((t) => t==="light"? "dark":"light")
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}} >
            {children}
        </ThemeContext.Provider>
    )
}