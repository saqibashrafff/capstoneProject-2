
import { NavLink } from "react-router-dom";
import "./navbar.css";
import NavArray from "./NavbarArray";
import CategoryPage from "../CategoryPage/CategoryPage";
import axios from "axios";

function Navbar (){

    // useEffect(() => {
    //     axios.get("https://fakestoreapi.com/products/" + props.id)
    //     .then((res) => {
    //         console.log(res.data);
    //     })
    //     .catch((error) => {
    //       console.log(error.message);
    //     })
    //   },[]);

        function getJewellery(){
            axios.get("https://fakestoreapi.com/products/category/jewelery")
            .then((res) => {
                console.log(res.data);
            })
        }

    return (
        <>
    <nav class="navbar navbar-expand-lg navbarSection dropdown">

    <a class="navbar-brand NavbarBrand dropdown-toggle" href="" data-bs-toggle="dropdown" aria-expanded="false">ALL CATEGORIES
    
    <div className="row DropDownSection dropdown-menu dropdown-menu-dark">
        <div className="col-lg-12">
            <div className="row">

                <div className="col-lg-3 p-0">

                    {NavArray[0].map((Category) => {
                        return (
                            <div className="CategoryDiv">
                            <ul className="CategoryUlList">
                        <li className="CategoryTitle ">
                            <a style={{color: "#01474e"}} href="">{Category.title}</a>
                        </li>

                        <li>
                            <a href="">{Category.item1}</a>
                        </li>

                        <li>
                            <a href="">{Category.item2}</a>
                        </li>

                        <li>
                            <a href="">{Category.item3}</a>
                        </li>

                        <li>
                            <a href="">{Category.item4}</a>
                        </li>
                        
                        <li>
                            <a href="">{Category.item5}</a>
                        </li>

                        <li>
                            <a href="">{Category.item6}</a>
                        </li>

                        <li>
                            <a href="">{Category.item7}</a>
                        </li>

                        <li >
                            <a href="" >{Category.item8}</a>
                        </li>

                        <li >
                            <a href="" >{Category.item9}</a>
                        </li>
                    </ul>
                    </div>
                        );
                    })}

                    
                </div>


                <div className="col-lg-3 p-0">
                {NavArray[1].map((Category) => {
                        return (
                            <div className="CategoryDiv">
                            <ul className="CategoryUlList">
                        <li className="CategoryTitle">
                            <a style={{color: "#01474e"}} href="">{Category.title}</a>
                        </li>

                        <li>
                            <a href="">{Category.item1}</a>
                        </li>

                        <li>
                            <a href="">{Category.item2}</a>
                        </li>

                        <li>
                            <a href="">{Category.item3}</a>
                        </li>

                        <li>
                            <a href="">{Category.item4}</a>
                        </li>
                        
                        <li>
                            <a href="">{Category.item5}</a>
                        </li>

                        <li>
                            <a href="">{Category.item6}</a>
                        </li>

                        <li>
                            <a href="">{Category.item7}</a>
                        </li>

                        <li >
                            <a href="" >{Category.item8}</a>
                        </li>

                        <li >
                            <a href="" >{Category.item9}</a>
                        </li>

                        <li >
                            <a href="" >{Category.item10}</a>
                        </li>

                        <li>
                            <a href="">{Category.item11}</a>
                        </li>

                        <li >
                            <a href="" >{Category.item12}</a>
                        </li>

                        <li >
                            <a href="" >{Category.item13}</a>
                        </li>

                        <li >
                            <a href="" >{Category.item14}</a>
                        </li>
                    </ul>
                    </div>
                        );
                    })}
                </div>

                <div className="col-lg-3 p-0">
                {NavArray[2].map((Category) => {
                        return (
                            <div className="CategoryDiv">
                            <ul className="CategoryUlList">
                        <li className="CategoryTitle">
                            <a style={{color: "#01474e"}} href="">{Category.title}</a>
                        </li>

                        <li><a href="">{Category.item2}</a></li>
                        <li><a href="">{Category.item3}</a></li>
                        <li><a href="">{Category.item4}</a></li>
                        <li><a href="">{Category.item5}</a></li>
                        <li><a href="">{Category.item6}</a></li>
                        <li><a href="">{Category.item7}</a></li>
                        <li><a href="">{Category.item8}</a></li>
                        <li><a href="">{Category.item9}</a></li>
                        <li><a href="">{Category.item10}</a></li>
                        <li><a href="">{Category.item11}</a></li>
                        <li><a href="">{Category.item12}</a></li>
                        <li><a href="">{Category.item13}</a></li>
                        <li><a href="">{Category.item14}</a></li>
                        <li><a href="">{Category.item15}</a></li>
                        <li><a href="">{Category.item16}</a></li>
                        <li><a href="">{Category.item17}</a></li>
                        <li><a href="">{Category.item18}</a></li>
                        <li><a href="">{Category.item19}</a></li>
                        <li><a href="">{Category.item20}</a></li>
                        <li><a href="">{Category.item21}</a></li>
                        <li><a href="">{Category.item22}</a></li>
                        <li><a href="">{Category.item23}</a></li>
                        <li><a href="">{Category.item24}</a></li>
                        <li><a href="">{Category.item25}</a></li>


                    </ul>
                    </div>
                        );
                    })}
                </div>

                <div className="col-lg-3 p-0">
                {NavArray[3].map((Category) => {
                        return (
                            <div className="CategoryDiv">
                            <ul className="CategoryUlList">
                        <li className="CategoryTitle">
                            <a style={{color: "#01474e"}} href="">{Category.title}</a>
                        </li>

                        <li><a href="">{Category.item2}</a></li>
                        <li><a href="">{Category.item3}</a></li>
                        <li><a href="">{Category.item4}</a></li>
                        <li><a href="">{Category.item5}</a></li>
                        <li><a href="">{Category.item6}</a></li>
                        <li><a href="">{Category.item7}</a></li>
                        <li><a href="">{Category.item8}</a></li>
                        <li><a href="">{Category.item9}</a></li>
                        <li><a href="">{Category.item10}</a></li>
                        <li><a href="">{Category.item11}</a></li>

                    </ul>
                    </div>
                        );
                    })}
                </div>

            </div>
        </div>

    </div>
    </a>

        {/* <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul> */}
        
    <ul className="navbar-nav NavbarItems">

        <li className="nav-item" >
            <NavLink to="/CategoryPage" state={{title:"jewelery"}} onClick={getJewellery} className="nav-link CategoryPageLink">Mobile Phones</NavLink>
        </li>
        
        <li className="nav-item">
            <a className="nav-link" href="">Cars</a>
        </li>
        
        <li className="nav-item">
            <a className="nav-link" href="">Motorcycles</a>
        </li>
        
        <li className="nav-item">
            <a className="nav-link" href="">Houses</a>
        </li>

        <li className="nav-item">
            <a className="nav-link" href="">TV - Video - Audio</a>
        </li>

        <li className="nav-item">
            <a className="nav-link" href="">Tablets</a>
        </li>

        <li className="nav-item">
            <a className="nav-link" href="">Land & Plots</a>
        </li>

        </ul>
    </nav>
        </>
    );
}

export default Navbar;