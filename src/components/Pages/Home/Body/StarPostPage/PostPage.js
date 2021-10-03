import React from "react";
import Card from "../CommonCard";
import Pdata from "../MadeData/Post";


const MessiPage = () =>{
  return(
    <>
     <div className="container-fluid mb-5">
       <div className="row">
         <div className="col-10  post">
           <div className="">
             <div className="post-title">
               <p>Coming live at 9:00PM tonight. See you there</p>
             </div>
             {
               Pdata.map((val, ind) =>{
                 return <Card key={ind} imgsrc={ val.imgsrc} title={val.title} />
               })
             }
           </div>
         </div>
       </div>
     </div>
    </>
  );
};
export default MessiPage;