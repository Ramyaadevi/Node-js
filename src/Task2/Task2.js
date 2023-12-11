import React from "react";
import './Task2.css'
import { Link } from "react-router-dom";
export function Task2() {
    return (
    <div className=" container-fluid bgimg text-center">
           {/* <Link to={'/'}> <button className="bg-primary rounded">Home</button></Link> */}
      <h1>Congratulations</h1>
      <div className="bg-info row text-center mx-auto p-2 col-6">
        <div className="col-12">
          <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" alt=" "/>
          <h1>Kiran</h1>
        </div>
        <div className="col-12">
          <p>about.me is a personal web hosting service co-founded by Ryan Freitas, Tony Conrad and Tim Young in October 2009. The site offers registered users a simple platform from which to link multiple online identities, relevant external sites, and popular social networking websites such as Facebook</p>
          <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" alt=" "/>
        </div>
      </div>
    </div>
    );
  }
  