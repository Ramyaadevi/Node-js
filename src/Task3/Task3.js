import React from "react";
import "./Task3.css";
import { Link } from "react-router-dom";
function Task3(){
    return(
       <>
       {/* <Link to={'/'}> <button className="bg-primary rounded">Home</button></Link>  */}
       <div className="bg-dark row gap-2">
        <h1 className="text-light text-center">Congratulations</h1>
        <img src="https://assets.ccbp.in/frontend/react-js/rcb-img.png" className="col-12 col-lg-4 img mx-auto"/>
        <img src="https://assets.ccbp.in/frontend/react-js/csk-img.png"className="col-12 col-lg-4 img mx-auto"/>
        </div></>
    );
}
export default Task3

