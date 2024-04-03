import React, { useState } from 'react';
import styles from "./Name.module.css";

const Name = () => {
    const [send,setSend] = useState(false)
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("")

const handleSubmit = (e)=>{
    e.preventDefault();

    if(firstName !== "" && lastName !== ""){
        setSend(true)
    }
    
}

const handleChange = (e)=>{
  
  if(e.target.id === "first"){
    setFirstName(e.target.value)
  }
  else{
    setLastName(e.target.value)
  }
}
  
return (
   <>
    <form onSubmit={handleSubmit}>
      <h1>Full Name Display</h1>
      <div className={styles.container}>
            <div>
                    <lable htmlFor="first">First Name : </lable>
                    <input 
                    id="first"
                    type='text' 
                    value={firstName}
                    onChange={handleChange}
                    required/>
            </div>
            <div>
                    <lable htmlFor="last">Last Name : </lable>
                    <input 
                    id="last"
                    type='text'
                    value={lastName}
                    onChange={handleChange}
                    required/>
            </div>
            <button type='submit'>Submit</button>
     </div>
    </form>
    {send && (
        <p>Full Name : {firstName} {lastName}</p>
    )}
   </>
  )
}

export default Name