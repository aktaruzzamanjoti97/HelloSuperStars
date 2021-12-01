import React from 'react'
import { Tabs,Tab,} from 'react-bootstrap'
import './../../CSS/LiveVideo.css'
const LiveChatContent = () => {
return (
<>
    <div className="row">
        <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example" className="mb-3">

            <Tab eventKey="home" title="Live Now">

                <div eventKey="home" title="Live Now" className="col-md-3 align-items-center justify-content-center ">
                    <div className="card ad-card">
                        <div className="card-body  align-items-center">
                            <center>
                                <tr>
                                    <td className="ad-card-td">
                                        <img src="./../../../../images/Normal-User/star.png" className="ad-card-img-top"
                                            alt="..." />
                                    </td>
                                    <td className="ad-card-td">
                                        <small className="ad-card-small">00</small>
                                    </td>
                                </tr>
                            </center>
                        </div>
                        <button className="card-footer ad-card-footer" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Live Now
                        </button>
                    </div>
                </div>
                <br />
            </Tab>

            <Tab eventKey="profile" title="Add
                            Session">

                <div className="col-md-3 align-items-center justify-content-center ">
                    <div className="card ad-card">
                        <div className="card-body  align-items-center">
                            <center>
                                <tr>
                                    <td className="ad-card-td">
                                        <img src="./../../../../images/Normal-User/star.png" className="ad-card-img-top"
                                            alt="..." />
                                    </td>
                                    <td className="ad-card-td">
                                        <small className="ad-card-small">00</small>
                                    </td>
                                </tr>
                            </center>
                        </div>
                        <button className="card-footer ad-card-footer" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Add
                            Session</button>
                    </div>
                </div>
                <br />

            </Tab>

        </Tabs>
    </div>
</>
)
}

export default LiveChatContent