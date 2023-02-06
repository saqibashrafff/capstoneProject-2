
import './download.css';

import AppStore from "../Footer/Footer Images/AppStore.svg"
import GooglePlay from "../Footer/Footer Images/GooglePlay.svg"
import AppGallery from "../Footer/Footer Images/AppGallery.svg"

function Download (){
    return (
        <>
        <div className="DownloadSection container-fluid">
            <div className="row DownloadSectionRow">

                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 DownloadImageCol">
                    <img src="Images\Screenshot_2022-12-09_075613-removebg-preview.png" ></img>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 DownloadRowCol2">
                    <h2>TRY THE OLX APP</h2>
                    <p>Buy, sell and find just about anything using the app on your mobile.</p>
                </div>

                <div className='col-lg-4 col-md-4 col-sm-4 DownloadRowCol3'>
                    <div><h6>GET YOUR APP TODAY</h6></div>

                    <div className='DownloadImagesDiv'>
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
        </>
    );
}

export default Download;