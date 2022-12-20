
import "./filter.css";

function FilterSection(){
    return (<>
        <div className="FilterItemsdiv">
            <p className="FilterItemDivHeading">CATEGORIES</p>
            <ul className="ps-0">
                <li>
                    <a href="">All categories</a>
                    
                </li>

                <li className="ps-3">
                    <a href="">Mobiles</a>
                </li>
            </ul>
        </div>

        <div className="FilterItemsdiv pb-1">
            <ul>
                <li className="list1">
                    <a href="">Mobile Phones <span>(153156)</span></a>
                </li>

                <li>
                    <a href="">Accessories <span>(32544)</span></a>
                </li>

                <li>
                    <a href="">Smart Watches <span>(8615)</span></a>
                </li>

                <li>
                    <a href="">Tablets <span>(6001)</span></a>
                </li>
            </ul>
        </div><hr></hr>

        {/* Filter Location */}

        <div className="FilterLocationDiv">
            <h6>LOCATIONS</h6>
            <input className="LocationInput" type={"text"} placeholder="Pakistan"></input>
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

        {/* Filter Price  */}

        <div className="FilterPriceDiv pb-2 pt-3">
            <h6 className="PriceHeading">PRICE</h6>
            <input className="PriceInput" type={"number"} value="250" placeholder="0"></input>
            <input className="PriceInput" type={"number"} value="1000000" placeholder="1000000"></input>
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





















