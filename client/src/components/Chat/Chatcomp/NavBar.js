import { useState } from "react";
import Rooms from "./Rooms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown
} from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ user, currentRoom, setCurrentRoom }) => {
  const [showListMenu, setShowListMenu] = useState(false);

  return (
    <nav className="nav_chat">
      <h1>
        {user ? (
          <>
            Current room: <strong>{currentRoom}</strong>
          </>
        ) : (
          <strong>Chat App</strong>
        )}
      </h1>
      {user ? (
        <>
          <button
            class="btn btn-danger"
            onClick={() => {
              setShowListMenu(!showListMenu);
            }}
          >
            <FontAwesomeIcon className="icon" icon={faChevronCircleDown} title="Rooms"/>
          </button>
          <ul
            className="list-menu_chat"
            style={{ top: showListMenu && user ? "10vh" : "-100vh" }}
          >
            <li>
              <Rooms
                currentRoom={currentRoom}
                setCurrentRoom={setCurrentRoom}
                setShowListMenu={setShowListMenu}
              />
            </li>
          </ul>
        </>
      ) : null}
    </nav>
  );
};

export default NavBar;
