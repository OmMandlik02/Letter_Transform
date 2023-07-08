import logo from './logo.svg';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm.js'
import Enablemode from './Components/Enablemode'
import './App.css';
import { useState } from 'react';
let name='om';



function App() {
  const [mode,setMode]=useState('light')
  function tooglemode(){
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743'
    }else{
      setMode('light');
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
    <Navbar title="Letter transform" about="About app" mode={mode} togglemode={tooglemode} />
    <TextForm head="Enter text to transform" mode={mode} />
    </>
  );
}

export default App;
