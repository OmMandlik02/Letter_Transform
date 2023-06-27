import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const [text,setText]=useState('');
  // text="Hello" // It is illegal and throws error
  // setText("Hello"); // This will set text as "Hello"

  const handleUpClick=function (){
    setText(text.toUpperCase())
    console.log('Uppercase is called')
    // setText()
  }
  const handleLowClick=function(){
    setText(text.toLowerCase())
  }
  const handleClearClick=function(){
    setText('')
  }
  const handleCapitalizeClick=function(){
    const words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      if(words[i]){
        // This if condition is applied because as split ' ' also takes 1 empty word if string is empty so ass toUppercase is not uplied to w=emty string
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }
      
    }
    var u=words.join(" ");
    setText(u)
  }

  const handleOnchange= function(event){
    // console.log('kmknkm')
    setText(event.target.value)
  }
  // If we already set value attribute of textarea then it will not update untill we change that  value attribute so to change it by user we use "onChage" event and using this event we
  //call handleOnchange funtion where we set updated value attribute  
  return (
    <>
    <div className="container">
            <h1>{props.head}</h1>
            <div className="mb-3">
              <textarea  className="form-control" value={text} onChange={handleOnchange}  id="myBox"  rows="8" ></textarea>
            </div>
            <button type="submit"  className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button type="submit" className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button type="submit" className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button type="submit" className="btn btn-primary mx-1" onClick={handleCapitalizeClick}>Capitalize text</button>

            
    </div>
    <div className="container my-3">
        <p>Your text summary</p>
        <p>Your text contains <b>{text.length} letters</b>   and <b>{text.split(" ").length} words</b> </p>
        <p>Approx time to read text: <b>{0.04*text.split(" ").length} min </b> </p>
    </div>
    <div className="container my-4" >
            <h2>Preview</h2>
            <h5>{text}</h5>
    </div>
  
    </>
  )
}

TextForm.propTypes={
    head:PropTypes.string
}