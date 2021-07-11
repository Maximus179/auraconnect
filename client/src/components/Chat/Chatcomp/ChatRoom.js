import { useState, useRef } from "react";
import { db, auth } from "./../../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import MessageCard from "./MessageCard";
import firebase from "firebase";

const ChatRoom = ({ currentRoom }) => {
  const customRef = useRef();
  const messagesRef = db.collection("messages"); //messages are stored in the messages collection of firebase
  const query = messagesRef
    .where("room", "==", currentRoom) 
    .orderBy("createdAt")
    .limit(50);

  const [messages] = useCollectionData(query, { idField: "id" });
  const [message, setMessage] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createdAt = firebase.firestore.FieldValue.serverTimestamp();
    const { uid, displayName, email } = auth.currentUser;
    await messagesRef.add({
      uid,
      createdAt,
      text: message,
      room: currentRoom,
      userName: displayName,
      email: email,
    });

    setMessage(""); //sets the text area to original poisition after the message is sent
    customRef.current.scrollIntoView({ behavior: "smooth" }); //autosroll after the screen is occupied with messages
  };

  const handleDelete = (createdAt, id) => {
    db.collection("messages").doc(id).delete();
  };
  return (
    <>
      <div className="messages">
        {messages &&
          messages.map((message) => (
            <MessageCard
              message={message}
              key={message.id}
              handleDelete={handleDelete}
            />
          ))}
        <span ref={customRef}></span>
      </div>

      <form className="form_chat" onSubmit={handleSubmit}>
        <textarea className="chat_textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your messages here"
        />
        <button className="button_chat" class="btn btn-danger" type="submit" disabled={!message}>
          Send
        </button>
      </form>
    </>
  );
};

export default ChatRoom;
