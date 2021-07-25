import React from "react";
import LiveCard from "../CommonCardLive";
import Pdata from "../../Body/MadeData/MashrafeMortaza";

const MashrafeMortazaLiveStatus = () =>{
  return(
    <>
     <div className="my-5">
     </div>
     <div className="container-fluid mb-5">
       <div className="row">
         <div className="col-10 mx-auto">
           <div className="row gy-4">

             {
               Pdata.map((val, ind) =>{
                 return <LiveCard 
                  key={ind} 
                  imgsrc={ val.imgsrc}
                 />
               })
             }

           </div>
         </div>
       </div>
     </div>
    </>
  );
};
export default MashrafeMortazaLiveStatus;