import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route, useNavigate} from "react-router-dom";
import Accordion from './Components/AccordionTask/Accordion';
import ProgressBar from './Components/ProgressBar/ProgressBar';
import ProgressBar2 from './Components/ProgressBar2/ProgressBar2';
import GenerateTable from './Components/GenerateTable/GenerateTable';
import Pagination from './Components/Pagination/Pagination';
import ContactForm from './Components/ContactForm/ContactForm';
import FlightBooker from './Components/FlightBooker/FlightBooker';
import DebounceImplementation from './Components/DebounceImplementation/DebounceImplementation';
import StopWatch from './Components/StopWatch/StopWatch';
import StarRating from './Components/StarRating/StarRating';
import Tabs from './Components/Tabs/Tabs';
import ShowModal from './Components/ShowModal/ShowModal';
import ProgressBar3 from './Components/ProgressBar3/ProgressBar3';
import DataTable from './Components/DataTable/DataTable';
import ChessBoard from './Components/ChessBoard/ChessBoard';
import ThemeProvider from './Components/ContextAPIBasic/ThemeProvider';
import Navbar from './Components/ContextAPIBasic/Navbar';
import UseLayoutEffectExample from './Components/UseLayoutEffectExample/UseLayoutEffectExample';
import ForwardRefExample from './Components/ForwardRefExample/ForwardRefExample';
import ParentComponent from './Components/ErrorBoundary/ParentComponent';
import ModalParent from './Components/Modal/ModalParent';
import ParentHOC from './Components/HigherOrderComponents/ParentHOC';
import DisplayGridStyles from './Components/DisplayGridStyles/DisplayGridStyles';
import InfiniteScroll from './Components/InfiniteScroll/InfiniteScroll';
import TicTakToe from './Components/TicTakToe/TicTakToe';
import AutoSearchComplete from './Components/AutoSearchComplete/AutoSearchComplete';

function App() {
  const navigate=useNavigate();
  return (
    <>
      <ThemeProvider>
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
        {/* <Accordion /> */}
        {/* <ProgressBar /> */}
        {/* <ProgressBar2 /> */}
        {/* <GenerateTable /> */}
        {/* <Pagination selectedPage={1} totalPages={13} /> */}
        {/* <ContactForm /> */}
        {/* <FlightBooker /> */}
        {/* <DebounceImplementation /> */}
        {/* <StopWatch /> */}
        {/* <StarRating /> */}
        {/* <Tabs /> */}
        {/* <ShowModal /> */}
        {/* <ProgressBar3 /> */}
        {/* <DataTable /> */}
        {/* <ChessBoard />
        <Navbar /> */}
        {/* <UseLayoutEffectExample /> */}
        {/* <ForwardRefExample /> */}
        {/* <ParentComponent /> */}
        {/* <ModalParent /> */}
        {/* <ParentHOC /> */}
        {/* <DisplayGridStyles /> */}
        {/* <InfiniteScroll /> */}
        {/* <TicTakToe /> */}
        <AutoSearchComplete />
      </ThemeProvider>
    </>
  )
}

export default App
