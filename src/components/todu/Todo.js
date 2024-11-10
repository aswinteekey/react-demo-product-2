import React,{useState} from "react";
import AddTask from "./AddTask";
import ListTask from "./ListTask";

function Todo() {
  const[tasks,setTasks]=useState([])

  const addNewTitle=(title)=>{
    const newItem=[...tasks,{title}]
    setTasks(newItem)
  }

  const removeTask=(index)=>{
    const newList=[...tasks]
    newList.splice(index,1)
    setTasks(newList)
  }
  return (
    <>
      <div className='todo-container'>
      <h2 className="bg-black text-white p-3 mt-lg-5 mt-5">Bucket List</h2>
        <div className='add-task' ><AddTask addNewTitle={addNewTitle} /></div>
        <div className='tasks'>
        {tasks.map((eachtask,index)=>(
          <ListTask task={eachtask} removeTask={removeTask} index={index} key={index}/>
        ))}
        </div>
      </div>
    </>
  );
}

export default Todo;
