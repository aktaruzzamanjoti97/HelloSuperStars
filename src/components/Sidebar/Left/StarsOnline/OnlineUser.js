import React, { useEffect, useState } from "react";
import axios from "axios";

export default function OnlineUser({ user }) {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    axios.get(`api/user_info/${user}`).then((res) => {
      console.log("user_info", user);
      if (res.data.status === 200) {
        setUserInfo(res.data.users);
        console.log("user_info", res.data.users);
      }
    });
  }, []);

  return (
    <>
      <div className="accordion-header chatListname" id="headingTwo">
        <div className="d-flex">
          <div className="containerOnline">
            <img
              src={`http://localhost:8000/${userInfo.image}`}
              className="SidebarStarListImage"
              alt=""
            />

            <div class="onLineMo">🟢</div>
          </div>
          <div className="col-md-9  mt-2">
            <span className="chatName">
              {userInfo.first_name} {userInfo.last_name}
            </span>
          </div>
        </div>

        <span></span>
      </div>
    </>
  );
}
