import MoodIcon from "@mui/icons-material/Mood";
import MicIcon from "@mui/icons-material/Mic";
import IconButton from "@mui/material/IconButton";
import { useState,useRef } from "react";

const ChatForm = () => {
  const [chatForm, setChatForm] = useState({ message: "" });
  const baseUrl = `http://localhost:5000`;
  const inputRef = useRef();

  function sendChat(e) {

    if(e.keyCode == 13) {

      const schema = {
        message:inputRef.current.value,
        name: "rendy",
        recieved: false,
        timestamp: new Date().toDateString()
      };

      try {
        fetch(baseUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(schema),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
      } catch (err) {
        console.log(err);
      }
    }

  }

  return (
    <div className="chat-form-container">
      <IconButton>
        <MoodIcon />
      </IconButton>
      <div className="form">
        <input ref={inputRef} onKeyUp={sendChat} type="text" placeholder="type the chat" />
      </div>
      <IconButton>
        <MicIcon />
      </IconButton>
    </div>
  );
};

export default ChatForm;
