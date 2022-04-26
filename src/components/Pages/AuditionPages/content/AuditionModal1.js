import React from "react";
import { Button, Modal } from "react-bootstrap";
import deleteP from "../../../../images/delete 2.png";
import delPS from "../../../../images/Vector.png";
const AuditionModal1 = (props) => {
return (
<>
    <Modal {...props} size="m" aria-labelledby="contained-modal-title-vcenter" centered>
        <div className="container">
            <div className="row ModalRSA my-4 mx-1 mt-5">

                <div className="col-md-3 text-light my-3">Audition Title</div>
                <div className="col-md-9 card txpw text-light  my-3"><input className="iPc" type="text" /></div>
                <div className="col-md-3 text-light my-3">Your Name</div>
                <div className="col-md-9 card txpw text-light  my-3"><input className="iPc" type="text" /></div>

                <div className="col-md-3 text-light my-3">Position</div>
                <div className="col-md-3 card txpw text-light  my-3"><input className="iPc" type="text" /></div>
                <div className="col-md-3 text-light my-3">Round</div>
                <div className="col-md-3 card txpw text-light  my-3"><input className="iPc" type="text" /></div>
                <center><button className="btn btnvs mt-3 my-2 px-5 fw-bold">Apply</button></center>

                <img src={delPS} alt="" className="imgsa me-2" onClick={props.onHide} />
            </div>
        </div>

    </Modal>
</>
);
};

export default AuditionModal1