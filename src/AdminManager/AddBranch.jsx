// import React, { useState } from 'react'
// import axiosInstance from './../services/AxiosInstance';
// import { useNavigate, useParams } from 'react-router-dom';

// const AddBranch = () => {
//     let {id}=useParams()
//     let token=localStorage.getItem("token")
//     let navigate=useNavigate()


//     let [state, setState]=useState({
//         address:"",
//         city:"",
//         phone:"",
//         pincode:""
//     })
//     let {address, city, phone, pincode}=state;

//     let handleChange=(e)=>{
//         let name=e.target.name
//         let value=e.target.value

//         setState({...state,[name]:value})
//     }

//     let handleSubmit=async(e)=>{
//         e.preventDefault()
//         console.log(state);
//         console.log(id)

//         try{
//             let payload={address, phone, city, pincode}
//             await axiosInstance.post(`/branches/save?aid=${id}`, payload, {
//                 headers :{
//                     Authorization:`Bearer ${token}`
//                 }
//             })
//        navigate("/adminDashboard/viewbranch")
//        console.log(payload);

//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// }

//   return (
//     <div>
//         <h2 style={{color:"red" , fontSize:"40px",  display:"flex", justifyContent:"center", marginBottom:"15px"}}>Add Course</h2>
//     <form action='' onSubmit={handleSubmit}>
//         <label htmlFor='address'>Address :</label>
//         <input type='text' name='address' id='address' value={address} placeholder='enter the address' onChange={handleChange}></input>

//         <label htmlFor='city'>City :</label>
//         <input type='text' name='city' id='city' value={city} placeholder='enter city' onChange={handleChange}></input>

//         <label htmlFor='address'>Phone :</label>
//         <input type='text' name='phone' id='phone' value={phone} placeholder='enter phone-num' onChange={handleChange}></input>

//         <label htmlFor='address'>Pincode :</label>
//         <input type='text' name='pincode' id='pincode' value={pincode} placeholder='enter pincode' onChange={handleChange}></input>

//         <button>Submit</button>
//     </form>
//     </div>
//   )
// }

// export default AddBranch