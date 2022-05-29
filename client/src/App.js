import "./styles/app.css";
import { Sidebar, Chat } from "./components";
import Pusher from "pusher-js";
import React, { useState, useEffect } from "react";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000`)
      .then((res) => res.json())
      .then((data) => {
        const { message } = data;
        console.log(message);
        setMessages(message);
      });
  }, []);

  useEffect(() => {
    console.log("test");
    const pusher = new Pusher(`bb9d446545d1687ef1b8`, { cluster: "ap1" });
    const channel = pusher.subscribe("chat");

    channel.bind("inserted", (data) => {
      alert(JSON.stringify(data));
      setMessages([...messages, data]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  return (
    <div className="app">
      <Sidebar />
      <Chat messages={messages} />
    </div>
  );
}

export default App;
