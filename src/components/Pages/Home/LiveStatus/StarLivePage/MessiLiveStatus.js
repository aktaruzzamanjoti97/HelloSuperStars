import React from "react";
import LiveCard from "../CommonCardLive";
import Pdata from "../../Body/MadeData/Post";

const MessiLiveStatus = () =>{
  return(
    <>
     <div className="my-5">
     </div>
     <div className="container-fluid mb-5" >
       <div className="row" style={{ background: "#343434",height:"120px" ,borderRadius:"5px"}} >
         <div className="col-10 mx-auto" >
           <div className="row gy-4" >
           <b style={{ color:"#F0E25E"}}>Live Now</b>
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
export default MessiLiveStatus;