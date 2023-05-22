import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from '../Common/Navbar'
import Home from '../Pages/Home'
import AddUsers from '../Pages/AddUsers'
import AllUsers from '../Pages/AllUsers'
import NotFound from '../Pages/NotFound'
import Edit from '../Pages/Edit'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const MyRoute = () => {
  return (
    <>
      <ToastContainer/>
      <Router>
          <Navbar/>
          <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/add' element={<AddUsers/>}/>
                <Route path='/all' element={<AllUsers/>}/>
                <Route path='/edit/:id' element={<Edit/>}/>
                <Route path='*' element={<NotFound/>}/>
          </Routes>
      </Router>
    </>
  )
}

export default MyRoute