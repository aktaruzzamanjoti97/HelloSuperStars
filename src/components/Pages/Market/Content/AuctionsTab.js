import React from 'react'

const AuctionsTab = ({user}) => {
  return (
    <>
      <div className="card m-3 AuctionsA ">
        <div className=" row TabMar">
            <div className="col-md-6">
                <img src={user.jersey} alt="" className='img-fluid AuctionsImg ' />
            </div>
            <div className="col-md-6 containerAuc ">

                <img src={user.back} alt="" className='img-fluid AuctionsImg AuctionsImgBl ' />

                <h5 className='JerseyAucHe text-light fw-bold'>{user.title} Bangladeshi jersey </h5>
                <p className='text-light JerseyAucHeP'>{user.desc} </p>

                <span className="text-center JerseyAucDol">
                    <small className="text-light "> $ </small> &nbsp;
                    <span className='DollarPrice fw-bold'>{user.price}</span>
                </span>

                <div className="d-flex JerseyAucPro w-75">

                    <img src={user.pro} className="AuctionProImg img-fluid" alt="star-profile" />
                    <span className="mx-2 mt-1 SpanAu">

                        <small className="proTextSm fw-bold">
                            {user.type}
                        </small>
                        <div className="proTextAc">
                            {user.name}
                        </div>
                    </span>
                    <span className='BestPrice  '> Best Price</span>

                </div>

                <button className='btn bg-warning fw-bold w-75 JerseyAucBuy'> Participate</button>

            </div>
        </div>
    </div>
    </>
  )
}

export default AuctionsTab
