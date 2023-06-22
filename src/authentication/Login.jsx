import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
// import axiosInstance from '../services/AxiosInstance';
import axiosInstance from './../services/AxiosInstance';
import {useNavigate } from 'react-router-dom';
import {AiFillEye , AiFillEyeInvisible } from "react-icons/ai";


const Login = () => {
    let navigate=useNavigate()

    let [state, setState]=useState({
        userEmail: "",
        password: ""
    })
    let [show, setShow] = useState(false)
    let [eye, setEye]= useState(false)
    let {userEmail , password}=state;
    let showpassword=()=>{
        setShow(!show)
    }
    let handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }

    let handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            let payload={userEmail,password};
            console.log(payload);
            let {data}=await axiosInstance.post("/authenticate",payload)
            console.log(data);
            let token = data.token;
            let role = data.role
            console.log(token);
            if(token){
                window.localStorage.setItem("token",token)
                window.localStorage.setItem("role",role)
                toast.success(`${userEmail} logged in successfully`)
                navigate("/home")
            }else{
                window.localStorage.removeItem("token",token)
                window.localStorage.removeItem("role",role)
            }
        }
        catch (error){
            toast.error(error.code)
        }
    }
    let handleShow=()=>{
        setShow(!show)
        setEye(!eye)
    }

  return (
    <div>
        <ToastContainer/>
        <div>

        <form action=""
        onSubmit={handleSubmit}>
            <h7 style={{color:"red", fontSize:"50px"}}>Login Form</h7>

            <label htmlFor="userEmail">UserEmail</label>
            <input
             type='email'
             placeholder='enter the email'
             name='userEmail'
             value={userEmail}
             onChange={handleChange}
             /><br/>

            <label htmlFor="password">Password</label>
            <input
            type={show?'text':'password'}
            placeholder='enter the password'
            name="password"
            value={password}
            onChange={handleChange}
            /><br/>
            {
                eye? <AiFillEye onClick={handleShow} style={{position:"relative", left:"180px", bottom:"34px"}}/>:
                <AiFillEyeInvisible onClick={handleShow} style={{position:"relative", left:"180px", bottom:"34px"}}/>
            }

            <button>Submit</button>
            <span onClick={showpassword}>{show?"hide":"show"}</span>
        </form>
    </div>
    </div>
  )
}

export default Login