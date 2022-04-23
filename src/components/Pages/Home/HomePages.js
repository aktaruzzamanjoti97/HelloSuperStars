import React, { useEffect, useContext } from "react";
import CategorySelector from "./Body/CategorySelector/CategorySelector";
import Post from "./Body/Post/Post";
import { socketContext } from "../../../App";
import AuditionDragAndDrop from "./AuditionDragAndDrop";
import AuditionRoundResult from "./Body/AuditionRoundResult/AuditionRoundResult";
import AuditionDescription from "./AuditionDescription";
import AuditionPay from "./Body/AuditionPay/AuditionPay";

const Homepage = () => {
  const socketData = useContext(socketContext);

  useEffect(() => {
    socketData.emit("addUser", localStorage.getItem("auth_id"));
  }, []);

  return (
    <>
      {/* <CategorySelector /> */}
      <AuditionDragAndDrop />
      {/* <AuditionRoundResult /> */}
      {/* <AuditionDescription /> */}
      {/* <AuditionPay /> */}
      
      <Post />
    </>
  );
};

export default Homepage;
