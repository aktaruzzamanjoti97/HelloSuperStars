import React from "react";
import "./AuditionBody.css";

import { Tab, Nav } from "react-bootstrap";
import roundBg from "../../../../images/Rounds/Round.png";
import Round1com from "../Round1Content/Round1com";
export default function AuditionBody() {
  return (
    <div className="auditionMainContainer my-3">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <div className="audition">
          <Nav variant="pills">
            <div className="container ">
              <div className="row">
                <div className="col-md-4">
                  <div>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="first"
                        className="NavAudition"
                        style={{ position: "relative" }}
                      >
                        <img
                          src={roundBg}
                          className="img-fluid"
                          width={"100%"}
                          alt=""
                        />
                        <div className="round-content">
                          <h3 className="fw-bold">Round</h3>
                          <div>
                            <h4 className="fw-bold"> 01</h4>
                          </div>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </div>
                </div>

                <div className="col-md-4">
                  <div>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="second"
                        className="NavAudition"
                        style={{ position: "relative" }}
                      >
                        <img
                          src={roundBg}
                          className="img-fluid"
                          width={"100%"}
                          alt=""
                        />
                        <div className="round-content">
                          <h3 className="fw-bold">Round</h3>
                          <div>
                            <h4 className="fw-bold"> 02</h4>
                          </div>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="third"
                        className="NavAudition"
                        style={{ position: "relative" }}
                      >
                        <img
                          src={roundBg}
                          className="img-fluid"
                          width={"100%"}
                          alt=""
                        />
                        <div className="round-content">
                          <h3 className="fw-bold">Round</h3>
                          <div>
                            <h4 className="fw-bold"> 03</h4>
                          </div>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </div>
                </div>
              </div>
            </div>
          </Nav>
        </div>

        <div className="container my-2">
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Round1com />
            </Tab.Pane>
            <Tab.Pane eventKey="second" className="bg-warning">
              Content 2
            </Tab.Pane>
            <Tab.Pane eventKey="third" className="bg-warning">
              Content 3
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    </div>
  );
}
