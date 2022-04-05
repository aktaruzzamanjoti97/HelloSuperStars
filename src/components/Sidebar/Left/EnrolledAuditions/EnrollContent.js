import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/Sidebar/Left/Enroll.css";

export default function EnrollContent({ user }) {
  return (
    <>
      {user.auditions.map((audition) => (
        <>
          <div className="container align-items-center justify-content-center col-11 Enroll-Auditions">
            <div className="card Enroll-AuditionsB">
              <div className="my-2 Enroll-a Enroll-text">{audition.title}</div>
              <div className="row align-items-center justify-content-center ">
                <div className="col-md-6 ">
                  <img
                    src={`http://localhost:8000/${audition.banner}`}
                    className="Enroll-banner"
                  />
                </div>

                <div className="col-md-5 ">
                  <div className="Enroll-row">
                    <label className="Enroll-row-t mb-4">Judge Panel</label>
                    {audition.judge.map((judges) => (
                      <p className="Enroll-row-t pxs">
                        {judges.user?.first_name} {judges.user?.last_name}
                      </p>
                    ))}
                  </div>

                  <div className="Enroll-row">
                    <label className="Enroll-row-t">Date</label>
                    <p className="Enroll-row-t pxs">
                      {moment(audition.start_time).format("LL")} --{" "}
                      {moment(audition.end_time).format("LL")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="my-2 Enroll-a Enroll-btn">
                <Link to={`participant-audition/${audition.id}`}>
                  <button>Enrollment</button>
                </Link>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
