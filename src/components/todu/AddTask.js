import React,{useState} from 'react'
import {Button,Row} from 'react-bootstrap'

function AddTask({addNewTitle}) {
  const[title,getTitle]=useState("")

  const addTitletoFunction=()=>{
    addNewTitle(title)
    getTitle("")
  }
  return (
    <>
    <Row xs={1} sm={2} md={2} className="justify-content-center m-2">
        <input type='text' value={title} onChange={(event)=>{getTitle(event.target.value)}} className='m-2' placeholder='Eg : Plan to buy iphone'/>
        <Button variant="dark"  onClick={addTitletoFunction}>Add</Button>
    </Row>
    </>
  )
}

export default AddTask