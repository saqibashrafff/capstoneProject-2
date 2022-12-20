
import "./category.css";
import BodyArray from "../Body/BodyArray";
import FilterSection from "./FilterSection";
import { useLocation } from "react-router-dom";

function CategoryPage(){

    return (
        <div className="CategorySection">
            <div className="row CategoryRowDiv">

            <div className="col-lg-12 CategoryNavCol ">
                <a href="">Home</a>
                <span> / </span>
                <a href="">Mobiles</a>
            </div>

            {/* Category Heading */}

            <div className="col-lg-12 CategoryHeadCol">
                <h4>Mobile Phones</h4>
            </div>

            {/* Filters Section */}

            <div className="col-lg-3 pb-2 ps-4 CategoryFilterCol">
                <h6>Filter</h6>
            </div>

            <div className="col-lg-9 CategoryViewDiv">
                <div className="row CategoryViewRow">
                    <div className="col-lg-6 CategoryViewAdsCol">
                        <span>10,000+ ads</span>
                    </div>

                    <div className="col-lg-2 text-end CategoryViewCheckCol">
                        <input type={"checkbox"} id="PhotoView" name="PhoteView"></input>
                        <label for="PhotoView" >Only with photos</label>
                    </div>

                    <div className="col-lg-2 p-0 ps-2 border-start border-end CategoryViewIconsCol">
                        <span>VIEW</span>
                        <img src="Images/ViewTags.svg"></img>
                        <img src="Images/ViewMenu.svg" ></img>
                        <img src="Images/ViewDesktop.svg" ></img>
                    </div>

                    <div className="col-lg-2 ps-1 dropdown">

                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            SORT BY: <span>Newly listed</span>
                        </a>
                        <ul className="dropdown-menu w-100 ps-3 ">
                            <li><a className="dropdown-item mb-3" href="#">Newly listed</a></li>
                            <li><a className="dropdown-item mb-3" href="#">Most relevant</a></li>
                            <li><a className="dropdown-item mb-3" href="#">Lowest price</a></li>
                            <li><a className="dropdown-item mb-3" href="#">Highest price</a></li>
                        </ul>

                    </div>
                    
                </div>
            </div>

            {/* Category Proper Section */}

            <div className="col-lg-12 pt-1 CategorySectionDiv">
                <div className="row ">

                    <div className="col-lg-3 CategoryfilterDiv">
                        <FilterSection />
                    </div>

                    <div className="col-lg-9 CategoryItemDiv pt-1 mt-1">

                        {BodyArray.map((item) => {
                            return (
                            <div className="row CategoryItemRow">
                                <div className="col-lg-4 bg-warning ps-0 pe-1 ItemImageDiv">
                                    <img className="bg-dark" src={item.image}></img>
                                </div>

                                <div className="col-lg-7 ItemTextDiv">
                                    <div className="ItemHeadingDiv">
                                        <p>{item.details}</p>
                                        <h5>{item.price}</h5>
                                    </div>

                                    <div className="ItemSpanDiv">
                                        <span>{item.location}</span>
                                    </div>
                                </div>

                                <div className="col-lg-1 ItemIcondiv">
                                    <img src="Images/HeartIcon.svg" width={"45%"}></img>
                                </div>
                            </div>
                            )
                        })}

                        
                    </div>

                </div>
            </div>

            </div>
        </div>
        
    );
}

export default CategoryPage;