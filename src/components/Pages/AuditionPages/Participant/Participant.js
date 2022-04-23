import React from "react";
import "./Participant.css";
const Participant = () => {
  return (
    <div className="card bg-dark">
      <div className="card-body">
        <div className="topContentParticipant my-2 d-flex justify-content-between">
          <div>
            <h5 className="text-warning">Video Submission Date</h5>
            <h5 className="text-warning">Video Submission Time</h5>
            <h5 className="text-warning">Fee</h5>
          </div>
          <div>
            <h5 className="text-light">15/06/2022</h5>
            <h5 className="text-light">9:45 AM</h5>
            <h5 className="text-light">250 BDT</h5>
          </div>
        </div>
        <div style={{ borderTop: "2px solid black " }}></div>
        <div className="middleContentParticipant">
            <div className="row">
                <div className="col-md-4">
                <div id="drag_upload_file">
        <p>Drop file here</p>
        <p>or</p>
        <p><input type="button" value="Select File" onclick="file_explorer();" /></p>
        <input type="file" id="selectfile" />
    </div>
                </div>
            </div>
        </div>

        <div className='text-center my-2'>
            <button className="btn btn-warning px-5 py-2">Upload</button>
        </div>
      </div>
    </div>
  );
};

export default Participant;
