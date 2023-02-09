
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Details from './Details';

export default function TodoList() {
  const [isShown, setIsShown] = useState(false);
    return (
 
    <div className='row'>
      <div className="col-md-8 todo-task">

        <div className="flex-column">
          <div className="tab-content" id="nav-tabcontent">
              <div className="tab-pane fade show active task" id="yesterday-task" role="tabpanel"
                  aria-labelledby="nav-home-tab">
                  <div className="d-flex justify-content-between  mb-1 pe-3 pt-2 mt-2 first-task">
                      <div className="ps-3">
                          <p>Task to do inthe near future</p>

                      </div>
                      <div>
                          <img src={require('../Images/arrow.svg').default} className="pe-3 pe-2" rel=""  alt ="" />
                          <img src={require('../Images/delete.svg').default} className="pe-3 " rel=""  alt =""/>

                          <img src= {require("../Images/edit.svg").default} className="pe-3 " rel=""  alt ="" />

                          <img src={require("../Images/checkmark-circled.svg").default} rel=""  alt ="" />
                      </div>
                  </div>
                    <div className="d-flex justify-content-between  bg-light mb-1 ms-5 pe-3" 
                      onMouseEnter={() =>{setIsShown(true)}}
                      onMouseLeave={() => {setIsShown(false)}}>
                      <div>
                          <div className="d-flex ms-0">
                              <img src={require("../Images/Path 18.svg").default} className="arrow" rel=""  alt =""/>
                              <p className="pt-2">Task to do inthe near future</p>
                          </div>
                      </div>
                      <div>
                          <img src={require('../Images/arrow.svg').default} className="pe-3 pe-2 pt-3" rel=""  alt ="" />
                          <img src={require('../Images/delete.svg').default} className="pe-3 pt-3 " rel=""  alt =""/>

                          <img src= {require("../Images/edit.svg").default} className="pe-3 pt-3" rel=""  alt ="" />

                          <img src={require("../Images/checkmark-circled.svg").default} className = "pt-3" rel=""  alt ="" />
                      </div>
                  </div>

                </div>
              </div>
          </div>
          
        </div>
    { isShown && (
      <div className='col-md-4'>
              <Details></Details>
      </div>
    )
    }
   </div>
  
  )
}
