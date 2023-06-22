import React, { useEffect, useState } from 'react'
import axiosInstance from './../services/AxiosInstance';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBranch = () => {
    let {id}=useParams()
    let token=localStorage.getItem("token")
    let navigate=useNavigate()


    let [state, setState]=useState({
        address:"",
        city:"",
        phone:"",
        pincode:""
    })
    let {address, city, phone, pincode}=state;

    let handleChange=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setState({...state,[name]:value})
    }

    let handleSubmit=async(e)=>{
        e.preventDefault()
        console.log(state);

        try{
            let payload={address, city, phone, pincode}
            await axiosInstance.put(`/branches/update/${id}`,payload,{
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
            let{data}=await axiosInstance.get(`/branches/get/${id}`,{headers:{Authorization:`Bearer ${token}`}})
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
        <h2 style={{color:"red" , fontSize:"40px",  display:"flex", justifyContent:"center", marginBottom:"15px"}}>Update Branch</h2>
    <form action='' onSubmit={handleSubmit}>

        <label htmlFor='address'>Address :</label>
        <input type='text' name='address' id='address' value={address} placeholder='enter address' onChange={handleChange}></input>

        <label htmlFor='city'>City :</label>
        <input type='text' name='city' id='city' value={city} placeholder='enter city' onChange={handleChange}></input>

        <label htmlFor='phone'>Phone :</label>
        <input type='text' name='phone' id='phone' value={phone} placeholder='enter phone-num' onChange={handleChange}></input>

        <label htmlFor='address'>Pincode :</label>
        <input type='text' name='pincode' id='pincode' value={pincode} placeholder='enter pincode' onChange={handleChange}></input>

        {/* <label htmlFor='email'>Email :</label>
        <input type='text' name='email' id='email' value={email} placeholder='enter email' onChange={handleChange}></input> */}

        <button>Submit</button>
    </form>
    </div>
  )
}

export default UpdateBranch