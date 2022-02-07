import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import './CR7Souvenir.css'
import Bidding from '../../../../images/Shakib/pro.jpg'
import bAckColo from '../../../../images/bAckColo.jpg'
import Icon from '../../../../images/IconHans-removebg-preview.png'
import CR7Modal from './CR7Modal'

const CR7Souvenir = () => {
const [modalShow, setModalShow] = React.useState(false);
return (
<>

  <div className="container py-3  ">
    <div className="row justify-align-center align-item-center mx-2">

      <div className="col-md-7">
        <div className="ReactCr7 bg-dark p-4 mb-3 ">
          <center>
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' className='CR7Player img-fluid' />
          </center>
        </div>

        <div className="bg-dark mb-3 ">
          <p className='text-light p-3'>Live Bidding</p>

          <div className="row mx-3 CR7Scroll ">

            <div className="containerSa col-md-4 mb-3">
              <div className="carousel w-100 ">
                <img src={bAckColo} className="Cr7img" alt={bAckColo} />
                <img src={Bidding} alt={Bidding} className="Cr7Pro" />
                <div className="Cr7View"></div>
                <h1 className="btn Cr7s py-1 text-warning fw-bold">$180.00</h1>
                <h5 className="btn Cr7ss py-1 text-light ">Asad Ali</h5>
              </div>
            </div>

            <div className="containerSa col-md-4 mb-3">
              <div className="carousel w-100 ">
                <img src={bAckColo} className="Cr7img" alt={bAckColo} />
                <img src={Bidding} alt={Bidding} className="Cr7Pro" />
                <div className="Cr7View"></div>
                <h1 className="btn Cr7s py-1 text-warning fw-bold">$180.00</h1>
                <h5 className="btn Cr7ss py-1 text-light ">Asad Ali</h5>
              </div>
            </div>

            <div className="containerSa col-md-4 mb-3">
              <div className="carousel w-100 ">
                <img src={bAckColo} className="Cr7img" alt={bAckColo} />
                <img src={Bidding} alt={Bidding} className="Cr7Pro" />
                <div className="Cr7View"></div>
                <h1 className="btn Cr7s py-1 text-warning fw-bold">$180.00</h1>
                <h5 className="btn Cr7ss py-1 text-light ">Asad Ali</h5>
              </div>
            </div>

            <div className="containerSa col-md-4 mb-3">
              <div className="carousel w-100 ">
                <img src={bAckColo} className="Cr7img" alt={bAckColo} />
                <img src={Bidding} alt={Bidding} className="Cr7Pro" />
                <div className="Cr7View"></div>
                <h1 className="btn Cr7s py-1 text-warning fw-bold">$180.00</h1>
                <h5 className="btn Cr7ss py-1 text-light ">Asad Ali</h5>
              </div>
            </div>

            <div className="containerSa col-md-4 mb-3">
              <div className="carousel w-100 ">
                <img src={bAckColo} className="Cr7img" alt={bAckColo} />
                <img src={Bidding} alt={Bidding} className="Cr7Pro" />
                <div className="Cr7View"></div>
                <h1 className="btn Cr7s py-1 text-warning fw-bold">$180.00</h1>
                <h5 className="btn Cr7ss py-1 text-light ">Asad Ali</h5>
              </div>
            </div>

            <div className="containerSa col-md-4 mb-3">
              <div className="carousel w-100 ">
                <img src={bAckColo} className="Cr7img" alt={bAckColo} />
                <img src={Bidding} alt={Bidding} className="Cr7Pro" />
                <div className="Cr7View"></div>
                <h1 className="btn Cr7s py-1 text-warning fw-bold">$180.00</h1>
                <h5 className="btn Cr7ss py-1 text-light ">Asad Ali</h5>
              </div>
            </div>

            <div className="containerSa col-md-4 mb-3">
              <div className="carousel w-100 ">
                <img src={bAckColo} className="Cr7img" alt={bAckColo} />
                <img src={Bidding} alt={Bidding} className="Cr7Pro" />
                <div className="Cr7View"></div>
                <h1 className="btn Cr7s py-1 text-warning fw-bold">$180.00</h1>
                <h5 className="btn Cr7ss py-1 text-light ">Asad Ali</h5>
              </div>
            </div>

            <div className="containerSa col-md-4 mb-3">
              <div className="carousel w-100 ">
                <img src={bAckColo} className="Cr7img" alt={bAckColo} />
                <img src={Bidding} alt={Bidding} className="Cr7Pro" />
                <div className="Cr7View"></div>
                <h1 className="btn Cr7s py-1 text-warning fw-bold">$180.00</h1>
                <h5 className="btn Cr7ss py-1 text-light ">Asad Ali</h5>
              </div>
            </div>

            <div className="containerSa col-md-4 mb-3">
              <div className="carousel w-100 ">
                <img src={bAckColo} className="Cr7img" alt={bAckColo} />
                <img src={Bidding} alt={Bidding} className="Cr7Pro" />
                <div className="Cr7View"></div>
                <h1 className="btn Cr7s py-1 text-warning fw-bold">$180.00</h1>
                <h5 className="btn Cr7ss py-1 text-light ">Asad Ali</h5>
              </div>
            </div>

            <div className="containerSa col-md-4 mb-3">
              <div className="carousel w-100 ">
                <img src={bAckColo} className="Cr7img" alt={bAckColo} />
                <img src={Bidding} alt={Bidding} className="Cr7Pro" />
                <div className="Cr7View"></div>
                <h1 className="btn Cr7s py-1 text-warning fw-bold">$180.00</h1>
                <h5 className="btn Cr7ss py-1 text-light ">Asad Ali</h5>
              </div>
            </div>

          </div>

        </div>

        <div className="bg-dark mb-3">
          <p className='text-light p-3'>Bid Now</p>

          <div className="row mx-3 justify-content-between ">

            <div className=" col-md-6 mb-3 ">
              <input type="text" className='p-3 mb-3 w-100 inputBgSA' placeholder='$ Enter amount' />
              <input type="password" className='p-3 mb-3 w-100 inputBgSA' placeholder='Enter Password' />
            </div>

            <div className=" col-md-5 mb-3">
              <img src={Icon} alt="" />
            </div>
          </div>

        </div>

        <button className='btn ConfirmS fw-bold px-4 py-2 mb-3'><i class="fas fa-gavel"></i> &nbsp;Confirm</button>
        <button className='btn Acquire fw-bold px-4 py-2 mb-3' onClick={()=> setModalShow(true)}>
          <i class="fas fa-id-card-alt"> </i> &nbsp;Acquire application</button>
        <CR7Modal show={modalShow} onHide={()=> setModalShow(false)} />

      </div>

    </div>

  </div>

</>
)
}

export default CR7Souvenir