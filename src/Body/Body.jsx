
import BodyArray from "./BodyArray";
import './body.css'
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import AdPage from "../Ad Page/AdPage";

function Body(props){

    const [ProductsData, setProductsData] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            setProductsData(res.data);
        })
        .catch((error) => {
          console.log(error.message);
        })
      },[]);



    return (
        <>
        <div className="CardSection">
            <p className="CardSectionHeading">Fresh Recommendations</p>
            <div className="row CardRowDiv container-fluid m-auto">

                {ProductsData.map( (item, index) => {
                    return (
                        <div className="col-lg-3 CardColDiv" key={item.id}>
                <div className="card-group h-25">
            <div className="card">
            <NavLink to='/AdPage' onClick={() => {
                props.MyhandleClick(item.id);
            }} ><img src={item.image} className="card-img-top " alt="..."/></NavLink>
                <div className="card-body">
                <h5 className="card-title">Rs {item.price}</h5>
                <p className="card-text">{item.title.slice(0,34)}</p>
                <p className="card-text"><small class="text-muted">{item.category}</small></p>
            </div>
            </div>
            </div>
            </div>
                    )
                })}

            </div>
        </div>


    
        </>
    );
}

export default Body;