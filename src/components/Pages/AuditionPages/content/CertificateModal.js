import React from "react";
import { Modal } from "react-bootstrap";
import Pdf from "react-to-pdf";
import certificateImg from "../../../../images/Audition-images/CertificatePhoto.png";
import "./CertificateModal.css";

const ref = React.createRef();

const CertificateModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="my-modal"
    >
      <Modal.Body>
        <div onClick={props.onHide} className="d-flex justify-content-end">
          <div className="closeNotificationDrop text-center">X</div>
        </div>
        <div ref={ref} className="my-3">
            {/* <h1>Ghdisf</h1> */}
          <img className="img-fluid" src={certificateImg} alt="" />
        </div>
        {/* <div className="text-center my-3"> */}
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => (
              <button
                // className="downLoadCertificate p-3 rounded-3"
                onClick={toPdf}
              >
                Download
              </button>
            )}
          </Pdf>
        {/* </div> */}
      </Modal.Body>
    </Modal>
  );
};

export default CertificateModal;
