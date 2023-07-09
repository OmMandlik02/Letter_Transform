import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const [text, setText] = useState('');
  // text="Hello" // It is illegal and throws error
  // setText("Hello"); // This will set text as "Hello"

  const handleUpClick = function () {
    setText(text.toUpperCase())
    console.log('Uppercase is called')
    if(text.length>0){
      props.changeAlert('Converted to uppercase successfully','success')
    }else{
      props.changeAlert('Please enter the text','warning');
    }
   
    // setText()
  }
  const handleLowClick = function () {
    setText(text.toLowerCase())
    if(text.length>0){
      props.changeAlert('Converted to lowercase successfully','success')
    }else{
      props.changeAlert('Please enter the text','warning');
    }

  }
  const handleClearClick = function () {
    setText('')
    if(text.length>0){
      props.changeAlert('Text is cleard','success')
    }else{
      props.changeAlert('Please enter the text','warning');
    }
  }
  const handleCapitalizeClick = function () {
    const words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      if (words[i]) {
        // This if condition is applied because as split ' ' also takes 1 empty word if string is empty so ass toUppercase is not uplied to w=emty string
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }

    }
    var u = words.join(" ");
    setText(u)
    if(text.length>0){
      props.changeAlert('Text is capitalized','success')
    }else{
      props.changeAlert('Please enter the text','warning');
    }
  }

  const handleOnchange = function (event) {
    // console.log('kmknkm')
    setText(event.target.value)
  }
  // If we already set value attribute of textarea then it will not update untill we change that  value attribute so to change it by user we use "onChage" event and using this event we
  //call handleOnchange funtion where we set updated value attribute  


  return (
    <>
      <div className="container" >
        <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.head}</h1>

        <div className="mb-3">
          <textarea className="form-control" value={text} style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'grey'}} onChange={handleOnchange}  id="myBox" rows="8" ></textarea>
        </div>
        <button type="submit" className={`btn btn-primary mx-1 text-${props.mode==='light'?'dark':'light'}`} onClick={handleUpClick} >Convert to Uppercase</button>
        <button type="submit" className={`btn btn-primary mx-1 text-${props.mode==='light'?'dark':'light'}`} onClick={handleLowClick} >Convert to Lowercase</button>
        <button type="submit" className={`btn btn-primary mx-1 text-${props.mode==='light'?'dark':'light'}`} onClick={handleClearClick} >Clear Text</button>
        <button type="submit" className={`btn btn-primary mx-1 text-${props.mode==='light'?'dark':'light'}`} onClick={handleCapitalizeClick} >Capitalize text</button>


      </div>
      <div className="container my-3">
        <p className={`text-${props.mode==='light'?'dark':'light'}`}>Your text summary </p>
        <p className={`text-${props.mode==='light'?'dark':'light'}`}>Your text contains <b>{text.length} letters</b>   and <b>{text.split(" ").length} words</b> </p>
        <p className={`text-${props.mode==='light'?'dark':'light'}`}>Approx time to read text: <b>{0.04 * text.split(" ").length} min </b> </p>
      </div>
      <div className={`container my-4  text-${props.mode==='light'?'dark':'light'}`} >
        <h2>Preview</h2>
        <div>{text.length>0?text:'" Write the text to preview "'}</div>
      </div>

    </>
  )
}

TextForm.propTypes = {
  head: PropTypes.string
}