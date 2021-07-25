import React from "react";
import Card from "../CommonCard";
import Pdata from "../MadeData/MizanurRahmanAzhari";

const MizanurRahmanAzhariPage = () =>{
  return(
    <>
     <div className="my-5">
       <h1 className="text-center">Mizanur Rahman Azhari Post</h1>
     </div>
     <div className="container-fluid mb-5">
       <div className="row">
         <div className="col-10 mx-auto">
           <div className="row gy-4">

             {
               Pdata.map((val, ind) =>{
                 return <Card 
                  key={ind} 
                  imgsrc={ val.imgsrc}
                  title={val.title}
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
export default MizanurRahmanAzhariPage;