import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import './CR7Souvenir.css'
import UserPro from '../../../../images/Shakib/pro.jpg'
import BGImg from '../../../../images/Souvenir/fundo-floral-preto-png-2.png'
import Bid from '../../../../images/Souvenir/Icons/bid.png'
import Confirm from '../../../../images/Souvenir/Icons/auction.png'
import CR7Modal from './CR7Modal'
import { Markup } from 'interweave'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const CR7Souvenir = ({data}) => {

  const history = useHistory();

const [modalShow, setModalShow] = React.useState(false);

const [liveBidding,setLiveBidding] = useState();


useEffect(()=>{
  axios.get(`/api/user/liveBidding/auction/${data.id}`).then((res)=>{
    if(res.data.status === 200 ){
      console.log("data from live bidding",res.data.bidding)
      setLiveBidding(res.data.bidding);
    }
  })
},[])

const [auctionInput, setAuctionInput] = useState({
  auction_id: data.id,
  amount: '',
  password: '',
});
const handleInput = (e) => {

  const {name,value}=e.target;
  setAuctionInput((prev)=>{
      return({...prev,[name]:value});
  })
}

const auctionSubmit = (e) => {
  e.preventDefault();
  const data = {

    auction_id: auctionInput.auction_id,
    amount: auctionInput.amount,
    password: auctionInput.password,
  }
  console.log(auctionInput.auction_id,)


  axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post(`/api/user/bidding/auction/product`, data).then(res => {
          if(res.data.status === 200)
          {
             console.log("bidding Done");
          }
          
      });
  });
}

return (
<>

  <div className="col-md-7">

    <h3 className="fw-bolder text-white mt-4">{data.name}</h3>

    <p className="text-white PText"><Markup content={data.details}/> <span>See
        more</span></p>
    <div className="ReactCr7 bg-dark p-4 mb-3 ">
      <center>
      <img src={`http://localhost:8000/${data.product_image}`} className="img-fluid w-100 CR7Cover coverHeight " alt="" />
      </center>
    </div>

    <div className="bg-dark mb-3 ">

      <div className="row mx-3 CR7Scroll ">
        <p className='text-light mt-3 fw-bold'>Live Bidding</p>

{liveBidding?.map((bid)=>(
  <>
  <div className="containerSa col-md-4 mb-3">
          <div className="carousel w-100 ">
            <img src={BGImg} className="Cr7img" alt={BGImg} />
            <img src={`http://localhost:8000/${bid.user[0].image}`} alt={UserPro} className="Cr7Pro " />
            <div className="Cr7View"></div>
            <h1 className="btn Cr7s py-1 text-warning fw-bold">{bid.amount}</h1>
            <h5 className="btn Cr7ss py-1 text-light ">{bid.user[0].first_name} {bid.user[0].last_name}</h5>
          </div>
        </div>
  </>
  
))}
        

      </div>

    </div>
<form onSubmit={auctionSubmit}>
      <div className="bg-dark mb-3">

      <div className="row mx-3 justify-content-between ">
        <p className='text-light mt-3 fw-bold'>Bid Now</p>

        <div className=" col-md-6 mb-3 ">
          <input type="text" onChange={handleInput} value={auctionInput.amount} name="amount" className='p-3 mb-3 w-100 inputBgSA' placeholder='$ Enter amount'/>
          <input type="password" onChange={handleInput} value={auctionInput.password} name="password" className='p-3 mb-3 w-100 inputBgSA' placeholder='Enter Password' />
        </div>

        <div className=" col-md-4 mb-3 ">
          <img src={Bid} alt={Bid} className='img-fluid BibImg' />
        </div>
      </div>

    </div>

    <div className='d-flex justify-content-end'>
      <button type='submit'className='btn ConfirmS fw-bold px-4 py-2 mb-3'> <img src={Confirm} className='ConfirmCR7'
          alt={Confirm} /> &nbsp;Bid Now</button>

      <button className='btn Acquire fw-bold px-4 py-2 mb-3' onClick={()=> setModalShow(true)}>
        <i class="fas fa-id-card-alt"> </i> &nbsp;Acquire application</button>
        
      <CR7Modal show={modalShow} onHide={()=> setModalShow(false)} />

    </div>
</form>


  </div>

</>
)
}

export default CR7Souvenir