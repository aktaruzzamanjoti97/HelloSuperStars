import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React from 'react';
import { Modal } from 'react-bootstrap';
import helloSuperStarLogo from '../../../../../images/HelloSuperStarLogo.png';
import meetUpEvent1 from '../../../../../images/MeetUpevent(1).png';
import meetUpEvent2 from '../../../../../images/MeetUpevent(2).png';
import meetUpEventImg from '../../../../../images/MeetUpEvent.png';
import './ParticipateReceipt.css';

const ref = React.createRef();


const ParticipateReceipt = (props) => {

    let docToPrint = React.createRef();

    const printDocument = () => {
      const input = docToPrint.current;
      html2canvas(input).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "landscape",
          unit: "px",
          format: [570, 210],
          textAlign: "center",
        });
        pdf.addImage(imgData, "JPEG", 0, 0);
        // pdf.output("dataurlnewwindow");
        pdf.save("Up4-receipt.pdf");
      });
    };
  

    return (
        <>
            <Modal
                {...props}
                size="lg"
                className="bigModal"
                dialogClassName="my-modal"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Body ref={docToPrint} className="bg-warning modalBody m-5">
                    <div className="row">
                        <div className="col-md-4 backImage" style={{ backgroundImage: `url(${meetUpEventImg})` }}>

                        </div>

                        <div className="col-md-4 p-0 m-0 middleCardBackground">
                            <div className="text-center mt-5">
                                <img className="img-fluid superstarLogoImg" src={helloSuperStarLogo} alt="" />
                            </div>
                            <div className='focusText'>
                                <div className="text-white text-center p-3">
                                    <h3 className="fw-bolder">Meet SAK 75 <span>at</span></h3>
                                    <p><big>Pan Pacific Sonargaon</big></p>
                                </div>
                            </div>
                            <div className="mt-3">
                                <div className="text-center">
                                    <h2 className="dateText fw-bolder"><span className="mx-2">05</span>|<span className="mx-2">12</span>|<span className="mx-2">21</span></h2>
                                    <p className="text-white"><small>Pan Pacific Sonargaon</small> <br />
                                        <small className="text-white">Banani, Dhaka - Bangladesh</small></p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4  bg-light  position-relative">
                            <div className="text-center">
                                <img src={meetUpEvent1} alt="" />
                            </div>
                            <div className="m-3">
                                <div className="my-2">
                                    <small>Name</small>
                                    <h5 className="fw-bolder">Aktaruzzaman</h5>
                                </div>
                                <div className="my-2">
                                    <small>Adress</small>
                                    <h5 className="fw-bolder">Uttara, Dhaka - 1230</h5>
                                </div>
                                <div className="my-2">
                                    <small>Event host </small>
                                    <h5 className="fw-bolder">Shakib Al Hasan</h5>
                                </div>
                                <div className="my-2">
                                    <small>Time</small>
                                    <h5 className="fw-bolder">10.00 PM - 11.00 PM</h5>
                                </div>
                            </div>
                            <div className="text-center mt-2">
                                <img src={meetUpEvent2} alt="" />
                            </div>
                            {/* <div className="position-absolute top-50 start-50 translate-middle">
                                <img className="img-fluid" src={whiteCircleBox} alt="" />
                            </div> */}
                        </div>
                    </div>
                </Modal.Body>

                <div className="text-center mb-5">
                     <button onClick={printDocument} className="btn btn-warning btnSty w-25 py-3">Download</button>

                </div>
                {/* <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
};

export default ParticipateReceipt;