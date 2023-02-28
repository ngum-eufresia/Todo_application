
import React, { useState, useEffect } from 'react';
import Details from '../components/Details';
import Form from '../components/Form';
import Subtask from '../components/Subtask';

import Subtile from '../components/Subtile';
export default function Today() {
    let currentTodo;
        const [editTodo, setEditTodo] = useState("")
        let [todos, setTodos] = useState([]);
        const[todoId,setTodoId] = useState('');
        const [isShown] = useState(false);

        function handleSubmit(todo) {
            let newTodos = [];

           if(setEditTodo){
            newTodos = todos.map((todoEdit)=>{
            if (todoEdit.id == todo.id){
                console.log("here come our todoedit value")
                console.log(todoEdit.id)
                todoEdit = [...todoEdit, todo]
            }
            return todoEdit;
        })
             
           }else{
            newTodos = [...todos, todo]
           }
            if (todo.todoId) {

            newTodos = todos.map((todoObj)=>{
              if(todoObj.id == todo.todoId ){
                    todoObj['subTodos'] = [...todoObj['subTodos'],todo]
                }
                return todoObj;
             })   
            }else{
               newTodos = [...todos,todo]
            }
            console.log("todoObj==================================================");

           console.log(newTodos);
           setTodos(newTodos); 
           setTodoId('');
        
        }
        function deleteTodo(id){
            const updatedTodos = [...todos].filter((todo) => todo.id !==id)
            setTodos(updatedTodos)

        }
        function completedTodos(id){
          const updatedTodos = [...todos].map((todo) =>{
            if( todo.id !==id){
                todo.completed = !todo.completed
            }
            return todo
        })
        setTodos(updatedTodos)

        
        }
        function subTodo(id){
            console.log("Hello America",id);

            // const updatedTodos = []
        }
    //     function editMyTodo(todo){
    //       console.log("I am getting the value of the value to be edited")
    //       console.log(todo)
    //       const edit = [... editTodo, todo]
    //       console.log(edit);
    //       ed = todo.title;
    //       console.log(edit.title);


          
        
    // }
            return( 
        
            <div className='row'>
              <div className="col-md-8 todo-task h-45">

                <div className="flex-column">
                    <div className="tab-content" id="nav-tabcontent">

                             
                            {todos.map((todo)=> {
                                return(
                                <div className="tab-pane fade show active task" id="yesterday-task" role="tabpanel"
                                    aria-labelledby="nav-home-tab">
                                    <div className="d-flex justify-content-between  mb-1 pe-3 pt-2 mt-2 main-task">
                                        <div className="ps-3">
                                            <p>{todo.title}</p>
                                        </div>
                                        <div>
                                       <button onClick ={()=> setTodoId(todo.id)}  
                                            className="btn but-add" 
                                            data-bs-toggle="modal" id="popup" 
                                            data-bs-target="#exampleModal">
                                            <img src={require('../Images/arrow.svg').default} className="pe-1" rel=""  alt ="" />
                                        </button>
                                        <button onClick={() => deleteTodo(todo.id)} className="but-add">
                                            <img src={require('../Images/delete.svg').default} className="pe-1 " rel=""  alt =""/>
                                        </button>

                                        <button onClick={() => setEditTodo(todo)} className="but-add" data-bs-toggle="modal" id="popup"  data-bs-target="#exampleModal">
                                            <img src= {require("../Images/edit.svg").default} className="pe-1 " rel=""  alt =" " />
                                        </button> 

                                        <button onClick ={() => completedTodos(todo.id)} className="but-add">
                                        <img src={require("../Images/checkmark-circled.svg").default} rel=""  alt ="" />
                                        </button>
                                     </div>
                                 </div>
                                 {todo.subTodos.map((subTodo)=><Subtile subtask = {subTodo.title}/>
                                  
                                  )}
                             </div>

                                )  
                            }    
                         )  
                        }

           
                         
                        </div>
                    </div>

                    <div className="section add-todo pb-5 me-5 d-flex justify-content-end">
                        <div className="add text-center text-md-center text-lg-end ">
                            <button type="button" className=" but-add" data-bs-toggle="modal" id="popup"
                                data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                                  <img src ={require ("../Images/Group 2.svg").default} className="pt-4 pe-4 ms-2 img-fluid" rel="" alt = ""/></button>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel"
                      aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                              <div className="modal-header">
                                  <h6 className="modal-title text-center w-100" id="exampleModalLabel">CREATE A NEW TASK</h6>
                                  <button type="button" className="btn-close" data-bs-dismiss="modal"
                                      aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                <Form handleSubmit={handleSubmit} todoId={todoId} currentTodo={console.log(setEditTodo)}>
                                </Form>
                              </div>
                              <div className="modal-footer">
                              </div>
                          </div>
                      </div>
                </div>
   

                    {isShown && (
              <div className='col-md-4'>
                      <Details></Details>
                </div>
                 )
                }
            
           </div>

          )
    }

