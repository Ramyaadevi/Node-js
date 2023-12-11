import React, { useState } from "react";
import './Task9.css'
export function Task9(){
    const[count,setCount]=useState(4);
    const[bacount,setBacount]=useState(5);

    return(
        <>
        <div className="bg-warning parentdiv row align-items-center ">
            <div className="bg-light  rounded col-6 mx-auto w-75 text-center">
                <h1 className="text-center">Bop ate <span className="text-warning">{count}</span> mangoes <span className="text-warning">{bacount}</span> bananas</h1>
                <div className="d-flex justify-content-center whitebox align-items-center">
                <div>
                    <img src="https://www.financialexpress.com/wp-content/uploads/2023/07/Dashehari11.jpg" alt=".." className="image1 m-5"/><br/>
                    <button className="but bg-info text-light rounded" onClick={()=>{setCount(count+1)}}>Eat mango</button>
                    </div>
                    <div>
                    <img src="https://media.istockphoto.com/id/1400057530/photo/bananas-isolated.jpg?b=1&s=612x612&w=0&k=20&c=l_PYva9aG-82rWFI_HQ8jzArXRYiciq2cVvX12Sj-QU=" alt=".." className="image1 m-5"/><br/>
                    <button className="but bg-info text-light rounded" onClick={()=>{setBacount(bacount+1)}} center>Eat Banana</button></div></div>
                    </div>
                </div>
        </>
    );
}