import React from 'react'
import Navigation from '../../Header/Navigation';
import RightSideSouvenir from './Content/RightSideSouvenir/RightSideSouvenir';
import souvenirImage from '../../../images/Souvenir/souvenir.png';
import Winner from '../../../images/Souvenir/fundo-floral-preto-png-2.png';
import CR7user from '../../../images/navbar/account.jpg';
import './Content/CR7Souvenir.css'
import RightSideSouvenirWithoutTime from './Content/RightSideSouvenir/RightSideSouvenirWithoutTime';

const WinnerCR7 = () => {
return (
<>
    <Navigation />

    <div className="container mt-3">

        <img src={souvenirImage} className="img-fluid w-100 CR7Cover" alt="" />

        <div className="row justify-content-between">

            <div className="col-md-7">

                <h3 className="fw-bolder text-white mt-4">CR Signature Football</h3>

                <p className="text-white PText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa similique
                    cum qui ab fugit veniam repellendus officiis, consequuntur esse culpa quibusdam aut tempore,
                    incidunt ea nesciunt soluta itaque voluptas maiores. <span>See more</span>
                </p>

                <div className="mb-3 WinnerBg">

                    <div className="btn WinnerCr fw-bold">
                        Winner
                    </div>

                    <img src={Winner} alt={Winner} className='WinnerImg' />
                    <div className="WinnerBack"></div>
                    <img src={CR7user} alt=""  className='CR7user img-fluid'/>

                    <div className="WinnerName btn text-light fw-bold">Apurbo Roy</div>

                </div>

            </div>

            <div className="col-md-4">
                <RightSideSouvenirWithoutTime />
            </div>

        </div>

    </div>

</>
)
}

export default WinnerCR7