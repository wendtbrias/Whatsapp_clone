import "./chat.css";
import SelfChat from "./selfChat";
import ChatForm from "./ChatForm";

const Chat = ({ messages }) => {
  return (
    <div className="chat">
      <div className="chat-navigation">
        <h3>Epic room dance</h3>
      </div>
      <div className="chat-body">
        {messages.length > 0 &&
          messages.map((msg, id) => {
            return (
              <SelfChat
                className={`${msg.recieved ? "chat_reciever" : "chat_sender"}`}
                messageData={msg}
                key={id}
              />
            );
          })}
      </div>
      <div className="chat-input">
        <ChatForm />
      </div>
    </div>
  );
};

export default Chat;
