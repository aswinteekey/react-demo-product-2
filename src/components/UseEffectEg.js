import React,{useState,useEffect} from 'react'

function UseEffectEg(){
    const[count1,setCount1]=useState(0)
    const[count2,setCount2]=useState(1)

    useEffect(()=>{
        console.log("checking useEffect")
    },[count1])
    return(
        <div>
            <div>
                <h1>{count1}</h1>
                <button onClick={()=>(setCount1(count1+2))}>+</button>
            </div>
            <div>
                <h1>{count2}</h1>
                <button onClick={()=>(setCount2(count2+2))}>+</button>
            </div>
        </div>
    )

}

export default UseEffectEg