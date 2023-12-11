import React from "react";
import './Task4.css';
import { Link } from "react-router-dom";
export function Task4(){
    return(
        <>
        <div className="container-fluid div1">
        {/* <Link to="/"><button className=" rounded bg-primary">Home</button></Link> */}
        <h1 className="text-light text-center pt-5 ">Social Button</h1>
        <div className=" text-center ">
        <button className="p-3 ps-5 pe-5 m-3 rounded bg-warning">Like</button>
        <button className="rounded p-3 ps-5 pe-5 m-3">Comment</button>
        <button className="bg-primary p-3 ps-5 pe-5 m-3 rounded text-light">Share</button>
        </div>
        </div>
        </>
    );
}
