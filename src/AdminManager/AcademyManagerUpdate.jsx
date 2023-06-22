import React, {useEffect, useState} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
import axiosInstance from '../services/AxiosInstance';
import style from "./module.css/addmanager.module.css"

const AcademyManagerUpdate = () => {
  let navigate=useNavigate()
  let token=window.localStorage.getItem("token")
  let {id}=useParams()
  let [data, setData]=useState({
    userName:"",
    email:"",
    password:"",
    dob:"",
    phone:"",
    gender:""
})

let {userName,email,password,dob,phone,gender}=data;

let handleData=(e)=>{
  let name=e.target.name;
  let value=e.target.value
    setData({...data,[name]:value})
}
let handleSubmit=async (e)=>{
    e.preventDefault()
    console.log("Good Evening",data);
    try{
      let payload={userName,email,password,dob,phone,gender,id}
      let finalData= await axiosInstance.put("/academymanagers/update",payload,{headers:{Authorization:`Bearer ${token}`}})
       console.log(finalData);
       alert(`Successfully Updated the Data with email ${email} as Academy Manager`)
       navigate('/adminDashboard/viewacademymanager')
    }
    catch{
      console.log("unable to connect server");
    }
}

useEffect(()=>{
    let fetchData= async ()=>{
        try{
            let {data}=await axiosInstance.get(`/academymanagers/get/${id}`,{
                headers :{
                    Authorization : `Bearer ${token}`
                }})
                let finalData=data.data
                console.log(finalData);
                setData(finalData)
            }catch{
                console.log("unable to fetch data");
            }
        }
        fetchData()
    },[])


return (
<div id={style.container}>
    <form action=""
    onSubmit={handleSubmit} method='post'>
       <div><h1 style={{color:"red", fontSize:"40px"}}>Updated Form For Academy Manager</h1></div>

         <label htmlFor="userName">UserName :</label>
         <input
         type="text"
         placeholder='enter the username'
         name="userName"
         id={style.user} required
         value={userName}
         onChange={handleData}
         /><br/>

         <label htmlFor="email">Email :</label>
         <input
         type='email'
         placeholder='enter the email'
         name='email'
         id={style.email} required
         value={email}
         onChange={handleData}
         /><br/>

         <label htmlFor="password">Password :</label>
         <input
         type='password'
         placeholder='enter the password'
         name="password"
         id={style.password}  required
         value={password}
         onChange={handleData}
         /><br/>

         <label htmlFor="dob">Date of birth :</label>
         <input
         type="date"
         name="dob"
         id={style.dob}  required
         value={dob}
         onChange={handleData}
         /><br/>

         <label htmlFor="phone">Phone no :</label>
         <input
         type='number'
         placeholder='enter the phone number'
         name='phone'
         id={style.phone}  required
         value={phone}
         onChange={handleData}
         maxLength="10" /><br/>

        <label htmlFor="gender">Gender :</label>
        <input type="radio" name="gender" id="male" value="Male" onChange={handleData}/>Male
        <input type="radio" name="gender" id="female" value="Female" onChange={handleData}/>Female
        <input type="radio" name="gender" id="others" value="others" onChange={handleData}/>Others

        <button type="submit">Register</button>
        <p><Link to="/login">Already have an account ?</Link></p>
    </form>
</div>
)
}

export default AcademyManagerUpdate