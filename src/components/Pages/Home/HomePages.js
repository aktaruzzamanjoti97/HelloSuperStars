import React, { useEffect, useContext } from "react";
import CategorySelector from "./Body/CategorySelector/CategorySelector";
import Post from "./Body/Post/Post";
import { socketContext } from "../../../App";
import AuditionDragAndDrop from "./AuditionDragAndDrop";

const Homepage = () => {
  const socketData = useContext(socketContext);

  useEffect(() => {
    socketData.emit("addUser", localStorage.getItem("auth_id"));
  }, []);

  return (
    <>
      {/* <CategorySelector /> */}
      {/* <AuditionDragAndDrop /> */}
      
      <Post />
    </>
  );
};

export default Homepage;
