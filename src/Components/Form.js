
import React, { useState } from "react";
import Modal from "./Modal";
import Header from "./Header";



import "./Form.css";

const GetInfo=(props)=>{
const [enteredFirstName,setEnteredFirstName]=useState('')
const [enteredSecondName,setEnteredSecondName]=useState('')

    const firstnameChangeHandler=(event)=>{
        setEnteredFirstName(event.target.value)
    }
    const secondnameChangeHandler=(event)=>{
        setEnteredSecondName(event.target.value)
    }
const [error,setError]=useState()
    const calculate=(event)=>{
        event.preventDefault();
        if(enteredFirstName.trim().length===0 || enteredSecondName.trim().length===0)
        {
            setError({
                title:'Invalid Names',
                message:'Enter Both the names to calculate'
            })

        }
        else
        {
            let s1=enteredFirstName;
            let s2=enteredSecondName;
            let count=0;
            let p1=[...s1];
            let p2=[...s2];
            const n1=p1.map(element=>{
                return element.toLowerCase()
            })
            const n2=p2.map(element=>{
                return element.toLowerCase()
            })
            for(let i=0;i<n1.length;i++)
            {
                if(n1[i]>='a' && n1[i]<='z')
                {
                    for(let j=0;j<n2.length;j++)
                    {
                        if(n2[j]>='a' && n2[j]<='z')
                        {
                            if(n1[i]===n2[j])
                            {
                                n1[i]='*';
                                n2[j]='*';
                                j=n2.length+1;
                            }
                        }
                    }
                }
            }
            for(let i=0;i<n1.length;i++)
            {
                if(n1[i]>='a' && n1[i]<='z')
                {
                    count++;
                }
            }
            for(let j=0;j<n2.length;j++)
            {
                if(n2[j]>='a' && n2[j]<='z')
                {
                    count++;
                }
            }

            let flag=0;
            let flames=['Friends','Lovers','Affection','Marriage','Enemy','Siblings']
            for(let i=1;i<=5;i++)
            {
                for(let j=1;j<=count;j++)
                {
                    if(flag>5)
                    {
                        flag=0;
                    }
                    if(flames[flag]!=='*')
                    {
                        if(j===count)
                        {
                            flames[flag]='*';
                        }
                        flag++;
                    }
                    else
                    {
                        j=j-1;
                        flag++;
                    }
                }
            }
            for(let i=0;i<flames.length;i++)
            {
                if(flames[i]!=='*')
                {
                    setError({
                        title:'Flames Result between '+s1+' & '+s2+' is',
                        message:flames[i]
                    })

                   
                }
            }
            setEnteredFirstName('');
            setEnteredSecondName('');

        }
       

    }
    const errorHandler=()=>{
        setError(null)
    }




    return(
        <div>   
          {error &&  <Modal title={error.title} message={error.message} onConfirm={errorHandler}/> }
            <Header/>
  
        <div className="edge">
           
            <form onSubmit={calculate}>
                <label>Enter Your Name</label>
                <input type={"text"} onChange={firstnameChangeHandler} value={enteredFirstName}></input>
                <label>Enter your partners Name</label>
                <input type={"text"} onChange={secondnameChangeHandler} value={enteredSecondName}></input>
                <br></br>
                <div className="sub">
                <input type={"submit"} value={"Check FLAMES"}></input>

                </div>
                
            </form>
        </div>
        </div>
    )
}


export default GetInfo;
