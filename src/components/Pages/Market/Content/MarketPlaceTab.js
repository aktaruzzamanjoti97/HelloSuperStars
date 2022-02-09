import React from 'react'
import CardImg from '../../../../images/FootbalImage.jpg'
import CardIBg from '../../../../images/Souvenir/fundo-floral-preto-png-2.png'
import Pro from '../../../../images/account.jpg'

const MarketPlaceTab = () => {
return (
<>
    <div className="card m-3 AuctionsA border-warning">
        <div className="d-flex">
            <div className="col-md-6">
                <img src={CardImg} alt="" className='img-fluid AuctionsImg ' />
            </div>
            <div className="col-md-6 containerAuc ">

                <img src={CardIBg} alt="" className='img-fluid AuctionsImg AuctionsImgBl ' />

                {/* <div className='AucBack'></div> */}

                <h5 className='JerseyAucHe text-light fw-bold'>Bangladeshi jersey</h5>
                <p className='text-light JerseyAucHeP'>The product was designed for 2022
                    Bangladesh VS India series.</p>

                <span className="text-center JerseyAucDol">
                    <small className="text-light "> $ </small> &nbsp;
                    <span className='DollarPrice fw-bold'>20.99</span>
                </span>

                <div className="d-flex JerseyAucPro w-75">

                    <img src={Pro} className="AuctionProImg img-fluid" alt="star-profile" />
                    <span className="mx-2 mt-1 SpanAu">

                        <small className="proTextSm fw-bold">
                            Owner
                        </small>
                        <div className="proTextAc">
                            User Name
                        </div>
                    </span>

                </div>

                <button className='btn bg-warning fw-bold w-75 JerseyAucBuy'> Buy Now</button>

            </div>
        </div>
    </div>
</>
)
}

export default MarketPlaceTab