// import React from 'react';
// import { useState } from 'react';
// import './ToDoList.css';

// const ToDoList = () => {

//     const [tasks, setTasks] = useState([" Eat Breakfast", "Take a shower", "Walk the dog"]);
//     const [newTask, setNewTask] = useState();

//     const onChangeHandler = (event) => {
//         setNewTask(event.target.value);
//     }

//     const addTaskHandler = () => {
//         if(newTask.trim() !== "") {
//             setTasks (updatedtasks => [...updatedtasks, newTask]);
//             setNewTask(" ");
//         }
//     }

//     const deleteTaskHandler = (index) => {
//         const deleteTasks = tasks.filter((Element, i) => i !== index);

//         setTasks(deleteTasks);
//     }

//     const moveUpHandler = (index) => {
//         if(index > 0){
//             const upTasks = [...tasks];
//             [upTasks[index], upTasks[index - 1]] = [upTasks[index - 1], upTasks[index]];
//             setTasks(upTasks);
//         }
//     }

//     const moveDownHandler = (index) => {
//         if(index < tasks.length - 1){
//             const downTasks = [...tasks];
//             [downTasks[index], downTasks[index + 1]] = [downTasks[index + 1], downTasks[index]];
//             setTasks(downTasks);
//         }
//     }
//   return (
//     <div className="todoList">
//         <h1> To do list</h1>
//         <div>
//             <input type="text" placeholder='Enter a task....' onChange={onChangeHandler}/>

//             <button className="addButton" onClick={addTaskHandler}> Add</button>
//         </div>

//         <ol>
//             {tasks.map((task, index) => 
//                 <li key={index}>
//                     <span className="text">{task}</span>
//                     <button className="deleteButton" onClick={() =>deleteTaskHandler(index)}> Delete </button>
//                     <button className= "upButton" onClick={() =>moveUpHandler(index)}> Move Up </button>
//                     <button className= "downButton" onClick={() =>moveDownHandler(index)}> Move Down </button>
//                 </li>
                
//             )}
//         </ol>

//     </div>
//   )
// }

// export default ToDoList;


import React, { useState } from 'react'

const ToDoList = () => {

    const[tasks, setTasks] = useState(["Wake up", "Breakfast", "work", "lunch", "break" ]);
    const[newTasks, setNewTasks] = useState("");

    const onChangeHandler = (event) => {
        setNewTasks(event.target.value);
    }

    const addTask = () => {

    }

    const deleteTask = (index) => {

    }

    const moveTaskUp = (index) => {

    }

    const moveTaskDown = (index) => {

    }

  return (
    <div>
        <div>
            <input type='text'  onChange={onChangeHandler} placeholder='Enter a task' value={newTasks}/>
            <button onClick={addTask}>Add Task</button>
        </div>
        <ol>
        {
            tasks.map((task, index) => 
                <li key={index}> 
                <span>{task}</span>
                <button onClick={() => deleteTask(index)}>Delete</button>
                <button onClick={() => moveTaskUp (index)} >Up</button>
                <button onClick={() => moveTaskDown (index)}>Down</button>
                </li>
            )
        }
        </ol>

    </div>
  )
}

export default ToDoList;