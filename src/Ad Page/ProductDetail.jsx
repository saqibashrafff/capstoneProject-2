
import "./detail.css";

import HeartIcon from "../Ad Page/AdPage Images/HeartIcon.svg"
import ShareIcon from "../Ad Page/AdPage Images/ShareIcon.svg"
import UserImage from "../Ad Page/AdPage Images/User.png"

function ProductDetail(props){
    return(
        <div className="col-lg-4 col-md-6 col-sm-12 ProductDetailCol">
            <div className="row ProductDetaildiv py-3">

                <div className="DetailDiv1 col-lg-8 col-sm-8 col-md-8">
                    <div className="PriceDiv mb-3">
                        <h2>{props.price}$</h2>
                    </div>

                    <div className="textDiv">
                        <p className="text-dark">5,000 km • 2022</p>
                        <p className="mb-4" style={{lineHeight: 1.2}}>{props.title}</p>
                        <span>{props.category}</span>
                    </div>
                </div>

            <div className="col-lg-4 col-md-4 col-sm-4 DetailDiv2">
                <div className="IconDiv ">
                        <img src={HeartIcon} width={"20%"} className="p-0"></img>
                        <img src={ShareIcon} width={"20%"} className="p-0" ></img>
                    </div>
                        <span className="DetailDiv2Span">2 weeks ago</span>
                    
                    </div>
            </div>

            {/* Seller */}

            <div className="row SellerDiv">

                <div className="col-lg-12 col-md-12 col-sm-12 SellerHeadingDiv">
                    <h5 className="SellerDivHeading">Seller Description</h5>
                </div>
        
                <div className="col-lg-2 col-md-2 col-sm-2 SellerImageDiv">
                    <img src={UserImage} width={"130%"}></img>
                </div>

                <div className="col-lg-9 col-md-9 col-sm-9 SellerNameDiv">
                    <h5>User Name</h5>
                    <p>Member since Oct 2019</p>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 SellerButtonDiv">
                    <button className="SellerButton">Chat with seller</button>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12  w-50 m-auto text-center SellerContactDiv">
                    <span>📞 +923222221770</span>
                </div>

            </div>

            <div className="row LocationDiv">
                <div className=" col-lg-12 col-sm-12 LocationHeadingDiv">
                    <h5>Posted in</h5>
                    <p>DHA Phase 2, Lahore</p>
                </div>

                <div className="col-lg-12 col-sm-12 MapDiv">
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