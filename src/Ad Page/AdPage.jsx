
import "./ad.css";
import ProductDetail from "./ProductDetail";
import Description from "./Description";
import { useState, useEffect } from "react";
import axios from "axios";

function AdPage(props){

    const [ProductPage, setProductPage] = useState("");

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/" + props.id)
        .then((res) => {
            setProductPage(res.data);
            console.log(ProductPage);
            
        })
        .catch((error) => {
          console.log(error.message);
        })
      },[]);

    // console.log(props.id);
    // onLoad={() => {
    //     props.PageOnLoad(props.id);
    // }}


    return (
        <div className="AdBodyDiv mt-3 pe-0" >
            

                {/* {ProductPage.map((item) => {
                    return ( */}
                        <div className="row AdRowDiv ">
                        <div className="col-lg-8 AdColDiv ps-0">

                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="false">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={ProductPage.image} class="d-block"/>
                        </div>
                        {/* <div class="carousel-item">
                        <img src="Images/AdPage1.jfif" class="d-block"/>
                        </div>
                        <div class="carousel-item">
                        <img src="Images/AdPage3.jfif" class="d-block"/>
                        </div>
                        <div class="carousel-item">
                        <img src="Images/AdPage4.jfif" class="d-block"/>
                        </div> */}
                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <Description description={ProductPage.description} />
                </div>

                <ProductDetail price={ProductPage.price} title={ProductPage.title} category={ProductPage.category} />
            </div>
                    {/* )
                })} */}

                
        </div>
    );
}

export default AdPage;