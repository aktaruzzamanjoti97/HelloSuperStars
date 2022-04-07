import React, { useEffect, useState, useRef, useContext } from "react";
import { socketContext } from "../../../App";
import Message from "./Message";
import "./chatting.css";
import axios from "axios";
import { io } from "socket.io-client";

const Chatting = () => {
  const socketData = useContext(socketContext);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [currentChat, setCurrentChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      console.log('message data', data)
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });

    axios.get(`/api/chatting/message`).then(res => {
      if(res.data.status === 200)
        {
          console.log('response data', res.data.message)
          setMessages(res.data.message);
        }
    });


  }, []);

  useEffect(() => {
    arrivalMessage &&
      // currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: localStorage.getItem('auth_id'),
      text: newMessage,
      // conversationId: currentChat._id,
    };

    // const receiverId = currentChat.members.find(
    //   (member) => member !== localStorage.getItem('auth_id')
    // );

    const receiverId = localStorage.getItem('auth_id');

    const fData = new FormData();

    fData.append('sender_id', localStorage.getItem('auth_id'));
    fData.append('receiver_id', 12);
    fData.append('conversationId', message.conversationId);
    fData.append('text', newMessage);

    

    socket.current.emit("sendMessage", {
      senderId: localStorage.getItem('auth_id'),
      receiverId,
      text: newMessage,
    });

    try {
      // const res = await axios.post("/messages", message);
      axios.post(`/api/chatting/message`, fData).then(res => {
        if(res.data.status === 200)
          {
            console.log('response data', res.data.message)
            setMessages([...messages, res.data.message]);
          }
      });

      
      console.log('message', messages)
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="chatBoxTop">
      
        {messages.map((m) => (
          <div ref={scrollRef}>
            <Message message={m} own={m.sender_id === localStorage.getItem('auth_id')} />
          </div>
        ))}
      </div>
      <div className="chatBoxBottom">
        <textarea
          className="chatMessageInput"
          placeholder="write something..."
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        ></textarea>
        <button className="chatSubmitButton" onClick={handleSubmit}>
          Send
        </button>
      </div>
    </>
  );
};

export default Chatting;
