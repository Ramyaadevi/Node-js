import React from "react";
import './mac_lern.jpg'
import './Card.css';
import { Link } from "react-router-dom";
export function Card(){
    return(
        <>
    {/* <Link to={'/'}> <button className="bg-primary rounded">Home</button></Link> */}
    <h1 className="text-center">Learn 4.0 Technologies</h1>
    <p className="text-center">Get trained by alumini of 5ts and top companies like Amazon, Microsoft, intel, Nividle, Qualcom</p>
        <div class="row row-cols-1 row-cols-md-2 g-4 ">
  <div className="col-12 col-md-5 mx-auto">
    <div class="card card2 col-6">
      <div class="card-body">
        <h5 class="card-title">Data Scientist</h5>
        <p class="card-text">A data scientist is an analytics professional who is responsible for collecting, analyzing and interpreting data to help drive decision-making</p>
      <div className="text-end"><img src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/01/archetypes-banner.png" className="imag" alt="..."/>
</div>
      </div>
    </div>
  </div>
  <div className="col-12 col-md-5">
    <div className=" card card1 col-6">
      <div class="card-body">
        <h5 class="card-title">IOT Developer</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
     <div className="text-end">      <img src="https://www.iotforall.com/wp-content/uploads/2022/04/Top-IoT-Tools-and-Platforms-for-IoT-Development-and-Developers-1-768x576.jpg" className="imag" alt="..."/>
</div>
      </div>
    </div>
  </div>
  <div className="col-12 col-md-5 mx-auto">
    <div class="card card3 col-6">
      <div class="card-body">
        <h5 class="card-title">VR Developer</h5>
        <p class="card-text">Virtual reality aims to fully replace reality with software that supports full coverage of the senses.
Augmented reality adds layers to reality to improve it rather than providing full coverage. It can be served through hardware like smartphones.</p>
<div className="text-end"><img src="https://miro.medium.com/v2/resize:fit:1015/1*Jqrvy8kk7x2_5HcA3TeG1Q.jpeg" className="imag " alt="..."/>
</div></div>
    </div>
  </div>
  <div className="col-12 col-md-5">
    <div class="card card4 col-6">
      <div class="card-body">
        <h5 class="card-title">Machine Learning</h5>
        <p class="card-text">Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy. IBM has a rich history with machine learning.</p>
        <div className="text-end"><img src='https://miro.medium.com/v2/resize:fit:1400/1*cG6U1qstYDijh9bPL42e-Q.jpeg' className="imag" alt="..."/></div>

      </div>
    </div>
  </div>
</div>
        </>
    );

}