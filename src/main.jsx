import React from 'react'
import ReactDOM from 'react-dom/client'
import './Index.css'
import App from "./App"
import { useState } from 'react'





const Yes = ()=>{
 
 
  

  const [Age,setAge] = useState("")
  const [name,setName] = useState("")

  const [loadAge,setLoadAge] = useState("")
  const [loadName,setLoadName] = useState("")

 

  const paragraphContent = () =>{
    setLoadAge(Age === "" ? "please enter your age" : Age > 18 ? `your Age is ${Age} is over 18` : `your age ${Age}  under 18 ` )

    setLoadName(name === "" ? "enter your name": `your name is ${name}`)
  }


const getName = (event) =>{
    setName(event.target.value)
  }

  const getAge = (event) =>{
    setAge(event.target.value)
  }
  

  return (
    <>

  <div className='flex'>
  <input className='ok' type='text' placeholder='enter your name' onChange={getName} />
  <input type='number' placeholder='enter age' onChange={getAge} />

   
   <button className='cali' onClick={paragraphContent}>click</button>
   <p>{loadAge}  {loadName}</p>
  </div>
    
</>
 
  );
   
  
}






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
  
  
<Yes />
    
  
  
 
  </React.StrictMode>,
)
