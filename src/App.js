import logo from './logo.svg';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm.js'
import './App.css';
import Alert from './Components/Alert';
import { useState } from 'react';
import About from './Components/About';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from 'react-router-dom'


function App() {
  const [alert,setAlert]=useState(null)
  const changeAlert=function(message,type){
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const [mode,setMode]=useState('light')
  function tooglemode(){
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743'
      changeAlert('Dark mode is enabled','success')
    }else{
      setMode('light');
      document.body.style.backgroundColor='white'
      changeAlert('Light mode is enabled','success')
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Letter transform" about="About app" mode={mode} togglemode={tooglemode} />
    <Alert alert={alert}/>
      <Routes>
        <Route path="/" element={<TextForm head="Enter text to transform" mode={mode} changeAlert={changeAlert} />}>
        </Route>
        <Route path="/about" element={<About mode={mode}/>}>
        </Route>
      </Routes>
    </Router>    
    </>
  );
}

export default App;
