import React from "react";
import StarCover from "../../../../../images/Profile/cover.jpg";
import Select from "react-select";
import "./FanStar.css";
import { Nav, Row, Tab } from "react-bootstrap";
import FanPost from "./FanPost";
import FanMedia from "./FanMedia";
import FanMember from "./FanMember";

const FanStar = () => {
const options = [
{ value: "Salman Khan Team", label: "Salman Khan Team" },
{ value: "Shakib All Hasan Team ", label: "Shakib All Hasan Team " },
{ value: "vanilla", label: "Vanilla" },
];
return (
<>
    <div className="mt-3">
        <img src={StarCover} alt="" className="img-fluid StartCover mb-2" />
        <b className="text-light fw-bold TitleFan">
            Salman VS Sharukh Fan group
        </b>
        <p className="subTitleFan">
            Created at 12 Feb 2022 | Continue till 12 April 2022
        </p>
    </div>

    <div className="FanNave">
        <div className="row">
            <div className="col-sm-8 ">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Nav variant="pills" className="d-flex justify-content-between">
                        <Nav.Item>
                            <Nav.Link className="fw-bold NavColorFan" eventKey="first">
                                <i class="fa fa-house-user me-1"></i>Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="fw-bold NavColorFan" eventKey="second">
                                <i class="fa fa-house-user me-1"></i> Media
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="fw-bold NavColorFan" eventKey="third">
                                <i class="fa fa-house-user me-1"></i>Member
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Select options={options} className="SelectFan" />
                        </Nav.Item>
                        <button className="w-100 mt-3"> Write post</button>
                    </Nav>

                    <Tab.Content>

                        <Tab.Pane eventKey="first" className="">
                            <FanPost/>
                        </Tab.Pane>

                        <Tab.Pane eventKey="second">
                            <FanMedia/>
                        </Tab.Pane>

                        <Tab.Pane eventKey="third">
                            <FanMember/>
                        </Tab.Pane>

                    </Tab.Content>
                </Tab.Container>

            </div>

            {/* Chat Box */}
            <div className="col-sm-4 ">
                <button>Message Group</button>
            </div>
        </div>
    </div>
</>
);
};

export default FanStar;