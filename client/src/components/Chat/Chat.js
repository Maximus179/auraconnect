import { auth } from "./../../firebase";
import { useState, useEffect } from "react";
import NavBar from "./Chatcomp/NavBar";
import ChatRoom from "./Chatcomp/ChatRoom";
import { useAuthState } from "react-firebase-hooks/auth";
import './Chat.scss';
import { MagicSpinner} from 'react-spinners-kit';

const Chat = () => {
  const [user] = useAuthState(auth);
  const [currentRoom, setCurrentRoom] = useState("Brobots");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="chat">
      {loading && <MagicSpinner />}
      <NavBar
        user={user}
        currentRoom={currentRoom}
        setCurrentRoom={setCurrentRoom}
      />
      <div className="content_chat">
        <ChatRoom currentRoom={currentRoom}/>
      </div>
    </div>
  );
};

export default Chat;
