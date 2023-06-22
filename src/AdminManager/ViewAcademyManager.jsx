import React, { useEffect, useState } from 'react'
import axiosInstance from './../services/AxiosInstance';
// import { toast } from 'react-toastify';
import { Link, Outlet } from 'react-router-dom';
import style from "./module.css/addmanager.module.css"

const ViewAcademyManager = () => {
  let[state, setState]=useState([])
  // console.log(data);
  let token=window.localStorage.getItem("token")

  useEffect(()=>{
    let fetchData=async()=>{
      try
      {
        let {data}=await axiosInstance.get("/academymanagers/getall",{
          headers:{
            Authorization:`Bearer ${token}`
          }
        })
        console.log(data);
        let fetchedData=data.data
        console.log(fetchedData);
        setState(fetchedData)
        console.log(data);
      }
      catch
      {
        console.log("unable to connect server");
        // toast.error(error.data)
        // console.log(error);
      }
    }
    fetchData()
  },[])
  return (
    <div>
      <h7 style={{color:"blue", fontSize:"40px", display:"flex", justifyContent:"center"}}>Total number of Academy Managers are: {state.length}</h7>
      <div id={style.viewcardContainer}>
        {state.map((x)=>{
          return(
            <div style={{marginLeft:"20px" , backgroundColor: "black"}}>
              <p style={{alignItems:"center" , border:"2px solid white" , color:"white", display:"flex", justifyContent:"center", height:"50px"}}><span>NAME : {x.userName}</span></p>
              <div id={style.viewcard}>
                <p><span>Role : {x.role}</span></p>
                <p><span>DOB : {x.dob}</span></p>
                <p><span>Phone : {x.phone}</span></p>
                <p><span>Email : {x.email}</span></p>
                <p><span>Gender : {x.gender}</span></p>
                <button><Link to={`/adminDashboard/managerdetails/${x.id}`}>View</Link></button>

            </div>
            </div>
          )
        })}

      </div>
      <Outlet/>
    </div>
  )
}

export default ViewAcademyManager