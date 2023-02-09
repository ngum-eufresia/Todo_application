import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../boostrap/css/bootstrap.min.css';


export default function Sidebar() {
  function CustomLink({ to, children, ...props }) {
      const resolvedPath = useResolvedPath(to)
      const isActive = useMatch({ path: resolvedPath.pathname, end: true })

      return (
        <div className={isActive ? "active" : ""}>
          <Link to={to} {...props}>
            {children}
          </Link>
        </div>
      )
  }

  return (
         <div>
            
            <div className="" id="nav-tab">
                <div className="ps-4 p-2 nav-item ">
                    <CustomLink to="/today" content-id="today-task">Today's Task</CustomLink>
                </div>
                <div className="ps-4 p-2">
                    <Link to="/" content-id="yesterday-task">Yesterday</Link>
                </div>
                <div className=" ps-4 pb-2">
                    <CustomLink to="/important" content-id="important-task">Important</CustomLink>
                </div>
                <div className="ps-4 pb-2">
                  <CustomLink to="/archived" content-id="archived-task">Archived</CustomLink>
                </div>
                <div className="ps-4">
                    <CustomLink to="/completed" content-id="completed-task">Completed</CustomLink>
                </div>
            </div>

          </div>

  )


  }
