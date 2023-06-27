import logo from './logo.svg';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm.js'
import './App.css';
let name='om';
function App() {
  return (
    <>
    <Navbar title="Letter transform" about="About app" />
    {/* <Navbar  /> */}
    <TextForm head="Enter text to transform" />
    </>
  );
}

export default App;
