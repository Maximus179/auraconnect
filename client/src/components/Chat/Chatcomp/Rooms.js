const Rooms = ({ currentRoom, setShowListMenu, setCurrentRoom }) => {
  const handleRoomChange = (room) => {
    setCurrentRoom(room);
    setShowListMenu(false);
  };
  return (
    <div className="rooms">
      <h2>Select Room</h2>
      <ul>
        <li
          onClick={() => {
            handleRoomChange("Nerd Herd");
          }}
          className={currentRoom === "Nerd Herd" ? "active" : ""}
        >
          Nerd Herd
        </li>
        <li
          onClick={() => {
            handleRoomChange("Fam Bam");
          }}
          className={currentRoom === "Fam Bam" ? "active" : ""}
        >
          Fam Bam
        </li>
        <li
          onClick={() => {
            handleRoomChange("Brobots");
          }}
          className={currentRoom === "Brobots" ? "active" : ""}
        >
          Brobots
        </li>
        <li
          onClick={() => {
            handleRoomChange("Tick Talk");
          }}
          className={currentRoom === "Tick Talk" ? "active" : ""}
        >
          Tick Talk
        </li>
        <li
          onClick={() => {
            handleRoomChange("The Herd");
          }}
          className={currentRoom === "The Herd" ? "active" : ""}
        >
          The Herd
        </li>
      </ul>
    </div>
  );
};

export default Rooms;
