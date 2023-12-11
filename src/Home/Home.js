import React from "react";
import { Link } from "react-router-dom";
import './Home.css'
export function Home(){
return(
    <><div className="bgimg">
<nav className="navbar navbar-expand-lg bg-body-danger">
  <div className="container-fluid">
  <Link to="/Task2"><a className="navbar-brand">Congrats card</a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to='/Task3'> <a className="nav-link active" aria-current="page">Task3</a></Link>
        </li>
        <li className="nav-item">
        <Link to={'/Task4'}><a className="nav-link">Task4</a></Link>
        </li>
        <li className="nav-item">
        <Link to={'/Task5'}> <a className="nav-link">Task5</a></Link>
        </li>
        <li className="nav-item">
        <Link to={'/Taskk6'}> <a className="nav-link">Task6</a></Link>
        </li>
        <li className="nav-item">
        <Link to={'/Card'}> <a className="nav-link">Task7</a></Link>
        </li>
        <li className="nav-item">
        <Link to={'/Counter'}> <a className="nav-link">Counter</a></Link>
        </li>
        <li className="nav-item">
        <Link to={'/Product'}> <a className="nav-link">Product</a></Link>
        </li>
        <li className="nav-item">
        <Link to={'/Task9'}> <a className="nav-link">Task9</a></Link>
        </li>
        <li className="nav-item">
        <Link to={'/Task10'}> <a className="nav-link">Feedback</a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
   </div>
    </>
);
}