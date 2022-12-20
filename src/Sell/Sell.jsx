
import { NavLink } from "react-router-dom";
import "./sell.css";

function Sell(){
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

                <form>
                    <div className="PostTitleDiv">
                    <label className="Label" for="title">Ad title</label><br></br>
                    <input className="titleInput" type={"text"} id="title" name="title" ></input>
                    <span className="titleSpan1">Mention the key features of your item (e.g. brand, model, age, type)</span>
                    <span>0/70</span>
                    </div>

                    <div className="PostDescDiv">
                        <label className="Label" for="DescLabel" >Description</label><br></br>
                        <textarea className="DescInput" id="DescLabel" name="DescLabel"  rows="6" ></textarea>
                        <span className="DesctextSpan">Include condition, features and reason for selling</span>
                        <span>0/4096</span>
                    </div>

                    <div className="PostBrandDiv">
                        <label for="Brand" className="Label" >Brand</label>
                        <input className="BrandInput" type={"text"} id="Brand" name="Brand" ></input>
                    </div>

                    <div className="PostConditionDiv">
                        <div>
                            <span className="Label">Condition</span>
                        </div>

                        <div className="ConditionButtondiv">
                        
                        <div className="ConditionButton">
                            <span>New</span>
                        </div>

                        <div className="ConditionButton">
                            <span>Open Box</span>
                        </div>

                        <div className="ConditionButton">
                            <span>Used</span>
                        </div>

                        <div className="ConditionButton">
                            <span>Refurbished</span>
                        </div>

                        <div className="ConditionButton">
                            <span>For Parts or Not Working</span>
                        </div>
                        </div>

                    </div>
                    <hr></hr>

                    <div className="PostPricediv">
                        <div className="PriceDetaildiv">
                            <h5>SET A PRICE</h5>
                        </div>

                        <div>
                            <label className="Label" for="Price">Price</label><br></br>
                            <input className="PriceInput" type={"text"} name="Price" id="Price" placeholder="Rs"></input>
                        </div>
                    </div>
                    
                    <hr/>

                    <div className="PostPictureDiv ">
                        <div className="PictureDeatilDiv">
                            <h5 >UPLOAD UPTO 6 PHOTOS</h5>
                        </div>

                        <div className="row PictureRowDiv">
                            <div className="col-lg-2 PictureRowCol">

                                <div className="Icondiv">
                                    <img className="Image" src="Images/upload.svg" />
                                </div>

                                <div className="ImageInputDiv">
                                    <input className="ImageInput" type={"file"} />
                                </div>

                            </div>

                            <div className="col-lg-2 PictureRowCol">

                                <div className="Icondiv">
                                    <img className="Image" src="Images/upload.svg" />
                                </div>

                                <div className="ImageInputDiv">
                                    <input className="ImageInput" type={"file"} />
                                </div>
                                
                            </div>

                            <div className="col-lg-2 PictureRowCol">

                                <div className="Icondiv">
                                    <img className="Image" src="Images/upload.svg" />
                                </div>

                                <div className="ImageInputDiv">
                                    <input className="ImageInput" type={"file"} />
                                </div>
                                
                            </div>

                            <div className="col-lg-2 PictureRowCol">

                                <div className="Icondiv">
                                    <img className="Image" src="Images/upload.svg" />
                                </div>

                                <div className="ImageInputDiv">
                                    <input className="ImageInput" type={"file"} />
                                </div>
                                
                            </div>

                            <div className="col-lg-2 PictureRowCol">

                                <div className="Icondiv">
                                    <img className="Image" src="Images/upload.svg" />
                                </div>

                                <div className="ImageInputDiv">
                                    <input className="ImageInput" type={"file"} />
                                </div>
                                
                            </div>

                        </div>
                        <span className="PictureDivSpan">For the cover picture we recommend using the landscape mode.</span>
                    </div>
                    <hr/>

                    <div className="PostLocationDiv mb-4">
                        <div className="LocationDetailDiv mb-4">
                            <h5>YOUR AD'S LOCATION</h5>
                        </div>

                        <div>
                            <label for="location" className="Label" >Location</label>
                            <input className="locationInput" type={"texts"} name="location" id="location" placeholder="City/Region"></input>
                        </div>
                    </div>
                    <hr/>

                    <div className="PostPersonalDiv">
                        <div className="PersonalDetailsdiv mb-4">
                            <h5>REVIEW YOUR DETAILS</h5>
                        </div>

                        <div className="PersonalInputsection">

                        <div className="userImagediv">
                            <img src="Images/user.png" width={"90%"}></img>
                        </div>

                        <div className="w-100">
                            
                            <label for="Name" className="Label" >Name</label><br></br>
                            <input className="NameInput" name="Name" id="Name" type={"text"} ></input>
                        </div>
                        </div>

                        <div className="PersonalContactdiv my-4">
                            <label for="Contact" className="Label" >Phone Number</label><br></br>
                            <input type={"number"} name="Contact" id="Contact" className="ContactInput" placeholder="+92"></input>
                        </div>

                    </div><hr/>

                    <div className="PostSubmitDiv pt-3 pb-4">
                        <NavLink to={"/home"} ><button>Post now</button></NavLink>
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
        