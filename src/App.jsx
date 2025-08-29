import React from 'react'
import Index from './components/index'
import {Routes, Route} from 'react-router-dom'
// import Navbar from './components/nav'
import Login  from "./components/login";
import Form from './components/form';
import Dashboard from './components/dashboard'; 
// import Sidebar from './components/sidebar'

const App = () => {
  return (
    <div> 
      <div className="main-container">
        {/* <Index /> */}
        <Routes>
          <Route path="/" element={<Index/> } />
          <Route path="/login" element={<Login/>} />
          <Route path='/form' element ={<Form/>}/>
        <Route path = '/dashboard' element = {<Dashboard/>}/>
        </Routes>
      </div>
    </div>
  )
}
export default App