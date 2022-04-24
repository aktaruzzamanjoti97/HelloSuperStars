import React, { useEffect, useContext, useState } from "react";
import CategorySelector from "./Body/CategorySelector/CategorySelector";
import Post from "./Body/Post/Post";
import { socketContext } from "../../../App";
import SubCategorySelector from "./Body/CategorySelector/SubCategorySelector/SubCategorySelector";

// import AuditionRoundResult from "./Body/AuditionRoundResult/AuditionRoundResult";
// import AuditionDescription from "./AuditionDescription";
// import AuditionPay from "./Body/AuditionPay/AuditionPay";

const Homepage = () => {
  const socketData = useContext(socketContext);

  const [onSelect, setOnSelect] = useState(false)
  const [catId, setCatId] = useState(null)

  useEffect(() => {
    socketData.emit("addUser", localStorage.getItem("auth_id"));
  }, []);

  return (
    <>

      {/* <CategorySelector /> */}
      {/* <AuditionDragAndDrop /> */}
      {/* <AuditionRoundResult /> */}
      {/* <AuditionDescription /> */}
      {/* <AuditionPay /> */}
      


     
        {
          onSelect ?  <SubCategorySelector onSelect={onSelect} setOnSelect={setOnSelect} catId={catId} setCatId={setCatId} /> :  <CategorySelector onSelect={onSelect} setOnSelect={setOnSelect} catId={catId} setCatId={setCatId} />
        }
     

      <Post />
    </>
  );
};

export default Homepage;
