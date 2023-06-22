import React, { useEffect, useState } from 'react'
import axiosInstance from './../services/AxiosInstance';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ManagerDetails = () => {
    let navigate=useNavigate()
    let {id}=useParams()
    let [state, setState]=useState([])
    let token=window.localStorage.getItem("token")
    // console.log(token);

    let deleteData=async(id)=>{
        await axiosInstance.delete(`/academymanagers/delete/${id}`,{
            headers:{
                Authorization : `Bearer ${token}`
            }
        })
        navigate("/adminDashboard/viewacademymanager")
    }
    useEffect(()=>{
        let fetchData=async()=>{
            try{
                let {data}=await axiosInstance.get(`/academymanagers/get/${id}`,{
                    headers :{
                        Authorization : `Bearer ${token}`
                    }
                })
                console.log(data);
                let fetchedData=data.data
                console.log(fetchedData);
                setState(fetchedData)
            }
            catch{
                console.log("unable to connect server");
            }
        }
        fetchData()
    },[])
  return (
    <div>
        <h6 style={{color:"brown", fontSize:"35px", marginBottom:"15px"}}>Manager Details</h6>
         <div>
            <div style={{fontSize:"25px", }}>
              <p><span>NAME : {state.userName}</span></p>
              <div>
                <p><span>Role : {state.role}</span></p>
                <p><span>DOB : {state.dob}</span></p>
                <p><span>Phone : {state.phone}</span></p>
                <p><span>Email : {state.email}</span></p>
                <p><span>Gender : {state.gender}</span></p>
                <button><Link to={`/adminDashboard/viewacademymanager/addacademy/${state.id}`}>Add</Link></button>
                <button><Link to={`/adminDashboard/viewacademymanager/updateacademymanager/${state.id}`}>Update</Link></button>
                <button onClick={(id)=>{
                    deleteData(state.id)
                }}>Delete</button>


            </div>
            </div>
    </div>
    </div>
  )
}

export default ManagerDetails