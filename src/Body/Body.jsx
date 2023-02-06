
import BodyArray from "./BodyArray";
import './body.css'
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import AdPage from "../Ad Page/AdPage";
import { RotatingLines } from "react-loader-spinner";

function Body(props){

    const [ProductsData, setProductsData] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [Index, setIndex] = useState(8);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            setProductsData(res.data.splice(0,8))
            setisLoading(false);
            setIndex(Index + 4);
        })
        .catch((error) => {
          console.log(error.message);
        })
      },[]);

      function LoadData(event){

        setisLoading(true);

        axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            setProductsData(res.data.splice(0,Index))
            setisLoading(false);
        })
        .catch((error) => {
          console.log(error.message);
        });

        setIndex(Index + 4);
        event.preventDefault();
      }

    return (
        <>
            {isLoading ? 
                <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                />

                :

        <div className="CardSection ">
            <p className="CardSectionHeading">Fresh Recommendations</p>
            <div className="row CardRowDiv  m-auto">

                {ProductsData.map( (item) => {

                    return (
                        <div className="col-lg-3 px-1 col-md-6 col-sm-12 CardColDiv" key={item.id}>
                <NavLink className={"NavLinkBody"} to='/AdPage' state={{id:item.id}} ><div className="card-group h-25">
            <div className="card">
            <img src={item.image} className="card-img-top " alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{item.price}$</h5>
                <p className="card-text">{item.title.slice(0,30)}</p>
                <p className="card-text"><small class="text-muted">{item.category}</small></p>
            </div>
            </div>
            </div></NavLink>
            </div>
                    )
                    
                    })}

            </div>

            <div className="LoadButtonDiv">
                <button onClick={LoadData}>Load more</button>
            </div>
        </div>


    
                }</>
    );
}

export default Body;

// onClick={() => {
//     props.MyhandleClick(item.id);
// }}