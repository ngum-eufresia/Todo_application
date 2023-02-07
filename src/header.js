import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './boostrap/css/bootstrap.min.css';
import {useState} from 'react';


// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [isShown, setIsShown] = useState(false);

//   return (
//     <div className="App">
//       <button
//         onMouseEnter={() => setIsShown(true)}
//         onMouseLeave={() => setIsShown(false)}>
//         Hover over me!
//       </button>
//       {isShown && (
//         <div>
//           I'll appear when you hover over the button.
//         </div>
//       )}
//     </div>
//   );
// }


export const Header = () => {


// const Search = () => {
//   const [showResults, setShowResults] = React.useState(false)
//   const onClick = () => setShowResults(true)
//   return (
//     <div>
//       <input type="submit" value="Search" onClick={onClick} />
//       { showResults ? <Results /> : null }
//     </div>
//   )
// }

// const Results = () => (
//   <div id="results">
//     Some Results
//   </div>
// )
    
  
    return(

    <div class="section">

        <nav class="navbar navbar-expand-lg navbar-light header">
            <div class="container-fluid">
                <a class="navbar-brand ps-4 text-center" href="#completed-task">
                    <img src= {require("./Images/menu.svg").default} class="pb-1" rel=""  alt=""/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class=" me-auto">
                    </div>
                    <div class="d-flex align-items-center">
                        <form>
                            <div class="d-flex align-items-center">
                                <div class="input-group search-input">
                                    <input type="text" class="form-control input-item border-light"
                                        placeholder="" aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"></input>
                                    <span class="input-group-text search-icon" id="basic-addon2">
                                        <img src={require('./Images/search.svg').default} class="" rel="" alt =""/>

                                     </span>
                                </div>

                                <div class="px-4"><img src= {require("./Images/notification-solid-badged.svg").default} rel=""  alt =""/></div>
                                <div class="pe-4"><img src={require("./Images/person-circle.svg").default} rel=""  alt =""/></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </nav>


        <div class="section todo-body">

            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-3 p-0">

                        <nav>
                            <div class="sidebar nav-tabs nav-fill " id="nav-tab" role="tablist">
                                <div class="nav ps-4">
                                    <a class="nav-link" href="#today-task" content-id="today-task"
                                        onclick="switchActiveClass(event)">Today's Task</a>
                                </div>
                                <div class="nav ps-4 active">
                                    <a class="nav-link d-block w-100" href="#yesterday-task" content-id="yesterday-task"
                                        onclick="switchActiveClass(event)">Yesterday</a>
                                </div>
                                <div class="nav ps-4">
                                    <a class="nav-link" href="#important-task" content-id="important-task"
                                        onclick="switchActiveClass(event)">Important</a>
                                </div>
                                <div class="nav ps-4">
                                    <a class="nav-link" href="#archived-task" content-id="archived-task"
                                        onclick="switchActiveClass(event)">Archived</a>
                                </div>
                                <div class="nav ps-4">
                                    <a class="nav-link" href="completed.task" content-id="completed-task"
                                        onclick="switchActiveClass(event)">Completed</a>
                                </div>
                            </div>
                        </nav>
        
                    </div>

                    <div class="col-12  col-md-6 col-lg-6 todo-task">
                        <div class="flex-column">
                            <div class="tab-content" id="nav-tabcontent">
                                <div class="tab-pane fade show active task" id="yesterday-task" role="tabpanel"
                                    aria-labelledby="nav-home-tab">
                                    <div class="d-flex justify-content-between  mb-1 pe-3 pt-2 mt-2 first-task">
                                        <div class="ps-3">
                                            <p class="">Task to do inthe near future</p>

                                        </div>
                                        <div class="">
                                            <img src={require('./Images/arrow.svg').default} class="pe-3 pe-2" rel=""  alt ="" />
                                            <img src={require('./Images/delete.svg').default} class="pe-3 " rel=""  alt =""/>

                                            <img src= {require("./Images/edit.svg").default} class="pe-3 " rel=""  alt ="" />

                                            <img src={require("./Images/checkmark-circled.svg").default} rel=""  alt ="" />
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between  bg-light mb-1 ms-5 pe-3">
                                        <div class="">
                                            <div class="d-flex ms-0">
                                                <img src="images/Path 18.svg" class="arrow" rel=""  alt =""/>
                                                <p class="pt-2">Task to do inthe near future</p>
                                            </div>
                                        </div>
                                        <div class="">
                                            <img src={require('./Images/arrow.svg').default} class="pe-3 pe-2 pt-3" rel=""  alt ="" />
                                            <img src={require('./Images/delete.svg').default} class="pe-3 pt-3 " rel=""  alt =""/>

                                            <img src= {require("./Images/edit.svg").default} class="pe-3 pt-3" rel=""  alt ="" />

                                            <img src={require("./Images/checkmark-circled.svg").default} class = "pt-3" rel=""  alt ="" />
                                        </div>
                                    </div>

                                </div>

                                <div class="tab-pane fade" id="today-task" role="tabpanel"
                                    aria-labelledby="nav-home-tab">
                                    Welcome to todays task
                                </div>

                                <div class="tab-pane fade" id="important-task" role="tabpanel"
                                    aria-labelledby="nav-home-tab">
                                    Welcome to important task
                                </div>
                                <div class="tab-pane fade" id="archived-task" role="tabpanel"
                                    aria-labelledby="nav-home-tab">
                                    Welcome to archived task
                                </div>
                                <div class="tab-pane fade" id="completed-task" role="tabpanel"
                                    aria-labelledby="nav-home-tab">

                                </div>

                            </div>

 
                            <div class="section add-todo pb-5 me-5 d-flex justify-content-end">
                                <div class="add text-center text-md-center text-lg-end ">
                                    <button type="button" class="btn but-add" data-bs-toggle="modal" id="popup"
                                        data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                                            <img src={require("./Images/Group 2.svg").default} class="pt-4 pe-3 ms-2 img-fluid" rel=""  alt =""/></button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12  col-md-6 col-lg-3 ps-4 date-track" id="details">

                        <h6 class="fw-bold">DETAILS</h6>
                        <p class=" ps-1 pe-4 lorem">Lorem ipsum dolor sit amet, consetetur sadipci elitr, sed
                            diam
                            nonumy
                            eirmod tempor invidunt ut labore et dolore magna
                            aliquyam erat, sed

                        </p>
                        <div class="d-flex justify-content-between time-track">
                            <div class="">
                                <span>

                                    <img src="images/sand-clock 1.svg" rel=""  alt =""/>
                                </span>
                                MON 10-10-22

                            </div>
                            <div class=" pe-5 me-3">
                                <span>
                                    <img src="images/sand-clock 1.svg" rel=""  alt ="" />
                                </span>
                                MON 10-10-22
                            </div>
                        </div>
                    </div>


                </div>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h6 class="modal-title text-center w-100" id="exampleModalLabel">CREATE A NEW TASK</h6>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form class="popup" id="todoForm" onsubmit="submitForm(event)">
                                    <div class="input-group mb-2">
                                        <input type="text" class="form-control task-input" placeholder="Task name"
                                            aria-label="Task name" aria-describedby="basic-addon1" name="name" />
                                    </div>
                                    <div class="container-fluid p-0">
                                        <div class="row">
                                            <div class="col-6 pe-0">
                                                <div class="input-group mb-2">
                                                    <input type="date" class="form-control start-date"
                                                        placeholder="Start date" aria-label="Username"
                                                        aria-describedby="basic-addon1" name="myStartDate" />
                                                </div>
                                            </div>

                                            <div class="col-6">
                                                <div class="input-group mb-2">
                                                    <input type="date" class="form-control end-date"
                                                        placeholder="End date" aria-label="Username"
                                                        aria-describedby="basic-addon1" name="myEndDate" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="input-group mb-2 my-detail">
                                        <input type="text" class="form-control detail" placeholder="Details"
                                            aria-label="Details" aria-describedby="basic-addon1" name="todoDetail"/>
                                    </div>
                                    <div class=" text-center pt-4 ">
                                        <button class="btn btn-primary px-5" type="submit" id="submit-new-task">CREATE
                                            TASK</button>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



    ) 
  
 } 


