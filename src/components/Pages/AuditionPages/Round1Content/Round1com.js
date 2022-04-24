// import "bootstrap/dist/css/bootstrap.min.css";
import "./Round1com.css";
import { Tab, Nav } from "react-bootstrap";
import participant from "../../../../images/Rounds/participant.png";
import Instruction from "../../../../images/Rounds/instruction.png";
import markDistribution from "../../../../images/Rounds/markDistributin.png";
import judge from "../../../../images/Rounds/judge.png";
import result from "../../../../images/Rounds/result.png";
import Participant from "../Participant/Participant";

import AuditionDragAndDrop from "../../AuditionPages/AuditionDragAndDrop/AuditionDragAndDrop";
import { useState } from "react";
import AuditionPay from "../AuditionPay/AuditionPay";
export default function Round1com() {

  const [showPayment, setShowPayment] = useState(false)

  return (
    <div className="my-3">
      <Tab.Container fluid id="left-tabs-example" defaultActiveKey="first">
        <div className="round1">
          <Nav variant="pills">
            <div className="container-fluid ">
              <div className="d-sm-none d-md-flex justify-content-between flex-wrap">
                <div className="singleContent">
                  <div className="card roundCard1">
                    <div className="card-body">
                      <div className="text-center my-2">
                        <img src={participant} alt="" />
                      </div>
                      <Nav.Item>
                        <Nav.Link eventKey="first" className="NavAudition subAudition">
                          Participation
                        </Nav.Link>
                      </Nav.Item>
                    </div>
                  </div>
                </div>

                <div className="singleContent">
                  <div className="card roundCard1" >
                    <div className="card-body">
                      <div className="text-center my-2">
                        <img src={Instruction} alt="" />
                      </div>
                   <div >
                   <Nav.Item >
                        <Nav.Link eventKey="second" className="NavAudition subAudition">
                          Instruction
                        </Nav.Link>
                      </Nav.Item>
                   </div>
                    </div>
                  </div>
                </div>
                <div className="singleContent">
                  <div className="card roundCard1">
                    <div className="card-body">
                      <div className="text-center my-2">
                        <img src={judge} alt="" />
                      </div>
                      <Nav.Item>
                        <Nav.Link eventKey="third" className="NavAudition subAudition">
                          Judge
                        </Nav.Link>
                      </Nav.Item>
                    </div>
                  </div>
                </div>

                <div className="singleContent">
                  <div className="card roundCard1">
                    <div className="card-body">
                      <div className="text-center my-2">
                        <img src={markDistribution} alt="" />
                      </div>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth" className="NavAudition subAudition">
                          Mark Distribution
                        </Nav.Link>
                      </Nav.Item>
                    </div>
                  </div>
                </div>

                <div className="singleContent">
                  <div className="card roundCard1">
                    <div className="card-body">
                      <div className="text-center my-2">
                        <img src={result} alt="" />
                      </div>
                      <Nav.Item>
                        <Nav.Link eventKey="fifth" className="NavAudition subAudition">
                          Result
                        </Nav.Link>
                      </Nav.Item>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Nav>
        </div>

        <div className="container-fluid my-2">
          <Tab.Content>
            <Tab.Pane eventKey="first" >
             {/* <Participant /> */}
            
             {
               showPayment ?  <AuditionPay /> :  <AuditionDragAndDrop showPayment={showPayment} setShowPayment={setShowPayment} />
             }
           
             {/* {showPayment ? <AuditionPay /> } */}
                {/* <AuditionRoundResult /> */}
                     {/* <AuditionDescription /> */}
            </Tab.Pane>
            <Tab.Pane eventKey="second" className="bg-warning">
              Content 2
          
            </Tab.Pane>
            <Tab.Pane eventKey="third" className="bg-warning">
              Content 3
            </Tab.Pane>
            <Tab.Pane eventKey="fourth" className="bg-warning">
              Content 4
            </Tab.Pane>
            <Tab.Pane eventKey="fifth" className="bg-warning">
              Content 5
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    </div>
  );
}
