import { useState } from "react";
import { auth } from "./../../../firebase";
import { formatRelative } from 'date-fns';

const MessageCard = ({ message}) => {
  const { text, uid, createdAt, email } = message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  const [showActionsButtons, setShowActionsButtons] = useState(false);
  const toggleCard = () => {
    setShowActionsButtons(!showActionsButtons);
  };

  const formatDate = date => {
    let formattedDate = '';
    if (date) {
      // Convert the date in words relative to the current date
      formattedDate = formatRelative(date, new Date());
      // Uppercase the first letter
      formattedDate =
        formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    }
    return formattedDate;
  };


  return (
    <>
      <div className={`message ${messageClass}`}>
        <div className="contents_chat" onClick={toggleCard}>
          <div className="email">
            <p>{email}</p>
          </div>
          <div className="email">
            <p>{createdAt?.seconds ? (
            <span className="text-gray-500 text-xs">
              {formatDate(new Date(createdAt.seconds * 1000))}
            </span>
          ) : null}</p>
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
