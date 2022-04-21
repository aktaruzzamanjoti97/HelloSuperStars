import React from 'react';
import blackBox from '../../../../images/Profile/blackbox.jpeg'
const LeftCard = (props) => {

    // console.log('props data',props.photos);
return (
<>
    <div className="container left-col-box py-4">
        <h6 className='profile-font-color'>{props.title}</h6>
        <div className="row">
        {props?.photos?.map((data)=>(
            <>
           
            <div className="col-4">
            {data.type == "learningSession" ?  <img src={`http://localhost:8000/${data?.learning_session?.banner}`} alt="" className='img-fluid profile-photos' /> : data.type == "meetup" ? <img src={`http://localhost:8000/${data?.meetup?.banner}`} alt="" className='img-fluid profile-photos' />  :null}
               
            </div>
            
            </>
        ))}
            <div className="col-4">
                <img src={blackBox} alt="" className='img-fluid profile-photos' />
            </div>
            <div className="col-4">
                <img src={blackBox} alt="" className='img-fluid profile-photos' />
            </div>
            <div className="col-4">
                <img src={blackBox} alt="" className='img-fluid profile-photos' />
            </div>
            <div className="col-4">
                <img src={blackBox} alt="" className='img-fluid profile-photos' />
            </div>
            <div className="col-4">
                <img src={blackBox} alt="" className='img-fluid profile-photos' />
            </div>

        </div>

        <div className="see-all-text  ">
            <a href="/" className='text-decoration-none profile-font-color'>See all</a>
        </div>

    </div>
</>
);
};

export default LeftCard;