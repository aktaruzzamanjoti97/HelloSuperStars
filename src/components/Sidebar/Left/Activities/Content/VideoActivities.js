import React, { Component } from "react";
import Pro from "../../../../../images/VideoActivities.jpg";
import Clock from "../../../../../images/clock.png"
import Navigation from "../../../../Header/Navigation";

export default class VideoActivities extends Component {
render() {
return (
<React.Fragment>
    <Navigation />

    <div className="homebody" style={{ background: "#000000"}}>
        <div className="container-fluid  custom-container">
            <div className="row">

                <div className=" mt-3 col-12">

                    <div className="card mb-4 VideoActivities">

                            <img src={Pro} className="image-fluid" alt="profilePicture" />

                    </div>

                </div>

            </div>
        </div>
    </div>
</React.Fragment>
);
}
}