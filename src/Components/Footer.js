import React from "react";

import './Footer.css'
import git from '../Images/git.png'

const Footer=()=>{

    return(
        <div className="footer">
            <a href="https://github.com/meashwin/">
            <p>Developed By Ashwin M E</p>
            </a>
            <br></br>
           <div className="git">
           <a href="https://github.com/meashwin/">
            <img  src={git} alt="Github" ></img>
             &nbsp; Github
            </a>
           </div>
            
        </div>
    )
}

export default Footer;