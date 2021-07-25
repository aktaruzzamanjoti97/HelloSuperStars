import React from "react";

const LiveCard = (props) =>{
  return(
    <>
    <div className="col-md-6 col-10 mx-auto" >
        <div className="card">
        <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
        </div>
    </div>
    </>
  );
};
export default LiveCard;