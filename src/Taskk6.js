import React from "react";
import './Taskk6.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faUser} from '@fortawesome/free-solid-svg-icons'
 function Taskk6(){
    return(
      
        <div className=" maindiv">
           {/* <Link to={'/'}> <button className="bg-primary rounded">Home</button></Link> */}
            <div className="bg-light m-5 p-5 rounded row">
            <div className="col-12 col-md-6">
                <img src="https://media.istockphoto.com/id/1138762359/vector/cartoon-people-character-design-woman-using-laptop-computer-and-sitting-by-the-table.jpg?s=2048x2048&w=is&k=20&c=lhtUG6nn7Wpi2ToYeiSBgSld2t73IfL_oySQ5ba0iqw=" className="w-75"/>
            </div>
            <div className="col-12 col-md-6">
                <h1>Member Login</h1>
                <div className="d-flex"><FontAwesomeIcon icon={faUser} /><input type="text" placeholder="Email" className="mt-3 rounded"></input></div><br/>
                <input type="Password" placeholder="******" className="mt-3 rounded" ></input><br/>
                <button className="bg-success mt-3 rounded p-2 ps-5 pe-5 text-light">Login</button>
                <h4 className="text-success mt-3"><span className="text-dark">Forget</span> Username / Password ?</h4>
                <h4 className="text-success mt-3">Create your account-^</h4>
            </div>
            </div>
        </div>
       
    );
}
export default Taskk6;