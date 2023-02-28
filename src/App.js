import React from 'react'
import './App.css';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './boostrap/js/bootstrap.min.js';
import { Route, Routes } from "react-router-dom"
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Details from './components/Details';
import Yesterday from './pages/Yesterday';
import Archived from './pages/archived';
import Today from './pages/Today';
import Important from './pages/Important';
import Completed from './pages/Completed';


function App() {
  return (
    
 <div>
   <Header></Header>
    <div className='container-fluid p-0 todo-body'> 
     <div className='row'>
      <div className='col-md-3 p-0'>
        <Sidebar />
      </div>
      <div className='col-md-9'>
        <Routes>
          <Route path="/today" element={<Today />} />
          <Route path="/" element={<Yesterday />} />
          <Route path="/important" element={<Important />} />
          <Route path="/archived" element={<Archived/>} />
          <Route path="/completed" element={<Completed />} />
        </Routes>
      </div>
      </div>
   </div>
</div>
  )
}

export default App