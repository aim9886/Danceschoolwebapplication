import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Login from "./authentication/Login"
import Register from "./authentication/Register"
import Admin from "./authentication/Admin"
import Home from './pages/Home'
// import style from "./navbar/_navbar.module.css"
import "./global.css"
// import axiosInstance from './services/AxiosInstance'
import About from './authentication/About';
import Gallery from './authentication/Gallery';
import PublicRoute from './route/PublicRoute'
import ProtectedRoute from './route/ProtectedRoute'
import AdminDashboard from './AdminManager/AdminDashboard'
import AddManager from './AdminManager/AddManager'
import ViewAcademyManager from './AdminManager/ViewAcademyManager'
import ManagerDetails from './AdminManager/ManagerDetails'
import AcademyManagerUpdate from './AdminManager/AcademyManagerUpdate'
import AddAcademy from './AdminManager/AddAcademy'
import ViewAcademy from './AdminManager/ViewAcademy'
import UpdateAcademy from './AdminManager/UpdateAcademy'
import AddViewAcademy from './AdminManager/AddViewAcademy'
import ViewBranch from './AdminManager/ViewBranch'
import UpdateBranch from './AdminManager/UpdateBranch'
// import AddBranch from './AdminManager/AddBranch'
import AddCourse from './AdminManager/AddCourse'
import ViewCourse from './AdminManager/ViewCourse'
import UpdateCourse from './AdminManager/UpdateCourse'
import Contact from './authentication/Contact'


const App = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
            <Route path='/login' element={<PublicRoute><Login/></PublicRoute>}/>
            <Route path='/register' element={<PublicRoute><Register/></PublicRoute>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/contact' element={<Contact/>}/>

            <Route path='/adminDashboard' element={<AdminDashboard/>}>
            <Route path='addmanager' element={<AddManager/>}/>
            <Route path='viewacademymanager' element={<ViewAcademyManager/>}/>
            <Route path='managerdetails/:id' element={<ManagerDetails/>}/>
            <Route path='viewacademymanager/updateacademymanager/:id' element={<AcademyManagerUpdate/>}/>
            <Route path='viewacademymanager/addacademy/:id' element={<AddAcademy/>}/>
            <Route path='viewacademy' element={<ViewAcademy/>}/>
            <Route path='viewacademy/updateacademy/:id' element={<UpdateAcademy/>}/>
            <Route path='viewacademy/addviewacademy/:id' element={<AddViewAcademy/>}/>
            <Route path='viewbranch' element={<ViewBranch/>}/>
            <Route path='viewbranch/updatebranch/:id' element={<UpdateBranch/>}/>
            {/* <Route path='viewbranch/addbranch/:id' element={<AddBranch/>}/> */}
            <Route path='viewbranch/addcourse/:id' element={<AddCourse/>}/>
            <Route path='viewcourse' element={<ViewCourse/>}/>
            <Route path='viewcourse/updatecourse/:id' element={<UpdateCourse/>}/>
            </Route>

        </Routes>
    </Router>
  )
}

export default App