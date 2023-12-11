import React from "react";
import './Task5.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck,faBell,faXmarkCircle} from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";
export function Task5(){
    return(
        <>    
               {/* <Link to={'/'}> <button className="bg-primary rounded">Home</button></Link> */}
        <h1 className="d-flex justify-content-center">Notifications</h1>
        <div  className="row gap-1">
            <div className=" bg-primary col-12 col-md-4 col-lg-3 p-3 text-light"><FontAwesomeIcon icon= {faCircleCheck}></FontAwesomeIcon>   Information Message</div>
            <div className=" bg-success col-12 col-md-4 col-lg-3 p-3 text-light"><FontAwesomeIcon icon= {faCircleCheck}></FontAwesomeIcon>  Success Message</div>
            <div className=" bg-warning col-12 col-md-4 col-lg-3 p-3 text-light"><FontAwesomeIcon icon= {faBell}></FontAwesomeIcon>   Warning Message</div>
            <div className=" bg-danger  col-12 col-md-4 col-lg-3 p-3 text-light"><FontAwesomeIcon icon= {faXmarkCircle}></FontAwesomeIcon> Error Message</div>
        </div>
        </>
    );
}