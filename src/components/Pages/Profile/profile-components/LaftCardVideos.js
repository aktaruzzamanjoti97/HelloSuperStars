import React from "react";
import blackBox from "../../../../images/Profile/blackbox.jpeg";
const LeftCardVideos = (props) => {
  // console.log("video data", props.videos);

  return (
    <>
      <div className="container left-col-box py-4">
        <h6 className="profile-font-color">{props.title}</h6>
        <div className="row">
          {props?.videos?.map((data,index) => (
            index < 6 &&
            <>
              {data.type == "learningSession" &&
              data?.learning_session?.video != null ? (
                <div className="col-4">
                  <video width="150" controls>
                    <source
                      src={
 `http://localhost:8000/${data?.learning_session?.video}`

                      }
                      type="video/mp4"
                    />
                  </video>{" "}
                </div>
              ) : data.type == "meetup" && data?.meetup?.video != null ? (
                <div className="col-4">
                  {" "}
                  <video width="150" controls>
                    <source
                      src={

`http://localhost:8000/${data?.meetup?.video}`

                      }
                      type="video/mp4"
                    />
                  </video>
                </div>
              ) : data.type == "liveChat" && data?.livechat?.video != null ? (
                <div className="col-4">
                  {" "}
                  <video width="150" controls>
                    <source
                      src={
`http://localhost:8000/${data?.livechat?.video}`
                      }
                      type="video/mp4"
                    />
                  </video>
                </div>
              ):null}
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

export default LeftCardVideos;
