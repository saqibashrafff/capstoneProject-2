
import "./advertise.css"



function Advertisement (){
    return (
        <>
        <div className='AdvertisementDiv container-fluid'>
      <div className='row carousel-row-div '>
        <div className='col-lg-12 col-md-12 col-sm-12 carousel-col-div '>

        <div id="carouselExampleSlidesOnly" className="carousel slide " data-bs-ride="carousel" data-bs-interval={3000}>
            <div className="carousel-inner rounded-1">

              <div className="carousel-item active carousel-item-div">
                <img src="Images/sprite.jpg" className="d-block w-100" ></img>
              </div>

              <div className="carousel-item">
                <img src="Images/chai.jpg" className="d-block w-100" ></img>
              </div>

              <div className="carousel-item">
                <img src="Images/zong.png" className="d-block w-100" ></img>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    );
}

export default Advertisement;