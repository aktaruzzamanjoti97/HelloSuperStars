import React ,{useEffect,useState} from "react";
import './Activitse.css'
import PurchaseImg from '../../../../../images/Capture.JPG';

import PurchaseModal from "./PurchaseModal";
import axios from "axios";
import moment from 'moment';
import { Modal, Button} from 'react-bootstrap';
import { Public } from "@material-ui/icons";
import { ConstructionOutlined } from "@mui/icons-material";

const Purchase = (props) => {

const [modalShow, setModalShow] = React.useState(false);
const [activities, setActivities] = useState([]);
const [singleActivityData,setSingleActivityData]=React.useState({})
// const [description,setDescription]=useState()
// const [superstarFirstname,setSuperstarFirstName]=useState()
// const [superstarLastname,setSuperstarLastName]=useState()

// product.marketplace.superstar.first_name

// console.log('Single superstarname : ', superstarFirstname);
// console.log('Single Activity : ', singleActivityData.marketplace.superstar.first_name);

useEffect(() => {

    axios.get(`api/user/marketplace/activities`).then(res =>{
        //   console.log(res.data.category);
        if(res.status === 200)
        {
            setActivities(res.data.data)
            // console.log("country ", res.data.data);
            // setNewCountry(res.data.data);
        }
    });
        
}, []);

const openModal = (data) => {
   
    setModalShow(true)
        
}
const modalData=(activity)=>{
    setSingleActivityData(activity);
    // setDescription(activity.marketplace.description);
    // setSuperstarFirstName(activity.marketplace.superstar.first_name)
    // setSuperstarLastName(activity.marketplace.superstar.last_name)
    // console.log('Our activity ',activity)

}
return (
<>
    <div className="row mt-3">

        {/* {activities.} */}
        {activities.map((activity, i) => (
            <div className="col-md-4 mb-4">
                <div className="card container-x-ac">

                    <img src={`http://localhost:8000/${activity.marketplace.image}`} className="Active-Img-X"
                        alt="profilePicture" />
                        
                    
                    <div class="bottom-left-x-ax PurchaseBg">
                        <div className="d-flex p-1 fw-bold">
                            <div className="mx-4">
                                <span className="Pic_Ic_B">{activity.marketplace.title}</span><br />
                                
                                <span className="Pic_Ic_BX">{moment(activity.created_at).format('LL')}</span>
                                &nbsp; &nbsp;<span className="Pic_Ic_BX">{moment(activity.created_at).format('LT')}</span>
                                &nbsp; &nbsp;<span className="Pic_Ic_BX text-success">{(activity.status === '2') ? 'Paid' : 'Unpaid'}</span>
                            </div>
                        </div>
                    </div>
                    <div class="bottom-right-x-ax ">
                        <div className="d-flex p-1">
                            <div className="btn-x-r-ac">

                                <button className="btn-x-r-ac" onClick={()=> {
                              console.log("acitivites are"+activity)
                                    // openModal(activity) 
                                    setModalShow(true)
               modalData(activity);

                                } }>
                                    <i className="fas fa-arrow-alt-circle-right"></i>
                                </button>

                              
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        ))}
  <PurchaseModal show={modalShow} onHide={()=> setModalShow(false)}  activity={singleActivityData} />
    </div>

</>
);
};

export default Purchase;