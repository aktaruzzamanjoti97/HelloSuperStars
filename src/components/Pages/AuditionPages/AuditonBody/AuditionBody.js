import React, {useState} from "react";
import { Nav, Tab } from "react-bootstrap";
import roundBanner from "../../../../images/Audition-images/auditionBanner.png";
import roundBg from "../../../../images/Rounds/Round.png";
import Round1com from "../Round1Content/Round1com";
import "./AuditionBody.css";
import "./RoundBg.css";
export default function AuditionBody() {

  const [day, setDay] = useState('')
  const [hour, setHour] = useState('')
  const [minute, setMinute] = useState('')
  const [second, setSecond] = useState('')

  const countDownDate = new Date("May 20, 2022 15:37:25").getTime();


  setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    setDay(days)

    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    setHour(hours)

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    setMinute(minutes)
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    setSecond(seconds)

    document.getElementById("demo").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }, 1000);

  return (
    <>
      <div className="container-fluid">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            backgroundImage: `url(${roundBanner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "20vh",
          }}
        >
          <div className="timeBg p-3 fw-bolder mx-1">
            <div className="text-center">{day}</div>
            DAYS
          </div>
          <div className="timeBg p-3 fw-bolder  mx-1">
            <div className="text-center">{hour}</div>
            HOURS
          </div>
          <div className="timeBg p-3 fw-bolder mx-1">
            <div className="text-center">{second}</div>
            SEC
          </div>
        </div>
      </div>

      <div className="auditionMainContainer my-3">
        <Tab.Container fluid id="left-tabs-example" defaultActiveKey="first">
          <div className="audition">
            <Nav variant="pills">
              <div className="container-fluid ">
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

          {/* nav banner start here */}
          {/* <div className="bg-warning container my-2">
          hello banner
        </div> */}
          {/* nav banner end here */}

          <div className="container-fluid auditonTabcontent my-2">
            <Tab.Content>
              <Tab.Pane eventKey="first" className="w-100">
                <Round1com />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Round1com />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Round1com />
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </div>
    </>
  );
}
