
import React, { useState } from 'react';
import Today from '../pages/Today';

export default function Subtask() {
 
    const[subTodo, setSubTodo] = useState("");
    const[startDate,  setStartDate] = useState("")
    const[endDate, setEndDate] = useState("")
    const[detail, setDetail] = useState("")

     function onSubmit(e){
     e.preventDefault()

    const newSubTodo = {
        title : subTodo,
        startDate : startDate,
        endDate : endDate,
        detail : detail, 
        completed : false,   
     }
   
     }

    
  return (
        <form className="popup" id="todoForm" onSubmit={onSubmit}>
            <div className="input-group mb-2">
                <input type="text" className="form-control task-input" placeholder="Task name"  name="name"  required onChange={(e)=> setSubTodo(e.target.value)} value = {subTodo}/>
            </div>
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-6 pe-0">
                        <div className="input-group mb-2">
                            <input type="date" className="form-control start-date"
                                placeholder="Start date"  name="myStartDate"  onChange={(e)=> setStartDate(e.target.value)} value = {startDate}/>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="input-group mb-2">
                            <input type="date" className="form-control end-date"
                                placeholder="End date" name="myEndDate" onChange={(e)=> setEndDate(e.target.value)} value = {endDate} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="input-group mb-2 my-detail">
                <input type="text" className="form-control detail" 
                    placeholder="Details" name="todoDetail"  onChange={(e)=> setDetail(e.target.value)} value = {detail}/>
            </div>
             <div className=" text-center pt-4 ">
                <button className="btn btn-primary px-5" type="submit" id="submit-new-task">CREATE TASK</button>
             </div>
      </form>
  )
}


    

