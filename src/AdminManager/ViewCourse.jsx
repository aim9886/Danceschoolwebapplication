import React, { useEffect, useState } from 'react'
import axiosInstance from './../services/AxiosInstance';
import { Link } from 'react-router-dom';

const ViewCourse = () => {
  let [state,setState]=useState([])

  let token=localStorage.getItem("token")

  useEffect(()=>{
    let fetchData=async()=>{
      try{
        let{data}=await axiosInstance.get("/dancecourses/getall",{headers:{Authorization:`Bearer ${token}`}})
        console.log(data);
        let finalData=data.data
        console.log(finalData);
        setState(finalData)
      }
      catch{
        console.log("unable to view course");
      }
    }
    fetchData()
  },[])

  let handleDelete=async(id)=>{
    console.log(id);
    await axiosInstance.delete(`/dancecourses/delete/${id}`,{headers:{Authorization:`Bearer ${token}`}})
    alert("Data Deleted")
    window.location.assign("/adminDashboard/viewcourse")
  }

  return (
    <div>
      <h1 style={{color:"red", fontSize:"30px", display:"flex", justifyContent:"center"}}>Course Details</h1>
      {state.map((value)=>{
        return (
          <div>
            <table border="5px" align='center'>
             <ul>
                <li>Duration:{value.courseDurationInMonths} months</li>
                <li>Price:{value.fee}</li>
                <li>{value.id}</li>
                <li>Dance Type:{value.type}</li>
                <button> <Link to={`/adminDashboard/viewcourse/updatecourse/${value.id}`}>Update Course</Link></button>
                <button onClick={(id)=>{handleDelete(value.id)}}>Delete</button>
             </ul>
            </table>
          </div>
        )
      })}
    </div>
  )
}

export default ViewCourse