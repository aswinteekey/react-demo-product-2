import React,{useState,useEffect} from 'react'
import {Button} from 'react-bootstrap';

function UserComments() {
    const[start,setUpdate]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(apidata => setUpdate(apidata.slice(0,10)))
    })

    const likeUpdate=(apiidfromclick)=>{
        const newdata=start.map((eachvalueapi)=>(
            apiidfromclick===eachvalueapi.id?{...eachvalueapi,postId:eachvalueapi.postId+1}:eachvalueapi
        ))
        setUpdate(newdata)
    }
  return (
    <div>
        <h3 className='bg-dark text-white p-3'>Reviews</h3>
        {start.map((eachvalueapi)=>(
            <div className='m-3 p-3 border border-secondary rounded text-start' key={eachvalueapi.id}>
                <h3>{eachvalueapi.email}</h3>
                <h6 className='text-secondary'>{eachvalueapi.body}</h6>
                <h6><Button onClick={()=>likeUpdate(eachvalueapi.id)} style={{ backgroundColor: 'transparent', border: 'none', color: 'inherit'}}>&#10084; {eachvalueapi.postId}</Button></h6>
            </div>
        ))}
    </div>
  )
}

export default UserComments