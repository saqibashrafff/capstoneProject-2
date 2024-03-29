
import './footer.css';

import fbIcon from "../Footer/Footer Images/FbIcon.svg"
import InstaIcon from "../Footer/Footer Images/instaIcon.svg"
import YoutubeIcon from "../Footer/Footer Images/YoutubeIcon.svg"
import TwitterIcon from "../Footer/Footer Images/TwitterIcon.svg"
import AppStore from "../Footer/Footer Images/AppStore.svg"
import GooglePlay from "../Footer/Footer Images/GooglePlay.svg"
import AppGallery from "../Footer/Footer Images/AppGallery.svg"

function Footer (){
    return (
        <>
        <div className='FooterSection container-fluid'>
            <div className='row'>

                <div className='col-lg-2 col-md-2 col-sm-2 FooterCol1'>
                    <h6 className='FooterHeading'>POPULAR CATEGORIES</h6>
                    <ul className='FooterListItems'>
                        <li>
                            <a href="" >Cars</a>
                        </li>

                        <li>
                            <a href="" >Flats for rent</a>
                        </li>

                        <li>
                            <a href="" >Mobile Phones</a>
                        </li>

                        <li>
                            <a href="" >Jobs</a>
                        </li>
                    </ul>
                </div>

                <div className='col-lg-2 col-md-2 col-sm-2 FooterCol2 '>
                    <h6 className='FooterHeading'>TRENDING SERACHES</h6>
                    <ul className='FooterListItems'>
                        <li>
                            <a href="" >Bikes</a>
                        </li>

                        <li>
                            <a href="" >Watches</a>
                        </li>

                        <li>
                            <a href="" >Books</a>
                        </li>

                        <li>
                            <a href="" >Dogs</a>
                        </li>
                    </ul>
                </div>

                <div className='col-lg-2 col-md-2 col-sm-2 FooterCol3 '>
                    <h6 className='FooterHeading'>ABOUT US</h6>
                    <ul className='FooterListItems'>
                        <li>
                            <a href="" >About EMPG</a>
                        </li>

                        <li>
                            <a href="" >OLX Blog</a>
                        </li>

                        <li>
                            <a href="" >Contact Us</a>
                        </li>

                        <li>
                            <a href="" >OLX for Businesses</a>
                        </li>
                    </ul>
                </div>

                <div className='col-lg-2 col-md-2 col-sm-2 FooterCol4 '>
                    <h6 className='FooterHeading'>OLX</h6>
                    <ul className='FooterListItems'>
                        <li>
                            <a href="" >Help</a>
                        </li>

                        <li>
                            <a href="" >Sitemap</a>
                        </li>

                        <li>
                            <a href="" >Terms of use</a>
                        </li>

                        <li>
                            <a href="" >Privacy Policy</a>
                        </li>
                    </ul>
                </div>

                <div className='col-lg-4 col-md-4 col-sm-4  FooterCol5 '>
                    <h6 className='ContactHeading'>FOLLOW US</h6>

                    <div className='ContactIconsDiv '>
                        <a href=''>
                            <img src={fbIcon} width={"15%"}></img>
                        </a>

                        <a href=''>
                            <img src={TwitterIcon} width={"15%"}></img>
                        </a>

                        <a href=''>
                            <img src={YoutubeIcon} width={"15%"}></img>
                        </a>

                        <a href=''>
                            <img src={InstaIcon} width={"15%"}></img>
                        </a>
                    </div>

                    <div className='ContactImagesDiv'>
                        <a href="">
                            <img src={AppStore} width={"30%"}></img>
                        </a>

                        <a href="">
                            <img src={GooglePlay} width={"30%"}></img>
                        </a>

                        <a href="">
                            <img src={AppGallery} width={"30%"}></img>
                        </a>
                        
                    </div>

                </div>

            </div>
        </div>

        <div className='ReleaseDateSection container-fluid'>
            <div className='row ReleaseDate'>
                <div className='col-lg-12'>
                    <p>Free Classifieds in Pakistan <span> . © 2006-2022 OLX</span></p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Footer;