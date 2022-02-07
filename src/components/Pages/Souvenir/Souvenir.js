import React from 'react'
import Navigation from '../../Header/Navigation';
import RightSideSouvenir from './Content/RightSideSouvenir/RightSideSouvenir';
import souvenirImage from '../../../images/SouvenirJoti.png';
import CR7Souvenir from './Content/CR7Souvenir';

const Souvenir = () => {
return (
<>
  <Navigation />

  <div className="container mt-3">

    <img src={souvenirImage} className="img-fluid w-100 CR7Cover" alt="" />

    <div className="row justify-content-between">

      <CR7Souvenir />

      <div className="col-md-4">
        <RightSideSouvenir />
      </div>

    </div>

  </div>

</>
)
}

export default Souvenir