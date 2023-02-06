
import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./sell.css";

import UserImage from "../Ad Page/AdPage Images/User.png"

function Sell(){

    const [isTitle, setisTitle] = useState("");
    const [TitleBool, setTitleBool] = useState(false);
    
    const [Descryption, setDescryption] = useState("");
    const [DescBool, setDescBool] = useState(false);

    const [Price, setPrice] = useState("");
    const [PriceCheck, setPriceCheck] = useState(false);

    const [Images, setImages] = useState({
        image1: "",
        image2: "",
        image3: "",
        image4: "",
        image5: ""
    });

    const LocationsArray = [
        {
            location: "Azad Kashmir, Pakistan"
        },

        {
            location: "Sindh, Pakistan"
        },

        {
            location: "Punjab, Pakistan"
        },

        {
            location: "Khyber Pakhtunkhwa, Pakistan"
        },

        {
            location: "Balochistan, Pakistan"
        },

        {
            location: "Islamabad Capital Territory, Pakistan"
        }
    ];

    const [isName, setisName] = useState("");

    function PostData(event){

        if(isTitle == "" || isTitle.length < 5  || Descryption == "" || Descryption.length < 20 || isCategory == "" ||
        Images.image1 == "" || Price == "" || Price < 500 || Price > 500000 ){
            alert("Updated your data under recommended conditions!");
        }
        else {
            axios.post("https://fakestoreapi.com/products", {
            title : isTitle,
            description : Descryption,
            category : isCategory,
            image : Images.image1,
            price : Price
        })
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })

        // setDescryption("");
        // setPrice("");
        // setisTitle("");
        // Images.image1 = "";
        // setisCategory("");

        }
        
        

        event.preventDefault();
    }

    

    // function TitleFocus(){

    //     var title = document.getElementById("title");
        
    // }

    // function TitleHandleChange(event){
    //     setTitle(event.target.value);

    //     var title = document.getElementById("title");

    //     if (Title == "" || Title.length < 6){
    //         title.style.border = "3px solid red"
    //     }
    //     else {
    //         title.style.border = "1px solid aqua";
    //     }
    // }

    // function TitleFocusOut(event){

    //     var title = document.getElementById("title");

       
    //     if (Title == "" || Title.length < 6){
    //         title.style.border = "3px solid red";
    //         setBool(false)
    // }
    //     else {
    //         title.style.border = "1px solid aqua";
    //         setBool(true);
    //     }
        
    // }

    // Description Functions

    function DescFocus(){
        document.getElementById("DescLabel").classList.add("onFocusDesc");
        document.getElementById("DescTitle").classList.add("onFocusTextDesc");
    }

    function DescFocusOut(){

        var Desc = document.getElementById("DescLabel");

        var DescText = document.getElementById("DescSpanText");

        if (Descryption == "" || Descryption.length < 5){
            Desc.classList.add("DescFocusOut");
            DescText.innerHTML = "Description should contain at least 10 alphanumeric characters. Please edit the field";
            DescText.classList.add("DescTextFocusOut");
            document.getElementById("DescTitle").style.color = "red";
            document.getElementById("DescTitle").classList.remove("onFocusTextDesc");
            setDescBool(true);
        }
        else {
            Desc.classList.remove("DescFocusOut");
            Desc.classList.add("onFocusDesc");
        }
        
    }

    function DescHandleChange(event){
        
        var Desc = document.getElementById("DescLabel");
        var DescText = document.getElementById("DescSpanText");

        setDescryption(event.target.value);

        if(event.target.value.length == "" || event.target.value.length < 5){
            if(DescBool){
                Desc.classList.add("DescFocusOut");
                DescText.innerHTML = "A minimum length of 20 characters is allowed. Please edit the field.";
                DescText.classList.add("DescTextChange");
                document.getElementById("DescTitle").classList.remove("onFocusTextDesc");
                document.getElementById("DescTitle").style.color = "red";

            }
        }else {
            Desc.classList.remove("DescFocusOut");
            Desc.classList.add("onFocusDesc");

            DescText.innerHTML = "Include condition, features and reason for selling";
            DescText.classList.remove("DescTextFocusOut");
            DescText.classList.remove("DescTextChange");
            document.getElementById("DescTitle").style.color = "aqua";
            }
            
        }

        // Condition Button Functions

        function OnClickCondition(id){

            for (var i = 1; i<=5; i++){
                if (id == i){
                    document.getElementById("ConditionButton" + id).classList.add("ConditionButtonClick");
                }
                else {
                    document.getElementById("ConditionButton" + i).classList.remove("ConditionButtonClick");
                }
            }

        }

        // Price Functions

        function PriceOnFocus(){
            const priceInput = document.getElementById("Price");
            const PriceLabel = document.getElementById("PriceTitle");

            priceInput.classList.add("PriceFocusOn");
            PriceLabel.classList.add("PriceColorFocus");
        }

        function PriceFocusOut(){
            const priceInput = document.getElementById("Price");
            const PriceLabel = document.getElementById("PriceTitle");
            const priceSpan = document.getElementById("PriceSpan");

            if(Price == "" || Price < 500 || Price > 500000){
                if (Price == ""){
                    priceSpan.innerHTML = "This field is required";
                }
                else if (Price < 500){
                    priceSpan.innerHTML = "The minimum allowed value is PKR 500";
                }
                else if (Price > 500000){
                    priceSpan.innerHTML = "The maximum allowed value is PKR 5 Lac";
                }
                priceInput.style.border = "3px solid red";
                PriceLabel.style.color = "red";
                PriceLabel.classList.remove("PriceColorFocus");
                setPriceCheck(true);
            }
            else {
                priceSpan.innerHTML = "PKR " + Price;

                PriceLabel.style.color = "aqua";
                priceInput.style.border = "1px solid aqua";
            }

        }

        function PriceOnChange(event){

            const priceInput = document.getElementById("Price");
            const PriceLabel = document.getElementById("PriceTitle");
            const priceSpan = document.getElementById("PriceSpan");

            setPrice(event.target.value);

            if(event.target.value == "" || event.target.value < 500 || event.target.value > 500000){
                if(PriceCheck){
                    priceInput.style.border = "3px solid red";
                    PriceLabel.style.color = "red";

                    if (event.target.value == ""){
                        priceSpan.innerHTML = "This field is required";
                    }
                    else if (event.target.value < 500){
                        priceSpan.innerHTML = "The minimum allowed value is PKR 500";
                    }
                    else if (event.target.value > 500000){
                        priceSpan.innerHTML = "The maximum allowed value is PKR 5 Lac";
                    }

                }else {
                    if(event.target.value >= 0 && event.target.value < 500){
                        priceSpan.innerHTML = "PKR " + event.target.value;
                    }
                    else if (event.target.value >= 500000 && event.target.value < 1000000){
                        priceSpan.innerHTML = "PKR " + event.target.value + " Lac";
                    }
                    else if (event.target.value >= 1000000 && event.target.value < 10000000){
                        priceSpan.innerHTML = "PKR " + event.target.value + " Lacs"
                    }
                    else{
                        priceSpan.innerHTML = "PKR " + event.target.value + " Crore"
                    }
                }
            }
            else {
                priceInput.style.border = "1px solid aqua";
                PriceLabel.style.color = "aqua";

                if (event.target.value < 10000){
                    priceSpan.innerHTML = "PKR " + event.target.value;
                }
                else if (event.target.value >= 10000 && event.target.value < 100000){
                    priceSpan.innerHTML = "PKR " + event.target.value + " Thousand";
                }
                else if(event.target.value >= 100000 && event.target.value < 500000){
                    priceSpan.innerHTML = "PKR " + event.target.value + " Lac";
                }
            }

        }

        function ImageOnChange(id,event){

            if (id == 1){
                Images.image1 = event.target.value;
                console.log(id + " " + Images.image1);
            }
            else if (id == 2){
                Images.image2 = event.target.value;
                console.log(id + " " + Images.image2);
            }
            else if (id == 3){
                Images.image3 = event.target.value;
                console.log(id + " " + Images.image3);
            }
            else if (id == 4){
                Images.image4 = event.target.value;
                console.log(id + " " + Images.image4);
            }
            else if (id == 5){
                Images.image5 = event.target.value;
                console.log(id + " " + Images.image5);
            }

            // if (Images.image1 == "" && Images.image2 == "" && Images.image3 == "" && Images.image4 == "" && Images.image5 == ""){
            //     document.getElementsByClassName("PictureRowCol").style.border = "3px solid red";
            // }

                event.preventDefault();
            
        }

        // Name Functions

        const [NameBool, setNameBool] = useState(false);
        const [ContactBool, setContactBool] = useState(false);
        const [isContact, setisContact] = useState("");

        function NameOnFocus(){
            const NameInput = document.getElementById("Name");
            const NameLabel = document.getElementById("LabelName");

            NameInput.classList.add("PriceFocusOn");
            NameLabel.classList.add("PriceColorFocus");
        }

        function NameOnChange(event){

            const NameInput = document.getElementById("Name");
            const NameLabel = document.getElementById("LabelName");
            const NameSpan = document.getElementById("NameSpan");

            setisName(event.target.value);

            if(event.target.value == "" || event.target.value.length < 3){
                if(NameBool){
                    if(event.target.value == ""){
                        NameSpan.innerHTML = "This field is required";
                        NameSpan.style.color = "red";
                    }
                    else if(event.target.value.length < 3){
                        NameSpan.innerHTML = "A minimum length of 3 characters is allowed. Please edit the field.";
                        NameSpan.style.color = "red";
                    }

                    NameInput.style.border = "3px solid red";
                    NameLabel.style.color = "red";
                }
            }
            else {
                NameInput.style.border = "1px solid aqua";
                NameLabel.style.color = "aqua";
                NameSpan.innerHTML = "";
            }
        }

        function NameFocusOut(){

            const NameInput = document.getElementById("Name");
            const NameLabel = document.getElementById("LabelName");
            const NameSpan = document.getElementById("NameSpan");

            if (isName == "" || isName.length < 3){

                if(isName == ""){
                    NameSpan.innerHTML = "This field is required";
                    NameSpan.style.color = "red";
                }
                else if(isName.length < 3){
                    NameSpan.innerHTML = "A maximum length of 11 numbers is allowed. Please edit the field.";
                    NameSpan.style.color = "red";
                }

                NameInput.style.border = "3px solid red";
                NameLabel.style.color = "red";
                setNameBool(true);
            }
            else {
                NameInput.style.border = "1px solid aqua";
                NameLabel.style.color = "aqua";
            }

        }

        // Contact Functions same as Name

        function ContactOnFocus(){
            const ContactInput = document.getElementById("Contact");
            const ContactLabel = document.getElementById("ContactLabel");

            ContactInput.classList.add("PriceFocusOn");
            ContactLabel.classList.add("PriceColorFocus");
        }

        function ContactFocusOut(){

            const ContactInput = document.getElementById("Contact");
            const ContactLabel = document.getElementById("ContactLabel");
            const ContactSpan = document.getElementById("ContactSpan");

            if (isContact == "" || isContact.length < 11 || isContact.length > 11){
                if(isContact == ""){
                    ContactSpan.innerHTML = "This field is required";
                    ContactSpan.style.color = "red";
                }
                else if(isContact.length < 11 || isContact.length > 11){
                    ContactSpan.innerHTML = "A maximum length of 11 numbers is allowed. Please edit the field.";
                    ContactSpan.style.color = "red";
                }
                ContactInput.style.border = "3px solid red";
                ContactLabel.style.color = "red";
                
                setContactBool(true);
            }
            else {
                ContactInput.style.border = "1px solid aqua";
                ContactLabel.style.color = "aqua";
            }

        }

        function ContactOnChange(event){

            const ContactInput = document.getElementById("Contact");
            const ContactLabel = document.getElementById("ContactLabel");
            const ContactSpan = document.getElementById("ContactSpan");

            setisContact(event.target.value);

            if(event.target.value == "" || event.target.value.length < 11 || event.target.value.length > 11 ){
                if(ContactBool){
                    if(event.target.value == ""){
                        ContactSpan.innerHTML = "This field is required";
                        ContactSpan.style.color = "red";
                    }
                    else{
                        ContactSpan.innerHTML = "A maximum length of 11 numbers is allowed. Please edit the field.";
                        ContactSpan.style.color = "red";
                    }
                    ContactInput.style.border = "3px solid red";
                    ContactLabel.style.color = "red";
                    
                }
            }
            else {
                ContactInput.style.border = "1px solid aqua";
                ContactLabel.style.color = "aqua";
                ContactSpan.innerHTML = "";
                event.target.value.slice(0,11);
            }
        }

        const [BrandData, setBrandData] = useState([]);
        const [isCategory, setisCategory] = useState("");

        function CategoryOnFocus(){

            axios.get("https://fakestoreapi.com/products/categories")
            .then((res) => {
                    setBrandData(res.data);
            })

        }

        function CategoryOnClick(category){
            let BrandInputValue = document.getElementById("BrandInputText");
            setisCategory(category);
            BrandInputValue.innerHTML = category;
        }

        // Location Functions

        function LocationOnClick(location){
            const LocationInputText = document.getElementById("LocationInputText");

            LocationInputText.innerHTML = location;
        }

        // Title Functions

        function TitleOnFocus(){

            const TitleLabel = document.getElementById("TitleLabel");
            const TitleInput = document.getElementById("title");

            TitleInput.classList.add("onFocusDesc");
            TitleLabel.classList.add("onFocusTextDesc");
        }

        function TitleFocusOut(){
            const TitleInput = document.getElementById("title");
            const TitleLabel = document.getElementById("TitleLabel");
            const TitleSpan = document.getElementById("SpanTitle");

            if (isTitle == "" || isTitle.length < 5){

                if(isTitle == ""){
                    TitleSpan.innerHTML = "Title should contain at least 5 alphanumeric characters. Please edit the field";
                    TitleSpan.style.color = "red";
                }
                else if(isTitle.length < 5){
                    TitleSpan.innerHTML = "A minimum length of 5 characters is allowed. Please edit the field.";
                    TitleSpan.style.color = "red";
                }

                TitleInput.style.border = "3px solid red";
                TitleLabel.style.color = "red";
                setTitleBool(true);
            }
            else {
                TitleInput.style.border = "1px solid aqua";
                TitleLabel.style.color = "aqua";
            }
        }

        function TitleHandleChange(event){

            const TitleInput = document.getElementById("title");
            const TitleLabel = document.getElementById("TitleLabel");
            const TitleSpan = document.getElementById("SpanTitle");

            setisTitle(event.target.value);

            if(event.target.value == "" || event.target.value.length < 5){
                if(TitleBool){
                    if(event.target.value == ""){
                        TitleSpan.innerHTML = "Title should contain at least 5 alphanumeric characters. Please edit the field";
                        TitleSpan.style.color = "red";
                    }
                    else if(event.target.value.length < 5){
                        TitleSpan.innerHTML = "A minimum length of 5 characters is allowed. Please edit the field.";
                        TitleSpan.style.color = "red";
                    }

                    TitleInput.style.border = "3px solid red";
                    TitleLabel.style.color = "red";
                    
                }
            }
            else {
                TitleInput.style.border = "1px solid aqua";
                TitleLabel.style.color = "aqua";
                TitleSpan.innerHTML = "Mention the key features of your item (e.g. brand, model, age, type)";
                TitleSpan.style.color = "#212529"
            }
        }

    return (
        <div className="AddBodyDiv px-5 pt-4 pb-1 ">
            <h5 className="mb-4" style={{textAlign: "center"}}>POST YOUR ADD</h5>
            
            <div className="PostSection ">

                <div className="PostCategoryDiv">
                    <h5>SELECTED CATEGORY</h5>
                    <a href="">Change</a>
                </div><hr></hr>

                <div className="PostFormDiv">

                <div className="PostDetailsDiv">
                    <h5>INCLUDE SOME DETAILS</h5>
                </div>

                <form method="Post" onSubmit={PostData}>
                    <div className="PostTitleDiv">
                    <label className="Label" id="TitleLabel" for="title">Ad title</label><br></br>
                    <input className="titleInput MobileView" onFocus={TitleOnFocus} onBlur={TitleFocusOut} onChange={TitleHandleChange} 
                       type={"text"} id="title" name="title" ></input>
                    <span className="SpanTitle" id="SpanTitle">Mention the key features of your item (e.g. brand, model, age, type)</span>
                    </div>

                    <div className="PostDescDiv">
                        <label className="Label" id="DescTitle" for="DescLabel" >Description</label><br></br>
                        <textarea className="DescInput" onFocus={DescFocus} onBlur={DescFocusOut} onChange={DescHandleChange} id="DescLabel" name="DescLabel"  rows="6" ></textarea>
                        <span className="DesctextSpan " id="DescSpanText">Include condition, features and reason for selling</span>

                    </div>

                    <div className="PostBrandDiv dropdown">
                        <label for="Brand" className="Label" id="BrandLabel" >Category</label>
                        <div className="LocationInputDiv" data-bs-toggle="dropdown" aria-expanded="false"
                         onClick={CategoryOnFocus}  id="Brand">
                            <p className="m-0 p-0" style={{fontWeight: 400}} id="BrandInputText"></p>
                        </div>

{/* <div className="LocationInputDiv" href="" data-bs-toggle="dropdown" aria-expanded="false">
                            <p className="m-0 p-0" style={{fontWeight: 400}} id="LocationInputText"></p>
                        </div> */}

                        <div className="dropdown-menu dropdown-menu pt-4 pb-2 w-100">
                            {BrandData.map((category) => {
                                return (
                                    <ul style={{listStyle: "none", fontWeight: "400"}}>
                                        <li onClick={() => {
                                            CategoryOnClick(category)
                                        }}>{category}</li>
                                    </ul>
                                )
                            })}
                        </div>
                    </div>

                    <div className="PostConditionDiv">
                        <div>
                            <span className="Label">Condition</span>
                        </div>

                        <div className="ConditionButtondiv">
                        
                        <div className="ConditionButton" id="ConditionButton1" onClick={() => {
                            OnClickCondition(1);
                        }}>
                            <span className="ConditionSpan">New</span>
                        </div>

                        <div className="ConditionButton" id="ConditionButton2" onClick={() => {
                            OnClickCondition(2);
                        }}>
                            <span className="ConditionSpan">Open Box</span>
                        </div>

                        <div className="ConditionButton" id="ConditionButton3" onClick={() => {
                            OnClickCondition(3);
                        }}>
                            <span className="ConditionSpan">Used</span>
                        </div>

                        <div className="ConditionButton" id="ConditionButton4" onClick={() => {
                            OnClickCondition(4);
                        }}>
                            <span className="ConditionSpan">Refurbished</span>
                        </div>

                        <div className="ConditionButton" id="ConditionButton5" onClick={() => {
                            OnClickCondition(5);
                        }}>
                            <span className="ConditionSpan">For Parts or Not Working</span>
                        </div>
                        </div>

                    </div>
                    <hr></hr>

                    <div className="PostPricediv">
                        <div className="PriceDetaildiv">
                            <h5>SET A PRICE</h5>
                        </div>

                        <div>
                            <label className="Label" for="Price" id="PriceTitle">Price</label><br></br>
                            <input className="PriceInput MobileView" type={"number"} name="Price" id="Price" placeholder="Rs"
                            onFocus={PriceOnFocus}
                            onBlur={PriceFocusOut}
                            onChange={PriceOnChange}
                            ></input>
                            <span id="PriceSpan" ></span>
                        </div>
                    </div>
                    
                    <hr/>

                    <div className="PostPictureDiv ">
                        <div className="PictureDeatilDiv">
                            <h5 >UPLOAD UPTO 5 PHOTOS</h5>
                        </div>

                        <div className="row PictureRowDiv">
                            <div className="col-lg-2 col-md-2 col-sm-2 PictureRowCol">

                                <div className="Icondiv">
                                    <img className="Image" src="Images/upload.svg" />
                                </div>

                                <div className="ImageInputDiv">
                                    <input className="ImageInput" onChange={(e) => {
                                        ImageOnChange(1, e);
                                    }} type={"file"} />
                                </div>

                            </div>

                            <div className="col-lg-2 col-md-2 col-sm-2 PictureRowCol">

                                <div className="Icondiv">
                                    <img className="Image" src="Images/upload.svg" />
                                </div>

                                <div className="ImageInputDiv">
                                    <input className="ImageInput" type={"file"} onChange={(e) => {
                                        ImageOnChange(2, e);
                                    }}/>
                                </div>
                                
                            </div>

                            <div className="col-lg-2 col-md-2 col-sm-2 PictureRowCol">

                                <div className="Icondiv">
                                    <img className="Image" src="Images/upload.svg" />
                                </div>

                                <div className="ImageInputDiv">
                                    <input className="ImageInput" type={"file"} onChange={(e) => {
                                        ImageOnChange(3, e);
                                    }}/>
                                </div>
                                
                            </div>

                            <div className="col-lg-2 col-md-2 col-sm-2 PictureRowCol">

                                <div className="Icondiv">
                                    <img className="Image" src="Images/upload.svg" />
                                </div>

                                <div className="ImageInputDiv">
                                    <input className="ImageInput" type={"file"} onChange={(e) => {
                                        ImageOnChange(4, e);
                                    }}/>
                                </div>
                                
                            </div>

                            <div className="col-lg-2 col-md-2 col-sm-2 PictureRowCol">

                                <div className="Icondiv">
                                    <img className="Image" src="Images/upload.svg" />
                                </div>

                                <div className="ImageInputDiv">
                                    <input className="ImageInput" type={"file"} onChange={(e) => {
                                        ImageOnChange(5, e);
                                    }}/>
                                </div>
                                
                            </div>

                        </div>
                        <span className="PictureDivSpan">For the cover picture we recommend using the landscape mode.</span>
                    </div>
                    <hr/>

                    <div className="PostLocationDiv mb-4 dropdown">
                        <div className="LocationDetailDiv mb-4">
                            <h5>YOUR AD'S LOCATION</h5>
                        </div>

                        <label for="location" className="Label" >Location</label>
                        <div className="LocationInputDiv" href="" data-bs-toggle="dropdown" aria-expanded="false">
                            <p className="m-0 p-0" style={{fontWeight: 400}} id="LocationInputText"></p>
                        </div>

                        <div className="dropdown-menu dropdown-menu pt-4 pb-2 w-100">
                            {LocationsArray.map((location) => {
                                return (
                                    <ul style={{listStyle: "none", fontWeight: "400"}}>
                                        <li onClick={() => {
                                            LocationOnClick(location.location)
                                        }}>{location.location  }</li>
                                    </ul>
                                )
                            })}
                                
                        </div>

                        {/* <div className="PostBrandDiv dropdown">
                        <label for="Brand" className="Label" id="BrandLabel" >Category</label>
                        <input className="BrandInput dropdown-toggle" href="" data-bs-toggle="dropdown" aria-expanded="false"
                         onFocus={CategoryOnFocus} onChange={() => {
                            CategoryOnChange();
                        }} id="Brand" name="Brand"
                        ></input>

                        <div className="dropdown-menu dropdown-menu pt-4 pb-2 w-100">
                            {BrandData.map((category) => {
                                return (
                                    <ul style={{listStyle: "none", fontWeight: "400"}}>
                                        <li onClick={() => {
                                            CategoryOnClick(category)
                                        }}>{category}</li>
                                    </ul>
                                )
                            })}
                        </div>
                    </div> */}














                        {/* <div>
                            <label for="location" className="Label" >Location</label>
                            <input className="locationInput" type={"search"} name="location" id="location" placeholder="City/Region"></input>
                        </div> */}
                    </div>
                    <hr/>

                    <div className="PostPersonalDiv">
                        <div className="PersonalDetailsdiv mb-4">
                            <h5>REVIEW YOUR DETAILS</h5>
                        </div>

                        <div className="PersonalInputsection">

                        <div className="userImagediv ">
                            <img src={UserImage} width={"90%"}></img>
                        </div>

                        <div className="w-100">
                            
                            <label for="Name" className="Label" id="LabelName">Name</label><br></br>
                            <input className="NameInput MobileView" name="Name" id="Name" type={"text"}
                            onFocus={NameOnFocus} 
                            onChange={NameOnChange}
                            onBlur = {NameFocusOut} ></input>
                            <span id="NameSpan"></span>
                        </div>
                        </div>

                        <div className="PersonalContactdiv my-4">
                            <label for="Contact" className="Label " id="ContactLabel">Phone Number</label><br></br>
                            <input type={"number"} name="Contact" id="Contact" className="ContactInput MobileView" placeholder="+92"
                            onFocus={ContactOnFocus}
                            onBlur={ContactFocusOut}
                            onChange={ContactOnChange}
                            ></input>
                            <span id="ContactSpan"></span>
                        </div>

                    </div><hr/>

                    <div className="PostSubmitDiv pt-3 pb-4">
                    <button>Post now</button>
                        {/* <NavLink to={"/home"} ></NavLink> */}
                    </div>
                </form>
                </div>

            </div>
        </div>
    );
}

export default Sell;

{/* <div className="Icondiv">
                                <img className="Image" src="Images/upload.svg" />
                                </div>

                                <div className="ImageInputDiv">
                                    <input className="ImageInput" type={"file"} />
                                </div> */}
        