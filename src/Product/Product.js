import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
export function Product(){
    const[pro,setPro]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products?limit=5")
        .then(data=>data.json())
        .then(putproduct=>setPro(putproduct))
    })
    return(
        <>
            <h1>Products</h1>
            <div className="row">

            {
                pro.map((value,index)=>(
                    <>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Product-Image</th>
      <th scope="col">Name</th>
      <th scope="col">description</th>
      <th scope="col">More details</th>
      <th scope="col">ratings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="col-2"><img src={value.image} className="col-3"/></td>
      <td className="col-2">{value.title}</td>
      <td className="col-3">{value.description}</td>
      <td className="col-1"><Link to={`/details/${value.id}`}>View</Link></td>
      <td className="col-4"><StarRatings
      starRatedColor="red"
        rating={value.rating.rate}
        starDimension="40px" 
        starSpacing="15px"
      />
</td>
    </tr> 
  </tbody>
</table>
                    </>

                ))
                
            }
            </div>

            
        </>
    );
}