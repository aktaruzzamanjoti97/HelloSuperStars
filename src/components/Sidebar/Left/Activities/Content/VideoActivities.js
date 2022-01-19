import React, { Component } from "react";
import Pro from "../../../../../images/asddasd.jpg.jpg";
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

                    <center>
                        <div className="card mb-4 VideoActivities">

                            <img src={Pro} className="image-fluid" alt="profilePicture" />

                            <center>
                                <div className="flaxVideo bg-dark p-2 m-3">
                                    <span className="p-3"><button className="BtnFlaxV btn bg-warning"><i
                                                className="fas fa-video"></i></button></span>
                                    <span className="p-3"><button className="BtnFlaxV btn bg-warning"><i
                                                className="fas fa-microphone"></i></button></span>
                                    <span className="p-3"><button className="BtnFlaxV btn bg-warning"><i
                                                className="fas fa-times-circle"></i></button></span>
                                </div>
                            </center>

                        </div>

                    </center>

                </div>

            </div>
        </div>
    </div>
</React.Fragment>
);
}
}