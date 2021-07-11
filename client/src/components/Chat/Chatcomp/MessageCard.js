import { useState } from "react";
import { auth } from "./../../../firebase";

const MessageCard = ({ message, handleDelete }) => {
  const { id, text, uid, createdAt, email } = message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  const [showActionsButtons, setShowActionsButtons] = useState(false);
  const toggleCard = () => {
    setShowActionsButtons(!showActionsButtons);
  };

  return (
    <>
      <div className={`message ${messageClass}`}>
        <div className="contents_chat" onClick={toggleCard}>
          <div className="email">
            <p>{email}</p>
          </div>
          <div className="text">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageCard;
