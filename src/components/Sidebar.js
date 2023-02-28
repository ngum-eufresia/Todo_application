import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../boostrap/css/bootstrap.min.css';


export default function Sidebar() {
  function CustomLink({ to, children, ...props }) {
      const resolvedPath = useResolvedPath(to)
      const isActive = useMatch({ path: resolvedPath.pathname, end: true })

      return (
        <div className={isActive ? "active" : ""}>
          <div className='pb-2 p-2'>
          <Link to={to} {...props}>
            {children}
          </Link>
        </div>
       </div>
      )
  }

  return (
         <div>
            
            <div className="" id="nav-tab">
                <div className=" nav-item ">
                    <CustomLink to="/today" content-id="today-task" className = "nav-text" >Today's Task</CustomLink>
                </div>
              
                  <CustomLink to="/" content-id="yesterday-task" className = "nav-text" >Yesterday</CustomLink>

                  <CustomLink to="/important" content-id="important-task"  className = "nav-text" >Important</CustomLink>
                
                  <CustomLink to="/archived" content-id="archived-task"  className = "nav-text">Archived</CustomLink>
                
                  <CustomLink to="/completed" content-id="completed-task"  className = "nav-text">Completed</CustomLink>
              
            </div>

          </div>

  )


  }
