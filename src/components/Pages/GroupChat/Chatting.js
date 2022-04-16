import React, { useEffect, useState, useRef, useContext } from "react";
import { socketContext } from "../../../App";
import Message from "./Message";
import "./chatting.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import PicMa from "../../../images/LiveChat/Live.png";
import { io } from "socket.io-client";

const Chatting = ({group_id}) => {
  const socketData = useContext(socketContext);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [currentChat, setCurrentChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const socket = useRef();
  const params = useParams();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");

    socket.current.emit("joinRoom", {userId:10, room: group_id});

    // socket.current.on("getGroupMessage", (data) => {
    //   console.log('group msg', data)
    //   alert(data);
    // });

    socket.current.on("getGroupMessage", (data) => {
      console.log("message data", data);
      setArrivalMessage({
        sender_id: data.senderId,
        receiver_id: data.receiverId,
        text: data.text,
        createdAt: Date.now(),
      });
    });

  }, [params]);

  useEffect(() => {
    axios.get(`/api/group/message/${group_id}`).then((res) => {
      if (res.data.status === 200) {
        console.log("response data", res.data.message);
        setMessages(res.data.message);
      }
    });
  }, [group_id]);

  useEffect(() => {
    arrivalMessage &&
      // currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, localStorage.getItem("auth_id")]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: localStorage.getItem("auth_id"),
      text: newMessage,
      // conversationId: currentChat._id,
    };

    // const receiverId = currentChat.members.find(
    //   (member) => member !== localStorage.getItem('auth_id')
    // );

    const receiverId = 0;

    socket.current.emit("sendGroupMessage", {
      senderId: localStorage.getItem("auth_id"),
      receiverId,
      text: newMessage,
    });

    const fData = new FormData();

    fData.append("sender_id", localStorage.getItem("auth_id"));
    fData.append("group_id", group_id);
    fData.append("text", newMessage);

    try {
      // const res = await axios.post("/messages", message);
      axios.post(`/api/group/message`, fData).then((res) => {
        if (res.data.status === 200) {
          setMessages([...messages, res.data.message]);
          // setMessages((prev) => [...prev, arrivalMessage]);
          //setMessages((prev) => [...prev, arrivalMessage]);
        }
      });
      console.log("message after res", messages);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div className=" MessengerBody py-3 ps-2 text-light">
        <h6 className="fw-bold mx-2">Group inbox</h6>

        <div className="top-right-messenger">
          <span>
            <img src={PicMa} alt="" className="PicMessenger" />
          </span>
          <span>
            <img src={PicMa} alt="" className="PicMessenger" />
          </span>
          <span>
            <img src={PicMa} alt="" className="PicMessenger" />
          </span>
          <span className="messengerUser"> & 20 more</span>
        </div>
      </div>

      {/* <div className="bg-warning chat-header">
      <h4 className="text-center text-light">Siam</h4>
    </div> */}
      <div className="chatBoxTop container MessengerBodyText py-2 ps-2 text-light">
        {messages.map((m) => (
          <div ref={scrollRef}>
            <Message message={m} />
          </div>
        ))}
      </div>

      <div className="d-flex MessengerFooter  py-2 ps-2 text-light">
        <div className="IconMessage col-md-3 me-3 d-flex">
          <i className="text-light IconMessageT m-2 fa-solid fa-circle-plus f-25"></i>
          <i className="text-light IconMessageT m-2 fa-solid fa-image f-25"></i>
          <i className="text-light IconMessageT m-2 fa-solid fa-face-smile-beam f-25"></i>
        </div>

        <div className="IconMessage col-md-7 d-flex">
          <input
            type="text"
            className="MessageWidth ps-3"
            placeholder="type text..."
            onChange={(e) => setNewMessage(e.target.value)}
            value={newMessage}
          />
        </div>

        <div className="IconMessage col-md-1 d-flex ms-2">
          <i
            class="m-2 me-3 text-light IconMessageT SendT text-left fa-brands fa-telegram f-25"
            onClick={handleSubmit}
          ></i>
        </div>
      </div>
    </>
  );
};

export default Chatting;
