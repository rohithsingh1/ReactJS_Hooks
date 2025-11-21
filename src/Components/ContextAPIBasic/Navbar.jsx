import React from "react";
import {ThemeContext} from "./theme-context"

export default function Navbar() {
    const {theme, toggleTheme}=React.useContext(ThemeContext)

    return (
        <nav style={{
            padding: "1rem",
            background: theme==="light"? "#fff":"#222",
            color: theme==="light"? "#000":"#fff"
        }}>
            <span>My App</span>
            <button onClick={toggleTheme} style={{marginLeft: 12}}>
                Toggle to {theme==="light"? "dark":"light"}
            </button>
        </nav>
    )
}