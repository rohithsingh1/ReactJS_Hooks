import React, {useState, useRef, useEffect} from 'react'
import useDebounce from './hooks/useDebounce'

function DebounceImplementation() {

    const [query, setQuery]=useState('')

    const debounceSearch=useDebounce((searchTerm) => {
        console.log("Searching for:", searchTerm);
        // Here you could call an API, like fetch(`api?q=${searchTerm}`)
    }, 800)

    const handleChange=(e) => {
        setQuery(e.target.value);
        debounceSearch(e.target.value); // Call the debounced function
    }


    return (
        <div>
            <h3>Search User:</h3>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Type something..."
            />
        </div>
    )
}

export default DebounceImplementation