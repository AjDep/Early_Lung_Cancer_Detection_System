import React from 'react'
import {useState} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'
function sform() {
  const [name,setName]=useState()
  const [age,setAge]=useState()
  const [school,setSchool]=useState()
  
  const handleSubmit =(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/api/Customer/AddNotes',{name,age,school})
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        placeholder='Name'
        onChange={(e)=>setName(e.target.value)}
        ></input> <br></br>

        <input 
        placeholder='Age'
        onChange={(e)=>setAge(e.target.value)}
        ></input>  <br></br>

        <input 
        placeholder='School'
        onChange={(e)=>setSchool(e.target.value)}>
        </input><br></br> 

        <button type='Submit'>SUbmit</button>
      </form>
    </div>
  )
}
export default sform;