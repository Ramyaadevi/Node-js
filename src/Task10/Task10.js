import React from "react";
import './Task10.css';
import { Link } from "react-router-dom";
export function Task10(){
    return(
        <div className="maindivv d-flex align-items-center justify-content-center">
            <div className="bg-white w-50 rounded p-5">
                <h1>How Satisfied are you with our customer support Perfomance?</h1>
                <div className="d-flex">
                   <figure> 
                        <img src="https://media.istockphoto.com/id/1417947367/vector/3d-yellow-sad-crying-emoticon-isolated.jpg?s=612x612&w=0&k=20&c=2uNNOkq3iWvG8d0YFA3iyPbvSwNTLd_dpvcAwuLnwV4=" className="immg1"/>
                        <figcaption class="figure-caption col-1 mx-auto"><Link to={'/Thanks'}><a href="./Thanks.js">SAD</a></Link></figcaption>
                    </figure>
                    <figure>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/024/237/891/small/big-set-of-yellow-emoji-funny-emoticons-faces-with-facial-expressions-vector.jpg" className="immg" />
                        <figcaption class="figure-caption col-1 mx-auto"><Link to={'/Thanks'}><a href="./Thanks.js">Happy</a></Link></figcaption>
                    </figure>
                    <figure>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6BKiRtW64lqoVgplUlOBKyPfOQGsSELqAO3rfI-B9n_abHr9SD0KjWw3x12WDIh-ehx0&usqp=CAU" className="immg"/>
                        <figcaption class="figure-caption col-1 mx-auto"><Link to={'/Thanks'}><a href="./Thanks.js">None</a></Link></figcaption>
                    </figure>
                </div>
            </div>
        </div>
    );
}