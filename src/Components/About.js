import React from "react";

export default function About(props){
    return(
    <>
        <div className="container text-center">
            <h1 className="text-success ">Letter Transform</h1>
            <p className={`text-${props.mode==='light'?'dark':'light'}`}>Widely used Text manipulator built using Single page web application.</p>
        </div>
    </>
    )
}