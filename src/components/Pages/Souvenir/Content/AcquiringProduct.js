import React from 'react';
import RightSideSouvenir from '../Content/RightSideSouvenir/RightSideSouvenir';
import AppyImg from '../../../../../src/images/starProfile/apply.png'

function AcquiringProduct() {
  return <div className='container'>
<div className="row my-2">
    <div className="col-md-7">
        <h2 className="text-light">
            CR7 Signiture Football
        </h2>
        <p className='text-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum voluptate reiciendis soluta, nam nemo aperiam. Aliquam corrupti, perferendis sunt, itaque soluta accusamus, ipsa quidem quos voluptas rem quo eveniet amet?</p>

        <div className="notify-img">
            <img src={AppyImg} alt="this is Apply msg" className='img-fluid w-100' />
            <div className="content-info bg-dark py-1">
                <h4 className="text-light text-center">
                    Applied for
                </h4>
                <h3 className='text-light text-center'>Acquiring Product</h3>
            </div>
        </div>
        <button className="btn btn-warning px-5 py-2 my-2">
        <i class="fas fa-bell"></i> Result
        </button>
    </div>
    <div className="col-md-5 ">
        <RightSideSouvenir />
    </div>
</div>

  </div>;
}

export default AcquiringProduct;
