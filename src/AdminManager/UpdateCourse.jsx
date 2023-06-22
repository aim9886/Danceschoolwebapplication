import React, { useEffect, useState } from 'react'
import axiosInstance from './../services/AxiosInstance';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateCourse = () => {
    let {id}=useParams()
    let token=localStorage.getItem("token")
    let navigate=useNavigate()


    let [state, setState]=useState({
        courseDurationInMonths : "",
        fee : "",
        type : ""
    })
    let {courseDurationInMonths, fee, type}=state;

    let handleChange=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setState({...state,[name]:value})
    }

    let handleSubmit=async(e)=>{
        e.preventDefault()
        console.log(state);

        try{
            let payload={courseDurationInMonths, fee, type}
            await axiosInstance.put(`/dancecourses/update/${id}`,payload,{
                headers :{
                    Authorization : `Bearer ${token}`
                }
            })

        alert("Data Updated Successfully")

    }
    catch
    {
        // console.log("unable to post data");
    }
}

useEffect(()=>{
    let fetchData=async()=>{
        try{
            let{data}=await axiosInstance.get(`/dancecourses/get/${id}`,{headers:{Authorization:`Bearer ${token}`}})
            console.log(data);
            let finalData=data.data
            console.log(finalData);
            setState(finalData)
        }
        catch{
            console.log("Unable to Connect");
        }
    }
    fetchData()
},[])

  return (
    <div>

    <h1 style={{color:"red", fontSize:"30px", display:"flex", justifyContent:"center"}}>Update Course</h1>
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

export default UpdateCourse


