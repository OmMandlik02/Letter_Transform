import logo from './logo.svg';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm.js'
import './App.css';
import Alert from './Components/Alert';
import { useState } from 'react';
let name='om';


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
    <Navbar title="Letter transform" about="About app" mode={mode} togglemode={tooglemode} />
    <Alert alert={alert}/>
    <TextForm head="Enter text to transform" mode={mode} changeAlert={changeAlert} />
    </>
  );
}

export default App;
