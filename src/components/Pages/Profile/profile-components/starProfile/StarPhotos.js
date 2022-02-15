import { React, useState, useEffect } from "react";
import "../../../../CSS/Profile/starProfile/starPhotos.css";
// import azhari from "../../../../../images/starProfile/StarPhotos/1.jpg";
import azhari2 from "../../../../../images/Shakib/12.jpg";
import azhari3 from "../../../../../images/Shakib/13.jpg";
import azhari4 from "../../../../../images/Shakib/14.jpg";
import azhari5 from "../../../../../images/Shakib/15.jpg";
import azhari6 from "../../../../../images/Shakib/16.jpg";
import azhari7 from "../../../../../images/Shakib/17.jpg";
import azhari8 from "../../../../../images/Shakib/18.jpg";
import azhari9 from "../../../../../images/Shakib/19.jpg";
import StarProfileRightContent from "./StarCardComponent/StarProfileRightContent/StarProfileRightContent";
import Lock from "../../../../../../src/images/Normal-User/lock.png";
import StarPhotosDetails from "./StarPhotosDetails";
import axios from "axios";

export default function StarPhotos({ star_id }) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(`api/star_photos/${star_id}`).then((res) => {
      if (res.data.status === 200) {
        setPost(res.data.post);
        console.log("sakib", res.data.post);
      }
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mt-3">
          <div class="card m-2 star-photos-card mx-auto pb-3">
            <div class="card-body">
              <h5 class="card-title text-warning">Photos</h5>
            </div>
            <div className="star-line"></div>

            <div className="card-body mb-2">
              <div className="row text-center">
                {post.map((postData) => (
                  <>
                    {post.type === "paid" ? (
                      <>
                        {postData.image ? (
                          <div className="col-4 mb-3">
                            <div style={{ position: "relative" }}>
                              <img
                                src={`http://localhost:8000/${postData.image}`}
                                alt=""
                                className="img-fluid star-card-left-photos ImgBlur"
                              />
                              <span className="dot2 d-flex justify-content-center align-items-center">
                                <img
                                  src={Lock}
                                  alt=""
                                  style={{ width: "100px" }}
                                />
                              </span>
                            </div>
                          </div>
                        ) : (
                          <></>
                        )}
                      </>
                    ) : (
                      <></>
                    )}

                    {postData.image ? (
                      <div className="col-4 mb-3">
                        <img
                          src={`http://localhost:8000/${postData.image}`}
                          alt=""
                          className="img-fluid star-card-left-photos"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                ))}
              </div>

              {/* <div className="row text-center mt-3">
                <div className="col-4  ">
                  <img
                    src={azhari4}
                    alt=""
                    className="img-fluid star-card-left-photos"
                  />
                </div>

                <div className="col-4 ">
                  <img
                    src={azhari5}
                    alt=""
                    className="img-fluid star-card-left-photos"
                  />
                </div>
                <div className="col-4 ">
                  <img
                    src={azhari6}
                    alt=""
                    className="img-fluid star-card-left-photos"
                  />
                </div>
              </div>

              <div className="row text-center mt-3">
                <div className="col-4  ">
                  <img
                    src={azhari7}
                    alt=""
                    className="img-fluid star-card-left-photos"
                  />
                </div>

                <div className="col-4 ">
                  <img
                    src={azhari8}
                    alt=""
                    className="img-fluid star-card-left-photos"
                  />
                </div>
                <div className="col-4 ">
                  <img
                    src={azhari9}
                    alt=""
                    className="img-fluid star-card-left-photos"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <StarProfileRightContent star_id={star_id} />
        </div>
      </div>
    </div>
  );
}
