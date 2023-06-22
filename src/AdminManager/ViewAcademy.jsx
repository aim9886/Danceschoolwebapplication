import React, { useEffect, useState } from 'react'
import axiosInstance from './../services/AxiosInstance';
import { Link, useNavigate } from 'react-router-dom';

const ViewAcademy = () => {
  let [state,setState]=useState([])

  let token=localStorage.getItem("token")

  let navigate=useNavigate()

  useEffect(()=>{
    let fetchData=async()=>{
      try{
        let{data}=await axiosInstance.get("/academies/getall",{headers:{Authorization:`Bearer ${token}`}})
        console.log(data);
        console.log(data.data);
        let finalData=data.data
        setState(finalData)
      }
      catch{
        console.log("unable to connect");
      }
    }
    fetchData()
  },[])

  let handleDelete=async(id)=>{
    console.log(id);
    await axiosInstance.delete(`/academies/delete/${id}`,{headers:{Authorization:`Bearer ${token}`}})
    window.location.assign("/adminDashboard/viewacademy")
  }

  return (
    <div>
      <h1>Total number of Managers is {state.length}</h1>
      {state.map((value)=>{
        return (
          <div>
            <table border="5px" align='center'>
              <tbody>
                <ul>
                  <li>{value.academyName}</li>
                  <li>{value.contact}</li>
                  <li>{value.description}</li>
                  <li>{value.email}</li>
                  <li><button> <Link to={`/adminDashboard/viewacademy/updateacademy/${value.id}`}>Update</Link></button></li>
                  <li><button> <Link to={`/adminDashboard/viewacademy/addviewacademy/${value.id}`}>Add Branch</Link></button></li>
                  <li><button onClick={(id)=>{handleDelete(value.id)}}>Delete</button></li>
                </ul>
              </tbody>
            </table>
          </div>
        )
      })}
    </div>
  )
}

export default ViewAcademy