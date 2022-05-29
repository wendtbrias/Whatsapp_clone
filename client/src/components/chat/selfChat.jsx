const SelfChat = ({ className, messageData }) => {
  return (
    <div className="chat_message">
      {className == "chat_sender" ? (
        <div className="user_sender">
          <h5>{messageData.name}</h5>
        </div>
      ) : (
        <div className="user_reciever">
          <h5>{messageData.name}</h5>
        </div>
      )}
      <div className={className}>
        <p>{messageData.message}</p>
      </div>
    </div>
  );
};

export default SelfChat;
