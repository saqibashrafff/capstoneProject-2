
import "./description.css";

function Description(props){
    return (
        <div className="row DetailsSectionDiv">
            <div className="col-lg-12 pb-2 DetailsHeadingDiv">
                <h5>Details</h5>
            </div>

            <div className="col-lg-3 DetailsKeyDiv">
                <p>Make</p>
                <p>Year</p>
                <p>Price</p>
                <p>Registration city</p>
                <p>Assembly</p>
                <p>Condition</p>
            </div>

            <div className="col-lg-3 DetailsValueDiv">
                <p>Hyundai</p>
                <p>2022</p>
                <p>8,450,000</p>
                <p>Unregistered</p>
                <p>Local</p>
                <p>Used</p>
            </div>

            <div className="col-lg-3 DetailsKeyDiv">
                <p>Model</p>
                <p>KM's driven</p>
                <p>Fuel</p>
                <p>Car documents</p>
                <p>Transmission</p>
            </div>

            <div className="col-lg-3 DetailsValueDiv">
                <p>Sonata</p>
                <p>5,000</p>
                <p>Petrol</p>
                <p>Original</p>
                <p>Automatic</p>
            </div>

            <hr></hr>

            <div className="col-lg-12 DescriptionDiv">

                <h5>Description</h5>
                <p style={{lineHeight: 1.1}}>{props.description}</p>
                {/* <p style={{lineHeight: 1.1}}>{props.description.slice(0,30)}</p>
                <p style={{lineHeight: 1.1}}>{props.description.slice(30,60)}</p>
                <p style={{lineHeight: 1.1}}>{props.description.slice(60,90)}</p>
                <p style={{lineHeight: 1.1}}>{props.description.slice(90,120)}</p>
                <p style={{lineHeight: 1.1}}>{props.description.slice(120,150)}</p> */}
                {/* <p>Panoramic sunroof</p>
                <p>Paddle shifters</p>
                <p>Auto hold</p>
                <p>Apple car play</p>
                <p>Android auto</p>
                <p>Cruise control</p>
                <p>Navigation</p>
                <p>Multimedia steering</p>
                <p>Scratcless, pin spotless interior and exterior</p>
                <p>Just like a brand new showroom condition car</p> */}

            </div>
        </div>
    );
}

export default Description;











