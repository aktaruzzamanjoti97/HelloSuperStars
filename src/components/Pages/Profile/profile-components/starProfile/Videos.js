import React, { useEffect, useState } from "react";
import "../../../../CSS/Profile/starProfile/starVideos.css";
import azhari2 from "../../../../../images/Shakib/12.jpg";
import azhari3 from "../../../../../images/Shakib/13.jpg";
import azhari4 from "../../../../../images/Shakib/14.jpg";
import azhari5 from "../../../../../images/Shakib/16.jpg";
import azhari6 from "../../../../../images/Shakib/17.jpg";
import azhari7 from "../../../../../images/Shakib/18.jpg";
import azhari8 from "../../../../../images/Shakib/19.jpg";
import azhari9 from "../../../../../images/Shakib/20.jpg";
import StarProfileRightContent from "./StarCardComponent/StarProfileRightContent/StarProfileRightContent";
import StarVideoDetails from "./StarVideoDetails";
import ReactPlayer from "react-player";
import axios from "axios";

function Videos({ star_id }) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(`api/star_videos/${star_id}`).then((res) => {
      if (res.data.status === 200) {
        setPost(res.data.post);
      }
    });
  }, []);

  return (
    // This full page mainly comes from star photos page
    <div className="container">
      <div className="row">
        <div className="col-md-8 mt-3">
          <div class="card m-2 star-photos-card mx-auto pb-3">
            <div class="card-body">
              <h5 class="card-title text-warning">Videos</h5>
            </div>
            <div className="star-line"></div>

            <div className="card-body mb-2">
              <div className="row text-center">


              {/* <div className="col-4 play-button-container ">
                  <StarVideoDetails />
                </div> */}


                {post.map((postData) => (
                  <div className="col-4 mb-3">
                    <ReactPlayer
                      url={postData.video}
                      playing={false}
                      volume={1}
                      width="100%"
                      height="100%" // style={{ margin: "0 auto" }} onReady={()=> console.log("ready now")}
                    />
                  </div>
                ))}

                {/* <div className="col-4 play-button-container">
                  <img
                    src={azhari2}
                    alt=""
                    className="img-fluid star-card-left-photos"
                  />
                  <div class="play-center">
                    <i class="fas fa-play fa-3x"></i>
                  </div>
                </div>
                <div className="col-4 play-button-container">
                  <img
                    src={azhari3}
                    alt=""
                    className="img-fluid star-card-left-photos"
                  />
                  <div class="play-center">
                    <i class="fas fa-play fa-3x"></i>
                  </div>
                </div>
              </div>

              <div className="row text-center mt-3">
                <div className="col-4 play-button-container ">
                  <img
                    src={azhari4}
                    alt=""
                    className="img-fluid star-card-left-photos"
                  />
                  <div class="play-center">
                    <i class="fas fa-play fa-3x"></i>
                  </div>
                </div>

                <div className="col-4 play-button-container ">
                  <img
                    src={azhari5}
                    alt=""
                    className="img-fluid star-card-left-photos"
                  />
                  <div class="play-center">
                    <i class="fas fa-play fa-3x"></i>
                  </div>
                </div>
                <div className="col-4 play-button-container ">
                  <img
                    src={azhari6}
                    alt=""
                    className="img-fluid star-card-left-photos"
                  />
                  <div class="play-center">
                    <i class="fas fa-play fa-3x"></i>
                  </div>
                </div>
              </div>

              <div className="row text-center mt-3">
                <div className="col-4  play-button-container">
                  <img
                    src={azhari7}
                    alt=""
                    className="img-fluid star-card-left-photos"
                  />
                  <div class="play-center">
                    <i class="fas fa-play fa-3x"></i>
                  </div>
                </div>

                <div className="col-4  play-button-container">
                  <img
                    src={azhari8}
                    alt=""
                    className="img-fluid star-card-left-photos"
                  />
                  <div class="play-center">
                    <i class="fas fa-play fa-3x"></i>
                  </div>
                </div>
                <div className="col-4 play-button-container">
                  <img
                    src={azhari9}
                    alt=""
                    className="img-fluid star-card-left-photos"
                  />
                  <div class="play-center">
                    <i class="fas fa-play fa-3x"></i>
                  </div>
                </div>*/}
              </div>
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

export default Videos;
