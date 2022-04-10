import "./chatting.css";
import TimeAgo from "timeago-react";
// import { format } from "timeago.js";

export default function Message({ message }) {
  return (
    <div
      className={
        message.sender_id == localStorage.getItem("auth_id")
          ? "message own"
          : "message"
      }
    >
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">
        <TimeAgo datetime={message.created_at} locale="vi" />
      </div>
    </div>
  );
}
