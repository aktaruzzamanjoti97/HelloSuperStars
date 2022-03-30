import React, { useEffect, useState } from "react";
import "./Activitse.css";
import Clock from "../../../../../images/clock.png";
import ActivitiesModal from "./ActivitiesModal";
import { Button } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import moment from "moment";
import ParticipateReceipt from "../../../../Pages/Profile/BookNow/ParticipateReceipt/ParticipateReceipt";
import LoadingSkeleton from "./LoadingSkeleton";

const ActivitiesContent = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow1, setModalShow1] = React.useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log(props.event);

    setInterval(() => {
      const now = moment();
      const then = moment("2022-03-20 12:12:12", "YYYY-MM-DD hh:mm:ss");
      const countdown = moment(then - now);
      setDays(countdown.format("D"));
      setHours(countdown.format("hh"));
      setMinutes(countdown.format("mm"));
      setSeconds(countdown.format("ss"));
    }, 1000);
  }, [props.event]);

  return (
    <>
      <div className="row mt-3">
       
          {true ? (
            props.event.map((event) => {
              return (
                <div className="col-md-4 mb-6">
                  <div className="card container-x-ac">
                    <img
                      src={`http://localhost:8000/${event.meetup_event?.banner}`}
                      className="Active-Img-X"
                      alt="profilePicture"
                    />

                    <div class="centered-x-ac-y"></div>

                    <div class="top-left">
                      <div className="d-flex Pic-Bg p-1">
                        <span className="text-light">
                          {" "}
                          <img src={Clock} alt="" className="Pic-icon_x" />
                        </span>
                        <div className="mx-2">
                          <span className="Pic_Ic_text fw-bold ">
                            {days}d&nbsp; {hours}:{minutes}:{seconds}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="bottom-left-x-ax">
                      <div className="d-flex p-1">
                        <div className="mx-4">
                          <span className="Pic_Ic_B">
                            {event.meetup_event?.title}
                          </span>
                          <br />
                          <span className="Pic_Ic_BX">20 January 2022</span>
                          &nbsp; &nbsp;
                          <span className="Pic_Ic_BX">11 : 00 PM</span>
                          &nbsp; &nbsp;
                          <span className="Pic_Ic_BX">Pending</span>
                        </div>
                      </div>
                    </div>
                    <div class="bottom-right-x-ax ">
                      <div className="d-flex p-1">
                        <div className="btn-x-r-ac">
                          <button
                            className="btn-x-r-ac py-2"
                            onClick={() => setModalShow(true)}
                          >
                            <i className="fas fa-arrow-alt-circle-right "></i>
                          </button>
                          <ActivitiesModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                        </div>
                      </div>

                      {event.meetup_event?.meetup_type === "Online" ? (
                        <a
                          target="_blank"
                          href={event.meetup_event?.event_link}
                        >
                          <Button className="btn bg-warning  mb-3 text-dark">
                            Join Now
                          </Button>
                        </a>
                      ) : (
                        <>
                          <Button
                            className="btn bg-warning  mb-3 text-dark"
                            onClick={() => setModalShow1(true)}
                          >
                            Check Ticket
                          </Button>
                          <ParticipateReceipt
                            show={modalShow1}
                            onHide={() => setModalShow1(false)}
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <LoadingSkeleton />
          )}
       
      </div>
    </>
  );
};

export default ActivitiesContent;
