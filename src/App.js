import React, {useState} from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TestForm from "./components/TestForm";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const toggleMode=()=>{
    if(mode=='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      {/* <About/> */}
      <div className="container my-3">
        <TestForm heading="Enter the text to analyze" mode={mode}  />
      </div>
    </>
  );
}
export default App;
