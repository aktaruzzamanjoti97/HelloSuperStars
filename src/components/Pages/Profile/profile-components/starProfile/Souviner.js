import React, { useEffect, useState } from "react";
import StarProfileRightContent from "./StarCardComponent/StarProfileRightContent/StarProfileRightContent";
import profilePhoto from "../../../../../images/Shakib/13.jpg";
import Jainamaz from "../../../../../images/LiveChat/balhasan.jpg";
import "../../../../CSS/Profile/Souviner/Souviner.css";
import smileImg from "../../../../../images/LiveChat/smileImg.jpg";
import { Carousel } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import SouvinerModal from "./StarChat/SouvinerModal";
import Icon from '../.../../../../../../images/Souvenir/Icons/auction.png'
import axios from "axios";
import moment from "moment";
import { Markup } from "interweave";
import ReactImageMagnify from 'react-image-magnify';

function Souviner({star_id}) {
  
const [more, setmore] = useState(false);
const [modalShow, setModalShow] = React.useState(false);
const [product,setProduct] = useState([]);
const [modalData,setModalData] = useState('');

useEffect(()=>{
  axios.get(`/api/user/getStarAuction/${star_id}`).then((res)=>{
      if(res.data.status === 200){
          setProduct(res.data.product);
          console.log("From test data",res.data.product)
      }
  })
},[])

// useEffect(()=>{
//   axios.get(`/api/user/liveBidding/auction/${product.id}`).then((res)=>{
//       if(res.data.status === 200){
//           //setProduct(res.data.bidding);
//           console.log("From test bidding",res.data.bidding)
//       }
//   })
// },[])

const openModal = (data) => {
  setModalShow(true)
  setModalData(data)
}

return (

  <div className="container">
  <div className="row">


    <div className="col-md-8 mt-3">

      

      {product.map((product) => (

        <span>

          {console.log('bidding person',product.bidding)}

          <div className="card left-col-box PostCard mb-3 mt-3 left-card-souviner mx-auto">
            <div className="accordion-item PostBack d-flex justify-content-between">
              <h2 className="accordion-header PostBack">
                <div className="accordion-button-fx profile1-accordion-button PostBack  collapsed">
                  <img src={profilePhoto} className="PostImgHome" alt="..." />
                  <span className="mx-2 text-warning text-light">
                    {product.star.first_name}{product.star.last_name}
                    <br></br>
                    <small className="category-size-chat ">
                      <span className="Post-small-text">{moment(product.created_at).format('LT')}</span>
                    </small>
                    <small className="category-size-chat ">
                      <span className="Post-small-text-r">{moment(product.created_at).format('LL')}</span>
                    </small>
                  </span>
                </div>
              </h2>
              <div className="">
                <button className="btn btn-sm btn-danger mx-2 px-3">Live</button>
              </div>
            </div>
  
            <div className="card-body ">
              <div  className="text-center " >

              <ReactImageMagnify {...{
    smallImage: {
        alt: 'Image Not Found',
        isFluidWidth: true,
        src: `http://localhost:8000/${product.product_image}`
    },
    largeImage: {
        src: `http://localhost:8000/${product.product_image}`,
        width: 1800,
        height: 1800,
    }
}} />
              </div>
              <h4 className="mt-3 mx-1 text-light">{product.title}</h4>
              <h6 className="mt-3 mx-1  text-light">Live</h6>
              <p className="text-warning">{moment(product.bid_from).format('LL')} to {moment(product.bid_to).format('LL')}</p>
  
              <h6 className="mt-3 mx-1  text-light">Details</h6>
              <div className="souviner-details">
                <p className="text-light">
       
                  <Markup content={`${product.details.substring(0, 100)}`} />
                  <span className="seemore text-warning" onClick={()=> {
                    setmore(!more);
                    }}
                    >
                    see more
                  </span>
                </p>
  
                {more ? (
                <p className="text-light">
                 <Markup content={product.details}/>
                </p>
                ) : (
                ""
                )}
              </div>
            </div>
          </div>
  
          <div className="card my-4 left-card-souviner mx-auto">
            <div className="card-body">
              <h5 className="card-title text-warning">Biding</h5>
              <OwlCarousel className="owl-theme" loop margin={0} items={4} nav>


              {product.bidding.map((bid) => (
              

                <div className="item">
                <div className="card loopCard h-25">
                  <div className="text-center">
                    <img src={`http://localhost:8000/${bid.user[0].image}`}className="img-fluid rounded-circle" height="50px" width="50px" alt="" />
                  </div>
                  <div className="card-body text-center">
                    <h6 className="card-title simleName">{bid.name}</h6>
                    <p className="card-text">{bid.amount}</p>
                  </div>
                </div>
                </div>

              ))}
                
              </OwlCarousel>
  
            </div>

            


            <div className="participate-btn my-2 mx-3 d-flex justify-content-end">
              {/* <button className="btn btn-warning px-5 py-2 fw-bold" onClick={()=> setModalShow(true)}>
                <img src={Icon} alt="" className="mx-2 " height={18} /> Participate
              </button> */}
              <button className="btn btn-warning px-5 py-2 fw-bold" onClick={()=> openModal(product.id)}>
                <img src={Icon} alt="" className="mx-2 " height={18} /> Participate
              </button>
            </div>
  
          </div>

          



        </span>
      ))}


    </div>

    <SouvinerModal show={modalShow} onHide={()=> setModalShow(false)} data={modalData} />

    <div className="col-md-4" style={{zIndex:'-1'}}>
      <StarProfileRightContent star_id={star_id} />
    </div>



  </div>
</div>



);
}

export default Souviner;