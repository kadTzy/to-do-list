
import React, { useState } from 'react';
import './Todolist.css';

const Todolist = () => {
    const[tasks , setTask] = useState([])
    const [newTask ,setNewTask] = useState("")
    
    const newTaskInputHandler =(event)=>{
        setNewTask(event.target.value)
    }
    const addTaskHandler =()=>{
        if(newTask.trim()!==""){
            setTask([...tasks, newTask])
            setNewTask('')
        }
    }
    const deleteBtnHandler=(index)=>{
        const newTasks = tasks.filter((_, i) => i !== index);
        setTask(newTasks);
    }
    
   
      return (
        <div className="list">
          <h1>ToDo List</h1>
          <input type='text' value={newTask} placeholder='Введите зaпрос' onChange={newTaskInputHandler}/>
          <button onClick={addTaskHandler}>add</button>
          <ul>{tasks.map((task , index)=>(
             <li key={index}>
                {task}
                <button onClick={()=>{deleteBtnHandler(index)}}>delete</button>
             </li>
          ))}

          </ul>
        </div>
      );
    }
    
   
    


export default Todolist
