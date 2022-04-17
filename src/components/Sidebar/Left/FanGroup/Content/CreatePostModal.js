import axios from "axios";
import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Group from '../../../../../images/Group 485.png'
import swal from "sweetalert";
import { socketContext } from "../../../../../App";

const CreatePostModal = (props) => {
    const {groupId, fanPost, setFanPost} = props;
    const { slug } = useParams();
    const socketData = useContext(socketContext);
    
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [video, setVideo] = useState("");

    console.log('description ', description)
    console.log('image ', image)
    console.log('video ', video)

    const changeImage = (event) => {
		setImage(event.target.files[0]);
	};

    const changeVideo = (event) => {
		setVideo(event.target.files[0]);
	};

  const createPost = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('video', video)
    formData.append('description', description)
    formData.append('image', image)
    formData.append('slug', slug)

    await axios.post(`/api/user/fan/group/post/store`, formData).then(res =>{
        if (res.data.status === 200) {
            setDescription('');
            swal("Welcome", res.data.message, "success");
            socketData.emit("postFanGroupPost", groupId);
            socketData.on("getFanGroupPost", (data) => {
                axios.get(`/api/user/fan/group/post/show/${slug}`).then((res) => {
                    console.log("fan Group", res.data);
                    if (res.status === 200) {
                        setFanPost(res.data.fanPost);
                    }
                });
            });
        }
    });


  }
    
return (
<>
    <div className="">
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
            <h4 closeButton className="fw-bold text-light p-2 ModalPostC">Create a post</h4>
            <img src={Group} alt="" className="ModalIcon" onClick={props.onHide}/>
            <Modal.Body>

                <form onSubmit={createPost}>


                    <textarea rows="8" cols="" className="w-100 PostTextM p-2"  onChange={(event)=>{
                                setDescription(event.target.value) }}></textarea>

                    <div className="d-flex mt-2">
                        <input type='file' onChange={changeImage} className="btn mx-2 w-100 PostTextM"/>
                        <input type='file' onChange={changeVideo} className="btn mx-2 w-100 PostTextM"/>
                        <button className="btn mx-2 w-100 PostTextM"><i class="fa-solid fa-user-tag"></i> Add tag</button>
                    </div>
                    {/* 
                    <div className="d-flex mt-2">
                        <button type='file' className="btn mx-2 w-100 PostTextM"><i class="fa-solid fa-image"></i> Add photo</button>
                        <button className="btn mx-2 w-100 PostTextM"><i class="fa-solid fa-photo-film"></i> Add video</button>
                        <button className="btn mx-2 w-100 PostTextM"><i class="fa-solid fa-user-tag"></i> Add tag</button>
                    </div> */}

                    <button className="btn fw-bold w-100 bg-info PostNow mt-3 mb-3" type='submit'>POST NOW</button>
                </form>
            </Modal.Body>
        </Modal>
    </div>
</>
)
};

export default CreatePostModal;