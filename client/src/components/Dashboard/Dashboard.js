import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./../../Auth";
import firebase from "firebase/app";
import Heading from "../UI/Heading/Heading";
import VideoCall from "../UI/images/VideoCall.png";
import Chat from "../UI/images/Chat.png";
import Sidebar from "../UI/DashboardComp/Sidebar";
import ReactPlayer from "react-player";
import Scramble from '../UI/DashboardComp/Scramble';

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to="/login" />; //if the user isn't signed in, open login page
  }

  const user = firebase.auth().currentUser;
  if (user !== null) {

  }


  return (
    <>
      <>
        <Heading />
        <Sidebar />
        <Scramble />
      </>
      <div class="row row-cols-1 row-cols-md-3 g-5 m-5 p-4">
        <div class="col">
          <div class="card">
            <img src={VideoCall} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Video Call</h5>
              <p class="card-text">Initiate the call and share the URL. Enjoy the best quality video calling with live chat, without any interruptions. </p>
              <a href="/meet" class="btn btn-primary">Get Started</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={Chat} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Chat Room</h5>
              <p class="card-text">Connect with people from around the globe. Communicate on in-built chat rooms. The messages are saved, so the next time you login-in take your chats forward from where you left.</p>
              <a href="/chat" class="btn btn-primary">Get Started</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <ReactPlayer url="https://youtu.be/4wNmTmaVyv0" class="card-img-top" width="100%" height="300px" controls />
            <div class="card-body">
              <h5 class="card-title">How to get started?</h5>
              <p class="card-text">Have any doubts? Confused about how to get started? Don't worry, we've got you covered. Watch the video and begin.</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Dashboard;
