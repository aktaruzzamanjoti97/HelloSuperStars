import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import './CR7Souvenir.css'
import UserPro from '../../../../images/Shakib/pro.jpg'
import BGImg from '../../../../images/Souvenir/fundo-floral-preto-png-2.png'
import Bid from '../../../../images/Souvenir/Icons/bid.png'
import Confirm from '../../../../images/Souvenir/Icons/auction.png'
import CR7Modal from './CR7Modal'
import { Markup } from 'interweave'

const CR7Souvenir = ({data}) => {
const [modalShow, setModalShow] = React.useState(false);
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

        <div className="containerSa col-md-4 mb-3">
          <div className="carousel w-100 ">
            <img src={BGImg} className="Cr7img" alt={BGImg} />
            <img src={UserPro} alt={UserPro} className="Cr7Pro " />
            <div className="Cr7View"></div>
            <h1 className="btn Cr7s py-1 text-warning fw-bold">$180.00</h1>
            <h5 className="btn Cr7ss py-1 text-light ">Asad Ali</h5>
          </div>
        </div>

        <div className="containerSa col-md-4 mb-3">
          <div className="carousel w-100 ">
            <img src={BGImg} className="Cr7img" alt={BGImg} />
            <img src={UserPro} alt={UserPro} className="Cr7Pro" />
            <div className="Cr7View"></div>
            <h1 className="btn Cr7s py-1 text-warning fw-bold">$180.00</h1>
            <h5 className="btn Cr7ss py-1 text-light ">Asad Ali</h5>
          </div>
        </div>

        <div className="containerSa col-md-4 mb-3">
          <div className="carousel w-100 ">
            <img src={BGImg} className="Cr7img" alt={BGImg} />
            <img src={UserPro} alt={UserPro} className="Cr7Pro" />
            <div className="Cr7View"></div>
            <h1 className="btn Cr7s py-1 text-warning fw-bold">$180.00</h1>
            <h5 className="btn Cr7ss py-1 text-light ">Asad Ali</h5>
          </div>
        </div>

        <div className="containerSa col-md-4 mb-3">
          <div className="carousel w-100 ">
            <img src={BGImg} className="Cr7img" alt={BGImg} />
            <img src={UserPro} alt={UserPro} className="Cr7Pro" />
            <div className="Cr7View"></div>
            <h1 className="btn Cr7s py-1 text-warning fw-bold">$180.00</h1>
            <h5 className="btn Cr7ss py-1 text-light ">Asad Ali</h5>
          </div>
        </div>

        <div className="containerSa col-md-4 mb-3">
          <div className="carousel w-100 ">
            <img src={BGImg} className="Cr7img" alt={BGImg} />
            <img src={UserPro} alt={UserPro} className="Cr7Pro" />
            <div className="Cr7View"></div>
            <h1 className="btn Cr7s py-1 text-warning fw-bold">$180.00</h1>
            <h5 className="btn Cr7ss py-1 text-light ">Asad Ali</h5>
          </div>
        </div>

        <div className="containerSa col-md-4 mb-3">
          <div className="carousel w-100 ">
            <img src={BGImg} className="Cr7img" alt={BGImg} />
            <img src={UserPro} alt={UserPro} className="Cr7Pro" />
            <div className="Cr7View"></div>
            <h1 className="btn Cr7s py-1 text-warning fw-bold">$180.00</h1>
            <h5 className="btn Cr7ss py-1 text-light ">Asad Ali</h5>
          </div>
        </div>

        <div className="containerSa col-md-4 mb-3">
          <div className="carousel w-100 ">
            <img src={BGImg} className="Cr7img" alt={BGImg} />
            <img src={UserPro} alt={UserPro} className="Cr7Pro" />
            <div className="Cr7View"></div>
            <h1 className="btn Cr7s py-1 text-warning fw-bold">$180.00</h1>
            <h5 className="btn Cr7ss py-1 text-light ">Asad Ali</h5>
          </div>
        </div>

        <div className="containerSa col-md-4 mb-3">
          <div className="carousel w-100 ">
            <img src={BGImg} className="Cr7img" alt={BGImg} />
            <img src={UserPro} alt={UserPro} className="Cr7Pro" />
            <div className="Cr7View"></div>
            <h1 className="btn Cr7s py-1 text-warning fw-bold">$180.00</h1>
            <h5 className="btn Cr7ss py-1 text-light ">Asad Ali</h5>
          </div>
        </div>

        <div className="containerSa col-md-4 mb-3">
          <div className="carousel w-100 ">
            <img src={BGImg} className="Cr7img" alt={BGImg} />
            <img src={UserPro} alt={UserPro} className="Cr7Pro" />
            <div className="Cr7View"></div>
            <h1 className="btn Cr7s py-1 text-warning fw-bold">$180.00</h1>
            <h5 className="btn Cr7ss py-1 text-light ">Asad Ali</h5>
          </div>
        </div>

        <div className="containerSa col-md-4 mb-3">
          <div className="carousel w-100 ">
            <img src={BGImg} className="Cr7img" alt={BGImg} />
            <img src={UserPro} alt={UserPro} className="Cr7Pro" />
            <div className="Cr7View"></div>
            <h1 className="btn Cr7s py-1 text-warning fw-bold">$180.00</h1>
            <h5 className="btn Cr7ss py-1 text-light ">Asad Ali</h5>
          </div>
        </div>

      </div>

    </div>

    <div className="bg-dark mb-3">

      <div className="row mx-3 justify-content-between ">
        <p className='text-light mt-3 fw-bold'>Bid Now</p>

        <div className=" col-md-6 mb-3 ">
          <input type="text" className='p-3 mb-3 w-100 inputBgSA' placeholder='$ Enter amount' />
          <input type="password" className='p-3 mb-3 w-100 inputBgSA' placeholder='Enter Password' />
        </div>

        <div className=" col-md-4 mb-3 ">
          <img src={Bid} alt={Bid} className='img-fluid BibImg' />
        </div>
      </div>

    </div>

    <div className='d-flex justify-content-end'>
      <button className='btn ConfirmS fw-bold px-4 py-2 mb-3'> <img src={Confirm} className='ConfirmCR7'
          alt={Confirm} /> &nbsp;Bid Now</button>

      <button className='btn Acquire fw-bold px-4 py-2 mb-3' onClick={()=> setModalShow(true)}>
        <i class="fas fa-id-card-alt"> </i> &nbsp;Acquire application</button>
      <CR7Modal show={modalShow} onHide={()=> setModalShow(false)} />

    </div>

  </div>

</>
)
}

export default CR7Souvenir