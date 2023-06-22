import React, { useEffect, useState } from 'react'
import axiosInstance from './../services/AxiosInstance';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateAcademy = () => {
    let {id}=useParams()
    let token=localStorage.getItem("token")
    let navigate=useNavigate()


    let [state, setState]=useState({
        academyName:"",
        contact:"",
        description:"",
        email:""
    })
    let {academyName, contact, description, email}=state;

    let handleChange=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setState({...state,[name]:value})
    }

    let handleSubmit=async(e)=>{
        e.preventDefault()
        console.log(state);

        try{
            let payload={academyName, contact, description, email, id}
            await axiosInstance.put('/academies/update',payload,{
                headers :{
                    Authorization : `Bearer ${token}`
                }
            })

        alert("Data Updated Successfully")
        // navigate('/viewacademy')

    }
    catch
    {
        // console.log("unable to post data");
    }
}

useEffect(()=>{
    let fetchData=async()=>{
        try{
            let{data}=await axiosInstance.get(`/academies/get/${id}`,{headers:{Authorization:`Bearer ${token}`}})
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
        <h2 style={{color:"red" , fontSize:"40px",  display:"flex", justifyContent:"center", marginBottom:"15px"}}>Update Academy</h2>
    <form action='' onSubmit={handleSubmit}>
        <label htmlFor='academyName'>Academy Name :</label>
        <input type='text' name='academyName' id='academyName' value={academyName} placeholder='enter the academy name' onChange={handleChange}></input>

        <label htmlFor='description'>Description :</label>
        <input type='text' name='description' id='description' value={description} placeholder='enter description' onChange={handleChange}></input>

        <label htmlFor='email'>Email :</label>
        <input type='text' name='email' id='email' value={email} placeholder='enter email' onChange={handleChange}></input>

        <label htmlFor='contact'>Contact :</label>
        <input type='text' name='contact' id='contact' value={contact} placeholder='enter contact name' onChange={handleChange}></input>

        <button>Submit</button>
    </form>
    </div>
  )
}

export default UpdateAcademy