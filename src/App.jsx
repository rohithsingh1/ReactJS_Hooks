import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route, useNavigate} from "react-router-dom";
import Gallery from "./Gallery";
import ImageDetail from "./ImageDetail"
// import ViewTransitions from './ViewTransitions/ViewTransitions'

function App() {
  const navigate=useNavigate();

  // View Transition wrapper for navigation
  const goTo=(path) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => navigate(path));
    } else {
      navigate(path);
    }
  };

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <ViewTransitions /> */}

      <Routes>
        <Route path="/" element={<Gallery goTo={goTo} />} />
        <Route path="/image/:id" element={<ImageDetail goTo={goTo} />} />
      </Routes>

    </>
  )
}

export default App
