import { counter } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
export function Counter(){
    const[count,setCount]=useState(0)
   if(count<0){
    document.getElementById("btn2").disabled= true;

   }
   if(count>5){
    document.getElementById("btn1").disabled= true;
   }
    return(
        <>
        <div className="text-center">
        <h1>{count}</h1>
        <button id="btn1" onClick={()=>{setCount(count+1)}}>ADD</button>
        <button onClick={()=>{setCount(0)}}>Reset</button>
        <button id='btn2' onClick={()=>{setCount(count-1)}}>SUB</button>
        </div>
        </>
    );
}