import React, { useState } from 'react'
import axiosInstance from './../services/AxiosInstance';
import { useParams } from 'react-router-dom';

const AddAcademy = () => {
    let {id}=useParams()
    let token=localStorage.getItem("token")


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
            let payload={academyName, contact, description, email}
            await axiosInstance.post(`/academies/saveacademy?managerId=${id}`,payload,{
                headers :{
                    Authorization : `Bearer ${token}`
                }
            })

        alert(`Successfully Added`)
        // navigate('/adminDashboard/viewacademymanager')

    }
    catch
    {
        console.log("unable to post data");
    }
}

  return (
    <div>
        <h2 style={{color:"red" , fontSize:"40px",  display:"flex", justifyContent:"center", marginBottom:"15px"}}>Academy Register</h2>
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

export default AddAcademy