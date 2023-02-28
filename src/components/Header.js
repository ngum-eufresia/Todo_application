
import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../boostrap/css/bootstrap.min.css';

export default function Header(){
 
    return(
    <div className="section">

        <nav className="navbar navbar-expand-lg navbar-light header">
            <div className="container-fluid">
                <a className="navbar-brand ps-4 text-center" href="#completed-task">
                    <img src= {require("../Images/menu.svg").default} className="pb-1" rel=""  alt=""/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className=" me-auto">
                    </div>
                    <div className="d-flex align-items-center">
                        <form>
                            <div className="d-flex align-items-center">
                                <div className="input-group search-input">
                                    <input type="text" className="form-control input-item"
                                        placeholder="" aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"></input>
                                    <span className="input-group-text search-icon" id="basic-addon2">
                                        <img src={require('../Images/search.svg').default} rel="" alt =""/>

                                     </span>
                                </div>

                                <div className="px-4"><img src= {require("../Images/notification-solid-badged.svg").default} rel=""  alt =""/></div>
                                <div className="pe-4"><img src={require("../Images/person-circle.svg").default} rel=""  alt =""/></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    </div>   

    )
  
 } 


