import React from 'react'
import './App.css';
import TodoList from './TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './boostrap/css/bootstrap.min.css';
import './boostrap/js/bootstrap.min.js';
import Header from './header';

function App() {
  return (
    <div>
      
      <Header></Header>
      <TodoList></TodoList>
    </div>
  )
}

export default App;
