import React from 'react';
import RightSideSouvenir from '../Content/RightSideSouvenir/RightSideSouvenir';
import souvenirImage from '../../../../images/Souvenir/souvenir.png';
import ApplyImg from '../../../../images/Souvenir/Illustration/Gift.svg'
import Navigation from '../../../Header/Navigation';
import './CR7Souvenir.css'
import { Link } from 'react-router-dom';
import RightSideSouvenirWithoutTime from './RightSideSouvenir/RightSideSouvenirWithoutTime';
function AcquiringProduct() {
return(
    <>
        <Navigation/>

        <div className='container mt-3'>

            <img src={souvenirImage} className="img-fluid w-100 CR7Cover" alt="" />

            <div className="row justify-content-between">

                <div className="col-md-7">
                    <h3 className="fw-bolder text-white mt-4">CR Signature Football</h3>

                    <p className="text-white PText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa similique
                        cum qui ab fugit veniam repellendus officiis, consequuntur esse culpa quibusdam aut tempore,
                        incidunt ea nesciunt soluta itaque voluptas maiores. <span>See more</span>
                    </p>

                    <div className="notify-img bg-dark text-center">
                        <img src={ApplyImg} alt="this is Apply msg" className='img-fluid ApplyImg p-5' />
                        <div className="content-info  py-1">
                            <h4 className="text-light text-center">
                                Applied for
                            </h4>
                            <h3 className='text-light text-center'>Acquiring Product</h3>
                        </div>
                    </div>

                    <Link to='souvenir-winner'><button className="btn btn-warning px-5 py-2 my-2">
                        <i class="fas fa-bell"></i> Result
                    </button></Link>

                </div>

                <div className="col-md-4 ">
                    <RightSideSouvenirWithoutTime />
                </div>

            </div>
        </div>
    </>
)
}

export default AcquiringProduct;