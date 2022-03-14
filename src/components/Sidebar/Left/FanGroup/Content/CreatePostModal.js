import React from "react";
import { Button, Modal } from "react-bootstrap";

const CreatePostModal = (props) => {
return (
<>
    <div className="">
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
            <h4 closeButton className="fw-bold text-light p-2 ModalPostC">Create a post</h4>
            <Modal.Body>

                <textarea rows="8" cols="" className="w-100 PostTextM p-2">Type here to post something...</textarea>

                <div className="d-flex mt-2">
                    <button className="btn mx-2 w-100 PostTextM"><i class="fa-solid fa-image"></i> Add photo</button>
                    <button className="btn mx-2 w-100 PostTextM"><i class="fa-solid fa-photo-film"></i> Add video</button>
                    <button className="btn mx-2 w-100 PostTextM"><i class="fa-solid fa-user-tag"></i> Add tag</button>
                </div>

                <button className="btn fw-bold w-100 bg-info PostNow mt-3 mb-3">POST NOW</button>
            </Modal.Body>

        </Modal>
    </div>
</>
)
};

export default CreatePostModal;