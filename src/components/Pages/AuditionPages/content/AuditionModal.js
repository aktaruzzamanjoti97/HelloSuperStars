import React from "react";
import { Button, Modal } from "react-bootstrap";
import deleteP from "../../../../images/delete 2.png";
import delPS from "../../../../images/Vector.png";
const AuditionModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="m"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="row ModalRSA">
          <center>
            <img src={deleteP} alt="" className="witImg mt-4" />
            <h4 className="text-light fw-bold mt-3 px-3">Your Appeal Request Submitted.!</h4>
            <p className="text-light px-3 mt-3">
              We will notify you as soon as possible how to resubmit your
              content again.
            </p>
            <button className="btn bsxT mb-3 mt-3">Done</button>
            <img src={delPS} alt="" className="imgBTn me-2"onClick={props.onHide} />
          </center>
        </div>
        
      </Modal>
    </>
  );
};

export default AuditionModal;
