import React from "react";
import "./Modal.css"

const Modal=(props)=>{

    return(
    <div>
        <div className="backdrop" onClick={props.onConfirm}/>
        <div className="modal">
            <h3>{props.title}</h3>
            <br></br>
    
            <h1>{props.message}</h1>
            <br></br>
            <div className="btn">
            <input type={"button"} value="Click to close" onClick={props.onConfirm}></input>
            <br></br>

            </div>
        </div>
    </div>
    )
}


export default Modal;