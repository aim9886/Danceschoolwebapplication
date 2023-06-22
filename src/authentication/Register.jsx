import React, {useState} from 'react'
import {Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AxiosInstance from '../services/AxiosInstance';

const Register = () => {
  let navigate=useNavigate()
  let [state, setState]=useState({
    userName:"",
    email:"",
    password:"",
    dob:"",
    phone:"",
    gender:""
})

let {userName,email,password,dob,phone,gender}=state;

let handleChange=(e)=>{
  let name=e.target.name;
  let value=e.target.value
    setState({...state,[name]:value})
}
let handleSubmit=async (e)=>{
    e.preventDefault()
    console.log(state);
    try{
      let payload={userName,email,password,dob,phone,gender}
      await AxiosInstance.post("/users/save",payload)
      toast.success(`$(email) registered successfully`)
       navigate("/login")
      // console.log(data);
    }
    catch{
      console.log("unable to connect server");
    }
}
return (
<div>
    <form action=""
    onSubmit={handleSubmit} method='post'>
       <h2 style={{color:"red", fontSize:"50px"}}>Register Form</h2>

         <label htmlFor="userName">UserName :</label>
         <input
         type="text"
         placeholder='enter the username'
         name="userName"
         id="userName"
         value={userName}
         onChange={handleChange}
         /><br/>

         <label htmlFor="email">Email :</label>
         <input
         type='email'
         placeholder='enter the email'
         name='email'
         id='email'
         value={email}
         onChange={handleChange}
         /><br/>

         <label htmlFor="password">Password :</label>
         <input
         type='password'
         placeholder='enter the password'
         name="password"
         id='password'
         value={password}
         onChange={handleChange}
         /><br/>

         <label htmlFor="dob">Date of birth :</label>
         <input
         type="date"
         name="dob"
         id="dob"
         value={dob}
         onChange={handleChange}
         /><br/>

         <label htmlFor="phone">Phone no :</label>
         <input
         type='number'
         placeholder='enter the phone number'
         name='phone'
         id='phone'
         value={phone}
         onChange={handleChange}
         maxLength="10" /><br/>

        <label htmlFor="gender">Gender :</label>
        <input type="radio" name="gender" id="male" value="Male" onChange={handleChange}/>Male
        <input type="radio" name="gender" id="female" value="Female" onChange={handleChange}/>Female
        <input type="radio" name="gender" id="others" value="others" onChange={handleChange}/>Others

        <button type="submit">Register</button>
        <p><Link to="/login">Already have an account ?</Link></p>
    </form>
</div>
)
}

export default Register