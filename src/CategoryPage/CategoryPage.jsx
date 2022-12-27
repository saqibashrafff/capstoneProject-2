
import "./category.css";
import BodyArray from "../Body/BodyArray";
import FilterSection from "./FilterSection";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

function CategoryPage(){

    const location = useLocation();
    const [CategoryData, setCategoryData] = useState([]);
    const [View, setView] = useState(false);
    const [SortCheck, setSortCheck] = useState("null");

    const [LowestArray, setLowestArray] = useState("");
    const [HighestArray, setHighestArray] = useState("");

    const [PriceArray, setPriceArray] = useState([]);
    const [PriceCheck, setPriceCheck] = useState(false);

    const [isLoading, setLoading] = useState(true);

    const [OnePrice, setOnePrice] = useState("");
    const [TwoPrice, setTwoPrice] = useState("");
    const [AllCategory, setAllCategory] = useState([]);

    const { category } = useParams();

    // `https://fakestoreapi.com/products/category/${category}`

    console.log(category);

    useEffect(() => {
        
        axios.get("https://fakestoreapi.com/products/category/" + category)
        .then((res) => {
            setCategoryData(res.data);
            setLoading(false);
        })
        .catch((error) => {
          console.log(error.message);
        })
      },[category,OnePrice,TwoPrice]);

      function DesktopView(){
        setView(true);
      }

      function ListView(){
        setView(false);
      }

      function ScreenView(){
        setView(null);
      }

      function SortLowest(event){

        console.log(PriceArray);

        for (var j=0; j<CategoryData.length; j++){
            for (var i=0; i<CategoryData.length - 1; i++){
                if (CategoryData[i].price > CategoryData[i+1].price){
                    var temp = CategoryData[i];
                    CategoryData[i] = CategoryData[i+1];
                    CategoryData[i+1] = temp;
                }
            }
        }

        setLowestArray(CategoryData);
        setSortCheck("Low");
        event.preventDefault();


      }

      function SortHighest(event){

        for (var j=0; j<CategoryData.length; j++){
            for (var i=0; i<CategoryData.length - 1; i++){
                if (CategoryData[i].price < CategoryData[i+1].price){
                    var temp = CategoryData[i];
                    CategoryData[i] = CategoryData[i+1];
                    CategoryData[i+1] = temp;
                }
            }
        }

        setHighestArray(CategoryData);
        setSortCheck("High");
        event.preventDefault();

      }

    //   function FromPrice(event){
    //     setPriceOne(event.target.value);
    //     console.log(event.target.value);

    //     event.preventDefault();
    //   }

    //   function ToPrice(event){

    //     setPriceTwo(event.target.value);
    //     console.log(event.target.value);

    //     if(PriceOne != "" && PriceTwo != ""){
    //         for (var i = 0; i<CategoryData.length; i++){
    //             if(CategoryData[i].price >= PriceOne && CategoryData[i].price <= PriceTwo){
    //                 PriceArray[i] = CategoryData[i];
    //             }
    //         }
    //     }

        

    //     event.preventDefault();

    //   }

      function PriceHandleChange(PriceOne, PriceTwo){

        var j = 0;

        setOnePrice(PriceOne);
        setTwoPrice(PriceTwo);
        

            for (var i = 0; i<CategoryData.length; i++){
                if(CategoryData[i].price >= PriceOne && CategoryData[i].price <= PriceTwo){
                    PriceArray[j] = CategoryData[i];
                    j++;
                }
            }   
            console.log(PriceArray);
            setPriceCheck(true);
            
      }

    //   function ScreenSize(){
    //     var width = window.outerWidth;
    //     var height = window.outerHeight;
    //     var i = 0;
    //     const FilterDiv = document.getElementById("CategoryfilterDivID");

    //     // if(width > 992 && width < 768){
    //     //     i = 0;
    //     // }
    //     // else if (width <= 992 && width >= 768){
    //     //     i = 1;
    //     // }

    //     console.log(width);


    //     if (width >= 992 && width <= 993){

    //         document.getElementById("CategoryButton").remove();

    //         FilterDiv.classList.add("dropdown");

    //         const button = document.createElement("button");
    //         button.innerHTML = "Category Filters";
    //         FilterDiv.appendChild(button);

    //         button.classList.add("dropdown-toggle");

    //         const idAttr = document.createAttribute("id");
    //         idAttr.value = "CategoryButton";
    //         button.setAttribute(idAttr);

    //         const toggle = document.createAttribute("data-toggle");
    //         toggle.value = "dropdown";
    //         button.setAttribute(toggle);

    //         document.getElementById("FilterItemsdivID").classList.add("dropdown-menu");
    //     }
    //     else if (width > 992 || width < 768){
    //         document.getElementById("CategoryButton").remove();
    //         document.getElementById("FilterItemsdivID").classList.remove("dropdown-menu");
    //         FilterDiv.classList.remove("dropdown");
    //     }

    //   }

    //   window.addEventListener("resize", ScreenSize);

    //   function Unsorted(event){

    //     axios.get("https://fakestoreapi.com/products/category/" + location.state.title)
    //     .then((res) => {
    //         setCategoryData(res.data);
    //     })

    //     console.log(CategoryData);
    //     setSortCheck("null");
    //     event.preventDefault();
    //   }

return (


    <>  {isLoading == true ? 
            
        <RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
  
/>
            :


 
        <div className="CategorySection" id="MainCategorySection" >
            <div className="row CategoryRowDiv">

            <div className="col-lg-12 col-md-12 CategoryNavCol ">
                <a href="">Home</a>
                <span> / </span>
                <a href="">Mobiles</a>
            </div>

            {/* Category Heading */}

            <div className="col-lg-12 col-md-12 CategoryHeadCol">
                <h4>Mobile Phones</h4>
            </div>

            {/* Filters Section */}

            <div className="col-lg-3 col-md-3 pb-2 ps-4 CategoryFilterCol">
                <h6>Filter</h6>
            </div>

            <div className="col-lg-9 col-md-9 CategoryViewDiv">
                <div className="row CategoryViewRow">
                    <div className="col-lg-6 col-md-3 CategoryViewAdsCol">
                        <span>10,000+ ads</span>
                    </div>

                    <div className="col-lg-2 col-md-3 text-end CategoryViewCheckCol">
                        <input type={"checkbox"} id="PhotoView" name="PhoteView"></input>
                        <label htmlFor="PhotoView" >Only with photos</label>
                    </div>

                    <div className="col-lg-2 col-md-3 p-0 ps-2 border-start border-end CategoryViewIconsCol">
                        <span>VIEW</span>
                        <img onClick={ListView} src="Images/ViewTags.svg"></img>
                        <img onClick={DesktopView} src="Images/ViewMenu.svg" ></img>
                        <img onClick={ScreenView} src="Images/ViewDesktop.svg" ></img>
                    </div>

                    <div className="col-lg-2 col-md-3 ps-1 dropdown">

                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            SORT BY: <span>Newly listed</span>
                        </a>
                        <ul className="dropdown-menu w-100 ps-3 ">
                            <li><a className="dropdown-item mb-3" href="">Newly listed</a></li>
                            <li><a className="dropdown-item mb-3" href="#">Most relevant</a></li>
                            <li><a className="dropdown-item mb-3" onClick={SortLowest} href="">Lowest price</a></li>
                            <li><a className="dropdown-item mb-3" onClick={SortHighest} href="">Highest price</a></li>
                        </ul>

                    </div>
                    
                </div>
            </div>

            {/* Category Proper Section */}

            <div className="col-lg-12 col-md-12 pt-1 CategorySectionDiv">
                <div className="row ">

                    <div className="col-lg-3 col-md-4 CategoryfilterDiv" id="CategoryfilterDivID">
                        <FilterSection HandleOnChange={PriceHandleChange} />
                    </div>

                    <div className="col-lg-9 col-md-8 CategoryItemDiv pt-1 mt-1">
                    <div className="row" >

                        { (PriceCheck ? PriceArray : (SortCheck == "null" ? CategoryData : (SortCheck == "Low" ? LowestArray: HighestArray))) .map((item) => {

                             if(View == true){
                                return (

                                <div className="col-lg-4 col-md-4 p-1  CategoryDesktopDiv " >
                                    <NavLink style={{textDecoration:"none"}} to={"/AdPage"} state={{id: item.id}}><div className="card-group CategoryDesktopCardDiv">
                                        <div className="card DesktopCardImageDiv">
                                            <img src={item.image} className="card-img-top" ></img>
                                            <div className="card-body">
                                                <h5 className="card-title">{item.price}$</h5>
                                                <p className="card-text">{item.title.slice(0,30)}</p>
                                                <p className="card-text"><small class="text-muted">{item.category}</small></p>
                                            </div>
                                        </div>
                                    </div></NavLink>
                                </div>
                                );
                            
                            }
                            else if(View == false){
                                
                                return (
                                <>
                                <div className="col-lg-12 col-md-12 ">
                                <NavLink style={{textDecoration:"none"}} to={"/AdPage"} state={{id: item.id}}><div className="row CategoryItemRow ">
                                <div className="col-lg-4 col-md-4 bg-warning ps-0 pe-1 ItemImageDiv">
                                <img className="ViewIMageDiv bg-dark" src={item.image}></img>
                                </div>

                                <div className="col-lg-7 col-md-7 ItemTextDiv">
                                    <div className="ItemHeadingDiv">
                                        <p style={{color:""}}>{item.title.slice(0,60)}</p>
                                        <h5>{item.price}$</h5>
                                    </div>

                                    <div className="ItemSpanDiv">
                                        <span>{item.category}</span>
                                    </div>
                                </div>

                                <div className="col-lg-1 col-md-1 ItemIcondiv">
                                    <img src="Images/HeartIcon.svg" width={"45%"}></img>
                                </div>
                                </div></NavLink> 
                                </div>
                                </>
                                );
                            }

                            else if (View == null){
                                return (
                                    <>
                                    <div className="col-lg-12 col-md-12 mb-2">
                                    <NavLink style={{textDecoration:"none"}} to={"/AdPage"} state={{id: item.id}}><div className="row ScreenViewTextDiv">
                                        <div className="col-lg-12 col-md-12 ScreenViewDiv p-0">
                                        <img className="bg-dark" src={item.image} ></img>
                                    </div>
                                    <div className="col-lg-11 col-md-11 ps-1 p-0 bg-warning ItemTextDiv">
                                        <div className="bg-light pt-2 pb-2 ps-2">
                                        <div className="ItemHeadingDiv bg-light pb-1">
                                            <p>{item.title.slice(0,60)}</p>
                                            <h5>{item.price}$</h5>
                                        </div>
    
                                        <div className="ItemSpanDiv">
                                            <span>{item.category}</span>
                                        </div>
                                        </div>
                                    </div>
    
                                    <div className="col-lg-1 col-md-1 ItemIcondiv">
                                            <img src="Images/HeartIcon.svg" width={"45%"}></img>
                                    </div>
                                        </div></NavLink>

                                    </div>
                                    
                                    </>
                                );
                        }     
                        })}

</div> 
                    </div>

                </div>
            </div>

            </div>
        </div>
}</>
)
}

export default CategoryPage;

{/* <div className="col-lg-3 CardColDiv" key={item.id}>
                <div className="card-group h-25">
            <div className="card">
            <NavLink to='/AdPage' state={{id:item.id}} ><img src={item.image} className="card-img-top " alt="..."/></NavLink>
                <div className="card-body">
                <h5 className="card-title">Rs {item.price}</h5>
                <p className="card-text">{item.title.slice(0,34)}</p>
                <p className="card-text"><small class="text-muted">{item.category}</small></p>
            </div>
            </div>
            </div>
            </div> */}