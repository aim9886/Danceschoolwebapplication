import React, { useState } from 'react'
import axiosInstance from './../services/AxiosInstance';
import { useNavigate, useParams } from 'react-router-dom';

const AddCourse = () => {
    let navigate=useNavigate()
    let token=window.localStorage.getItem("token")
    let {id}=useParams()
    let [state, setState]=useState({
        courseDurationInMonths : "",
        fee : "",
        type : ""
    })
    let{courseDurationInMonths, fee, type}=state;

    let handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            let payload={courseDurationInMonths, fee, type}
            await axiosInstance.post(`/dancecourses/save?branchid=${id}`,payload,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            navigate("/adminDashboard/viewcourse")
        }
        catch(err){
            console.log(err);
        }
    }

  return (
    <div>
        <h1 style={{color:"red", fontSize:"30px", display:"flex", justifyContent:"center"}}>Add Course</h1>
        <form action='' onSubmit={handleSubmit}>
            <label htmlFor='coursetype'>Course Type</label>
            <input type='text' name='type' value={type} id='coursetype' onChange={handleChange}/><br />
            <label htmlFor='duration'>Course Duration</label>
            <input type='text' name='courseDurationInMonths' value={courseDurationInMonths} id='duration' onChange={handleChange}/><br />
            <label htmlFor='fees'>Fees</label>
            <input type='text' name='fee' value={fee} id='fees' onChange={handleChange}/><br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddCourse