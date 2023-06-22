import React, { useEffect, useState } from 'react'
import axiosInstance from './../services/AxiosInstance';
import { Link, useParams } from 'react-router-dom';

const ViewBranch = () => {
  let [state,setState]=useState([])

  let token=localStorage.getItem("token")

  let {id}=useParams()

  useEffect(()=>{
    let fetchData=async()=>{
      try{
        let{data}=await axiosInstance.get("/branches/getall",{headers:{Authorization:`Bearer ${token}`}})
        console.log(data);
        let finalData=data.data
        console.log(finalData);
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
    await axiosInstance.delete(`/branches/delete/${id}`,{headers:{Authorization:`Bearer ${token}`}})
    alert("Data Deleted")
  }

  return (
    <div>
      <h1>Branch Details</h1>
      {state.map((value)=>{
        return (
          <div>
            <table border="5px" align='center'>
              <tbody>
                <ul>
                  <li>{value.academy.id}</li>
                  <li>{value.academy.academyName}</li>
                  <li>{value.address}</li>
                  <li>{value.id}</li>
                  <li>{value.city}</li>
                  <li>{value.phone}</li>
                  <li>{value.pincode}</li>
                  <li>{value.academy.email}</li>
                  <li><button> <Link to={`/adminDashboard/viewbranch/updatebranch/${value.id}`}>Update Branch</Link></button></li>
                  <li><button> <Link to={`/adminDashboard/viewbranch/addcourse/${value.id}`}>Add Course</Link></button></li>
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

export default ViewBranch