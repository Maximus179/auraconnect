import { useEffect, useReducer, useState, useRef } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getRequest, postRequest } from "./../../utils/apiRequests";
import {
  BASE_URL,
  GET_CALL_ID,
  SAVE_CALL_ID,
  GET_ICE_SERVER,
} from "./../../utils/apiEndpoints";
import io from "socket.io-client";
import Peer from "simple-peer";
import "./CallPage.scss";
import Messenger from "./../UI/Messenger/Messenger";
import MessageListReducer from "../../reducers/MessageListReducer";
import Alert from "../UI/Alert/Alert";
import MeetingInfo from "../UI/MeetingInfo/MeetingInfo";
import CallPageFooter from "../UI/CallPageFooter/CallPageFooter";
import CallPageHeader from "../UI/CallPageHeader/CallPageHeader";

let peer = null;
const socket = io.connect(process.env.REACT_APP_BASE_URL);//This is present in the env, use herokuapp url here while deploying
const initialState = [];

const CallPage = () => {
  const history = useHistory();
  let { id } = useParams();
  const isAdmin = window.location.hash === "#init" ? true : false;//Checks whether the person is initiator of the meet and then displays the meetinfo popup.
  const url = `${window.location.origin}${window.location.pathname}`;
  let alertTimeout = null;

  const [messageList, messageListReducer] = useReducer(
    MessageListReducer,
    initialState
  );

  const iceServers = useRef([]);
  const [streamObj, setStreamObj] = useState();
  const [screenCastStream, setScreenCastStream] = useState();
  const [meetInfoPopup, setMeetInfoPopup] = useState(false);
  const [isPresenting, setIsPresenting] = useState(false);
  const [isMessenger, setIsMessenger] = useState(false);
  const [messageAlert, setMessageAlert] = useState({});
  const [isAudio, setIsAudio] = useState(true);
  const [isVideo, setIsVideo] = useState(true);


  useEffect(() => {
    if (isAdmin) {
      setMeetInfoPopup(true);
      getICServer();
    } else {
      initWebRTC();
    }
    socket.on("code", (data) => {
      if (data.url === url) {
        peer.signal(data.code);
      }
    });
  }, []);

  //twilio turn servers for mobile-wifi connections
  const getICServer = async () => {
    const response = await getRequest(`${BASE_URL}${GET_ICE_SERVER}`);
    iceServers.current = response;
    initWebRTC();
  }

  //Make sure redis server is working fine, to save the get call id.
  const getRecieverCode = async () => {
    const response = await getRequest(`${BASE_URL}${GET_CALL_ID}/${id}`);
    if (response.code) {
      peer.signal(response.code);
    }
  };

  const initWebRTC = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        setStreamObj(stream);

        if (isAdmin && iceServers.current && iceServers.current.length) {
          peer = new Peer({
            initiator: isAdmin,
            trickle: false,
            stream: stream,
            config: {
              iceServers: iceServers.current
            }
          });
        }


        if (!isAdmin) {
          peer = new Peer({
            initiator: false,
            trickle: false,
            stream: stream,
          });
          getRecieverCode();
        }
        peer.on("signal", async (data) => {
          if (isAdmin) {
            let payload = {
              id,
              signalData: data,
            };
            await postRequest(`${BASE_URL}${SAVE_CALL_ID}`, payload);
          } else {
            socket.emit("code", { code: data, url }, (cbData) => {
              console.log("code sent");
            });

          }
        });

        peer.on("connect", () => {
          // wait for 'connect' event before using the data channel
        });

        peer.on("data", (data) => {
          clearTimeout(alertTimeout);
          messageListReducer({
            type: "addMessage",
            payload: {
              user: "friend",
              msg: data.toString(),
              time: Date.now(),
            },
          });

          setMessageAlert({
            alert: true,
            isPopup: true,
            payload: {
              user: "friend",
              msg: data.toString(),
            },
          });

          alertTimeout = setTimeout(() => {
            setMessageAlert({
              ...messageAlert,
              isPopup: false,
              payload: {},
            });
          }, 10000);
        });

        peer.on("stream", (stream) => {
          // got remote video stream, now let's show it in a video tag
          let video = document.querySelector("video");

          if ("srcObject" in video) {
            video.srcObject = stream;
          } else {
            video.src = window.URL.createObjectURL(stream); // for older browsers
          }

          video.play();

        }
        );
        // for the local video and streaming it
        let myVideo = document.getElementById("myVideo");

        if ("srcObject" in myVideo) {
          myVideo.srcObject = stream;
        } else {
          myVideo.src = window.URL.createObjectURL(stream); // for older browsers
        }

        myVideo.play();

      })
      .catch(() => { });
  };

  const sendMsg = (msg) => {
    peer.send(msg);
    messageListReducer({
      type: "addMessage",
      payload: {
        user: "you",
        msg: msg,
        time: Date.now(),
      },
    });
  };
  // UI in different folder
  const screenShare = () => {
    navigator.mediaDevices
      .getDisplayMedia({ cursor: true })
      .then((screenStream) => {
        peer.replaceTrack(
          streamObj.getVideoTracks()[0],
          screenStream.getVideoTracks()[0],
          streamObj
        );
        setScreenCastStream(screenStream);
        screenStream.getTracks()[0].onended = () => {
          peer.replaceTrack(
            screenStream.getVideoTracks()[0],
            streamObj.getVideoTracks()[0],
            streamObj
          );
        };
        setIsPresenting(true);
      });
  };

  const stopScreenShare = () => {
    screenCastStream.getVideoTracks().forEach(function (track) {
      track.stop();
    });
    peer.replaceTrack(
      screenCastStream.getVideoTracks()[0],
      streamObj.getVideoTracks()[0],
      streamObj
    );
    setIsPresenting(false);
  };

  const toggleAudio = (value) => {
    streamObj.getAudioTracks()[0].enabled = value;
    setIsAudio(value);
  };

  const toggleVideo = (value) => {
    streamObj.getVideoTracks()[0].enabled = value;
    setIsVideo(value);
  };

  const disconnectCall = () => {
    peer.destroy();
    history.push("/dashboard");
    window.location.reload();
  };

  return (
    <div>
      <div className="callpage-container">
        <video className="video-container" src=""></video>

        <CallPageHeader
          isMessenger={isMessenger}
          setIsMessenger={setIsMessenger}
          messageAlert={messageAlert}
          setMessageAlert={setMessageAlert}
        />
        <CallPageFooter
          isPresenting={isPresenting}
          stopScreenShare={stopScreenShare}
          screenShare={screenShare}
          isAudio={isAudio}
          toggleAudio={toggleAudio}
          isVideo={isVideo}
          toggleVideo={toggleVideo}
          disconnectCall={disconnectCall}
        />

        {isAdmin && meetInfoPopup && (
          <MeetingInfo setMeetInfoPopup={setMeetInfoPopup} url={url} />
        )}
        {isMessenger ? (
          <Messenger
            setIsMessenger={setIsMessenger}
            sendMsg={sendMsg}
            messageList={messageList}
          />
        ) : (
          messageAlert.isPopup && <Alert messageAlert={messageAlert} />
        )}
      </div>
      <div className="local-video">
        <video id="myVideo" src="" width="625px" height="625px" muted="muted"></video>
      </div>
    </div>
  ); //use muted, for muting the local video and stopping the playback sound.
};
export default CallPage;
