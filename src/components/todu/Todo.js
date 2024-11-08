import React,{useState} from "react";
import AddTask from "./AddTask";
import ListTask from "./ListTask";

function Todo() {
  const[tasks,setTasks]=useState([
    {title:'Buy Books'},
    {title:'Buy Phone'},
    {title:'Cart some mobile accessories'}
  ])

  const addNewTitle=(title)=>{
    const newItem=[...tasks,{title}]
    setTasks(newItem)
  }
  return (
    <>
      <div className='todo-container'>
      <h3 className='bg-dark text-white p-3'>Add Bucket list</h3>
        <div className='add-task' ><AddTask addNewTitle={addNewTitle}/></div>
        <div className='tasks'>
        {tasks.map((eachtask)=>(
          <ListTask task={eachtask}/>
        ))}
        </div>
      </div>
    </>
  );
}

export default Todo;
