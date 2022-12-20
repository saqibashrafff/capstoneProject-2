
import "./detail.css";

function ProductDetail(props){
    return(
        <div className="col-lg-4 ProductDetailCol">
            <div className="row ProductDetaildiv py-3">

                <div className="DetailDiv1 col-lg-8">
                    <div className="PriceDiv mb-3">
                        <h2>Rs {props.price}$</h2>
                    </div>

                    <div className="textDiv">
                        <p className="text-dark">5,000 km • 2022</p>
                        <p className="mb-4" style={{lineHeight: 1.2}}>{props.title}</p>
                        <span>{props.category}</span>
                    </div>
                </div>

            <div className="col-lg-4 DetailDiv2">
                <div className="IconDiv ">
                        <img src="Images/ShareIcon.svg" width={"20%"} className="p-0"></img>
                        <img src="Images/HeartIcon.svg" width={"20%"} className="p-0" ></img>
                    </div>
                        <span className="DetailDiv2Span">2 weeks ago</span>
                    
                    </div>
            </div>

            {/* Seller */}

            <div className="row SellerDiv">

                <div className="col-lg-12 SellerHeadingDiv">
                    <h5 className="SellerDivHeading">Seller Description</h5>
                </div>

                <div className="col-lg-2 SellerImageDiv">
                    <img src="Images/User.png" width={"130%"}></img>
                </div>

                <div className="col-lg-9 SellerNameDiv">
                    <h5>Hassan Sheikh</h5>
                    <p>Member since Oct 2019</p>
                </div>

                <div className="col-lg-12 SellerButtonDiv">
                    <button className="SellerButton">Chat with seller</button>
                </div>

                <div className="col-lg-12 w-50 m-auto SellerContactDiv">
                    <span>📞 +923222221770</span>
                </div>

            </div>

            <div className="row LocationDiv">
                <div className=" col-lg-12 LocationHeadingDiv">
                    <h5>Posted in</h5>
                    <p>DHA Phase 2, Lahore</p>
                </div>

                <div className="col-lg-12 MapDiv">
                    <div className="LocationImageDiv">
                        <img src="Images/Maps.svg"></img>
                        <h6>SEE LOCATION</h6>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProductDetail;