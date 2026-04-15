import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route, useNavigate} from "react-router-dom";
// import Accordion from './Components/AccordionTask/Accordion';
//import ProgressBar from './Components/ProgressBar/ProgressBar';
//import ProgressBar2 from './Components/ProgressBar2/ProgressBar2';
// import GenerateTable from './Components/GenerateTable/GenerateTable';
// import Pagination from './Components/Pagination/Pagination';
// import ContactForm from './Components/ContactForm/ContactForm';
// import FlightBooker from './Components/FlightBooker/FlightBooker';
// import DebounceImplementation from './Components/DebounceImplementation/DebounceImplementation';
// import StopWatch from './Components/StopWatch/StopWatch';
// import StarRating from './Components/StarRating/StarRating';
// import Tabs from './Components/Tabs/Tabs';
// import ShowModal from './Components/ShowModal/ShowModal';
//import ProgressBar3 from './Components/ProgressBar3/ProgressBar3';
// import DataTable from './Components/DataTable/DataTable';
// import ChessBoard from './Components/ChessBoard/ChessBoard';
// import ThemeProvider from './Components/ContextAPIBasic/ThemeProvider';
// import Navbar from './Components/ContextAPIBasic/Navbar';
// import UseLayoutEffectExample from './Components/UseLayoutEffectExample/UseLayoutEffectExample';
// import ForwardRefExample from './Components/ForwardRefExample/ForwardRefExample';
// import ParentComponent from './Components/ErrorBoundary/ParentComponent';
// import ModalParent from './Components/Modal/ModalParent';
// import ParentHOC from './Components/HigherOrderComponents/ParentHOC';
// import DisplayGridStyles from './Components/DisplayGridStyles/DisplayGridStyles';
// import InfiniteScroll from './Components/InfiniteScroll/InfiniteScroll';
// import TicTakToe from './Components/TicTakToe/TicTakToe';
// import AutoSearchComplete from './Components/AutoSearchComplete/AutoSearchComplete';
// import AutoSearchComplete2 from './Components/AutoSearchComplete2/AutoSearchComplete2';
// import FileExplorerParentBasic from './Components/FileExplorer/Basic/FileExplorerBasic';
// import GridLights from './Components/GridLights/GridLights';
// import CinemaHall from './Components/CinemaHall/CinemaHall';
//import Progressbar4 from './Components/Progressbar4/Progressbar4';
// import VirtualizationParent from './Components/Virtualization/Virtualization';
// import StarRating1 from './Components/StarRating/StarRating1';
// import StopWatch1 from './Components/StopWatch/StopWatch1';
// import StopWatch2 from './Components/StopWatch/StopWatch2';
// // import AssibilityCustomDropdown from './Components/Accessibility/CustomDropdown/CustomDropdown';
// import AssibilityChipsSelectorDropdown from './Components/Accessibility/ChipsSelectorDropdown/ChipsSelectorDropdown';

// import FileExplorerParentBasic1 from './Components/FileExplorer/Practise/FileExplorerBasic';
// import CountdownTimer from './Components/Timer/Timer';
// import CustomHookUseThrottle from './Components/CustomsHooks/CustomHookUseThrottle';
// import RenderUsersList from './Components/HigherOrderComponents/Practise/RenderUsersList';

// import NestedTodo from './Components/NestedTodo/NestedTodo';
// import Task from './Components/Task/BackGroundChangetask';
//import Timer1 from './Components/Timer/Timer1';
//import ProgressBar5 from './Components/ProgressBar5/ProgressBar5';
import ImageCarouselParent from './Components/ImageCarousel/ImageCarousel';
import MultiStepFormField from './Components/multiStepFormField/MultiStepFormField';
//import ToastNotifications from './Components/ToastNotifications/ToastNotifications';
//import ProductListingPageWithFilters from './Components/ProductListingPageWithFilters/ProductListingPageWithFilters';
// import Todo from './Components/ReduxPractise/Todo/Todo';
// import Todo from './Components/ReduxPractise/zustand_Todo/Todo';
//import OtpInputBox from './Components/OtpInputBox/OtpInputBox';
//import MultiStepFormField from './Components/multiStepFormField/MultiStepFormField';

function App() {
  const navigate=useNavigate();
  return (
    <>
      {/* <NestedTodo /> */}
      {/* <Task /> */}
      {/* <Timer1 /> */}
      {/* <ProgressBar5 /> */}
      {/* <ImageCarouselParent /> */}
      {/* <ToastNotifications /> */}
      {/* <ProductListingPageWithFilters /> */}
      {/* <Todo /> */}
      {/* <OtpInputBox /> */}
      {/* <ProgressBar5 /> */}
      {<MultiStepFormField />}
    </>
  )
}

export default App
