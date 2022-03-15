import React from "react";
import { Modal } from "react-bootstrap";
import Group from '../../../../../../images/Group 485.png'
import helloSuperStar from '../../../../../../images/helloSuperStar.png'

const ConfirmModalSh = (props) => {
    
return (
<>
    <div className="AzcV">
        <Modal {...props} size="ms" aria-labelledby="contained-modal-title-vcenter "  centered >
           
            
            <div className="justify-content-center py-4 ConMBOdy">
            <img src={Group} alt="" className="ModalIcon" onClick={props.onHide}/>

               <center>
                   <img src={helloSuperStar} width='130px text-center mt-3' alt="" />
                   <h5 className="fw-bold text-light mt-2">Are you sure to join Shah Rukh Khan group</h5>
                   <span className="XCsText">Be careful, once you select someone, you can't go back</span>
                </center>
               


                <div className="d-flex mt-2 justify-content-center">
                    <button className="btn mx-2 w-25 PostTextMs border-warning">Go Back</button>
                    <button className="btn mx-2 w-25 PostTextMs1 fw-bold" >Join Now</button>
                </div>
                
            </div>

        </Modal>
    </div>
</>
)
};
export default ConfirmModalSh
