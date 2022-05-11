
import "./App.css";
import React, {useState} from 'react'
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import Footer from "./components/Footer";


function App() {
const [mode, setMode] = useState("light");
const [alert, setAlert] = useState(null);

const showAlert = (message, type)=>{
   setAlert({
     msg: message,
     Type: type
   })

   setTimeout(() => {
     setAlert(null);
   }, 2000);
}

const toggleMode = ()=>{
  if(mode === "light"){
    setMode("dark");
    document.body.style.backgroundColor= 'grey';
    showAlert('Dark Mode Enabled', 'success');
  }
  else{
    setMode("light");
    document.body.style.backgroundColor= 'white';
    showAlert('Dark Mode Disabled', 'success');
  }
}

  return (
    <>
      <Navbar title="Text Utils" aboutTxt="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
        <section id="textform">
        <TextForm heading="Enter the text below for analyzing" mode={mode} showAlert={showAlert}/>
        </section>
        <section id="about">
        <About mode={mode}/>
        </section>  
        <Footer />
      </div>    
    </>
  );
}

export default App;
