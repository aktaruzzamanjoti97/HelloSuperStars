import React ,{useEffect,useState} from "react";
import './Activitse.css'
import PurchaseImg from '../../../../../images/Capture.JPG';

import PurchaseModal from "./PurchaseModal";

const Purchase = (props) => {

const [modalShow, setModalShow] = React.useState(false);



return (
<>
    <div className="row mt-3">


        <div className="col-md-4 mb-4">
            <div className="card container-x-ac">

                <img src={PurchaseImg} className="Active-Img-X"
                    alt="profilePicture" />
                    
                
                <div class="bottom-left-x-ax PurchaseBg">
                    <div className="d-flex p-1 fw-bold">
                        <div className="mx-4">
                            <span className="Pic_Ic_B">Signature Football</span><br />
                            <span className="Pic_Ic_BX">20 January 2022</span>
                            &nbsp; &nbsp;<span className="Pic_Ic_BX">11 : 00 PM</span>
                            &nbsp; &nbsp;<span className="Pic_Ic_BX text-success">Paid</span>
                        </div>
                    </div>
                </div>
                <div class="bottom-right-x-ax ">
                    <div className="d-flex p-1">
                        <div className="btn-x-r-ac">
                            <button className="btn-x-r-ac" onClick={()=> setModalShow(true)}>
                                <i className="fas fa-arrow-alt-circle-right "></i></button>
                            <PurchaseModal show={modalShow} onHide={()=> setModalShow(false)} />
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
        

    </div>

</>
);
};

export default Purchase;