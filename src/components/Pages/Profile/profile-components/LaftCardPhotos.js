import React from "react";
import blackBox from "../../../../images/Profile/blackbox.jpeg";

const LeftCardPhotos = (props) => {
  // console.log("photo data", props.photos);

  return (
    <>
      <div className="container left-col-box py-4">
        <h6 className="profile-font-color">{props.title}</h6>
        <div className="row">
          {props?.photos?.map((data,index) => (

            index < 6 &&
            <>
              {data?.type == "learningSession" &&
              data?.learning_session?.banner != null ? (
                <div className="col-4">
                  <img
                    src={`http://localhost:8000/${data?.learning_session?.banner}`}
                    alt=""
                    className="img-fluid profile-photos"
                  />{" "}
                </div>
              ) : data?.type == "meetup" && data?.meetup?.banner != null ? (
                <div className="col-4">
                  <img
                    src={`http://localhost:8000/${data?.meetup?.banner}`}
                    alt=""
                    className="img-fluid profile-photos"
                  />{" "}
                </div>
              ) :data?.type == "liveChat" && data?.livechat?.banner != null ? (
                <div className="col-4">
                  <img
                    src={`http://localhost:8000/${data?.livechat?.banner}`}
                    alt=""
                    className="img-fluid profile-photos"
                  />{" "}
                </div>
              ): null}
            </>
          ))}
        </div>

        <div className="see-all-text  ">
          <a href="/" className="text-decoration-none profile-font-color">
            See all
          </a>
        </div>
      </div>
    </>
  );
};

export default LeftCardPhotos;
