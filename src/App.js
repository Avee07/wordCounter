import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#272727";
      document.body.style.color = "white";
      document.title = "Word Counter - Dark mode";
      showAlert("Dark Mode enabled" , "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.title = "Word Counter";
      showAlert("Light Mode enabled" , "success");
    }
  };
    const [alert,setAlert] = useState(null)
    const showAlert =(message ,type) => {
      setAlert({
        msg : message,
        type : type,
      })
      setTimeout(() =>{
        setAlert(null)
      },1300);
    }
  
  return (
    <>
        <Navbar title="Word Counter" mode={mode} toggleMode={toggleMode} />
        <Alert alert = {alert} />
        <div className="container">
          <TextForm showAlert={showAlert} heading="Enter your Text" mode={mode} />
        </div>
    </>
  );
}

export default App;
