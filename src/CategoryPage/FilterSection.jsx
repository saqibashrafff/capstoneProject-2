
import "./filter.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import LocationsArray from "../LocationsArray";

function FilterSection(props){

    const [FilterCategory, setFilterCategory] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/categories")
        .then((res) => {
            setFilterCategory(res.data);
            console.log(res.data);
        })
        .catch((error) => {
          console.log(error.message);
        })
      },[]);

    const [PriceOne, setPriceOne] = useState();
    const [PriceTwo, setPriceTwo] = useState();

    function FromPrice(event){
        
        setPriceOne(event.target.value);

      }

      function ToPrice(event){

        setPriceTwo(event.target.value);

        if(PriceOne == "" || event.target.value == ""){
            console.log("Both inputs are empty");
        }else {
            props.HandleOnChange(PriceOne, event.target.value);
        }
    }

    function LocationOnClick(location){
        const LocationInputText = document.getElementById("LocationInputTextFilter");

        LocationInputText.value = location;
        LocationInputText.style.border = "1px solid aqua";
    }

    // function AllCategories(){
    //     axios.get("https://fakestoreapi.com/products")
    //     .then((res) => {
    //         setAllCategory(res.data);
    //         console.log(res.data);
    //     })
    //     .catch((error) => {
    //       console.log(error.message);
    //     })
    // }
        

    return (<>
        <div className="FilterItemsdiv" id="FilterItemsdivID">
            <p className="FilterItemDivHeading" >CATEGORIES</p>
            <ul className="ps-0">
                <li>
                    <NavLink  to={"/CategoryPage/" + "products"}  className="nav-link">All categories</NavLink>
                </li>

                <li className="ps-3">
                    <a href="">Mobiles</a>
                </li>
            </ul>
        </div>

        <div className="FilterItemsdiv pb-1">
            <ul>
                {/* <li className="list1">
                <NavLink to="/OnlyCategoryPage" state={{title:"jewelery"}}>Mobile Phones</NavLink>
                </li>

                <li>
                    <a href="">Accessories <span>(32544)</span></a>
                </li>

                <li>
                    <a href="">Smart Watches <span>(8615)</span></a>
                </li>

                <li>
                    <a href="">Tablets <span>(6001)</span></a>
                </li> */}

                {FilterCategory.map((item) => {
            return (
                <li className="">
                    <NavLink  to={"/CategoryPage/" + item}  className="nav-link">{item}</NavLink>
                </li>
            );
        })}
            </ul>
        </div><hr></hr>

        {/* Filter Location */}

        <div className="FilterLocationDiv dropdown">
            <h6>LOCATIONS</h6>
            <input className="LocationInput" data-bs-toggle="dropdown" aria-expanded="false" type={"text"}
            id="LocationInputTextFilter" placeholder={"Pakistan"} style={{outline:"none"}}></input>

                        <div className="dropdown-menu dropdown-menu pt-4 pb-2 pe-3">
                            {LocationsArray.map((location) => {
                                return (
                                    <ul style={{listStyle: "none", fontWeight: "400"}}>
                                        <li onClick={() => {
                                            LocationOnClick(location.location)
                                        }}>{location.location}</li>
                                    </ul>
                                )
                            })}
                        </div>
        </div>

        {/* Location Region */}

        <div className="FilterRegionDiv">
            <h6 className="mb-3">
            <a className="regionHeading" style={{color:"#002f34"}} href="">Pakistan</a></h6>
            <ul className="ps-3">
                <li>
                    <a href="">Punjab <span>(94826)</span></a>
                </li>

                <li>
                    <a href="">Sindh <span>(36007)</span></a>
                </li>

                <li>
                    <a href="">Khyber Pakhtunkhwa <span>(11312)</span></a>
                </li>

                <li>
                    <a href="">Islamabad Capital Territory <span>(8509)</span></a>
                </li>

                <li>
                    <a href="">Balochistan <span>(1406)</span></a>
                </li>

                <li>
                    <a className="text-primary" href="">View more</a>
                </li>
            </ul>
        </div>
        {/* onChange={() => {
                props.FromPriceChange();
            }} */}
        {/* Filter Price  */}

        <div className="FilterPriceDiv pb-2 pt-3">
            <h6 className="PriceHeading">PRICE</h6>
            <input className="PriceInput" onChange={FromPrice} type={"number"} placeholder="0"></input>
            <input className="PriceInput" onChange={ToPrice} type={"number"} placeholder="1000000"></input>
            <input className="RangeInput" type={"range"} min="0" max="1000000"></input>
        </div>

        {/* Brands */}

        <div className="FilterBrandDiv pt-3 pb-1">
            <h6 className="BrandHeading">BRAND</h6>
            <ul className="ps-0">
                <li>
                    <a href="">Apple iPhone <span>(56833)</span></a>
                </li>

                <li>
                    <a href="">Samsung Mobile <span>(21909)</span></a>
                </li>

                <li>
                    <a href="">Vivo <span>(13413)</span></a>
                </li>

                <li>
                    <a href="">OPPO <span>(10911)</span></a>
                </li>

                <li>
                    <a href="">Infinix <span>(7366)</span></a>
                </li>

                <li >
                    <a className="text-primary" href="">View more</a>
                </li>
            </ul>
        </div>

        <div className="FilterConditionDiv py-3">
            <h6>CONDITION</h6>
            <a href="" >
                <input className="CheckBoxInput" type={"checkbox"} id="Mobile1" name="Mobile1" value={"Used"}></input>
                <label for="Mobile1"> Used (113243)</label>
            </a>

            <a href="">
                <input className="CheckBoxInput" type={"checkbox"} id="Mobile2" name="Mobile2" value={"Used"}></input>
                <label for="Mobile2"> New (30343)</label>
            </a>

            <a href="">
                <input className="CheckBoxInput" type={"checkbox"} id="Mobile3" name="Mobile3" value={"Used"}></input>
                <label for="Mobile3"> Open Box (8339)</label>
            </a>

            <a href="">
                <input className="CheckBoxInput" type={"checkbox"} id="Mobile4" name="Mobile4" value={"Used"}></input>
                <label for="Mobile4"> For Parts or Not Working (1339)</label>
            </a>

            <a href="">
                <input className="CheckBoxInput" type={"checkbox"} id="Mobile5" name="Mobile5" value={"Used"}></input>
                <label for="Mobile5"> Refurbished (333)</label>
            </a>
        </div>
        </>
    );
}

export default FilterSection;





















