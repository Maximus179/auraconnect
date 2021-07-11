import firebase from "firebase";
import Heading from "../Heading/Heading";
import Sidebar from "./Sidebar";
import 'firebase/auth';

const Delete = () => {

  function deleteUser() {
    // [START auth_delete_user]
    const user = firebase.auth().currentUser;
    user.delete().then(() => {
      alert("done");

    }).catch((error) => {
      alert("Please log in again to delete.")
    });
  }

  return (
    <>
      <Heading />
      <Sidebar />
      <div class="col-md-4 offset-md-4 mt-3 p-5">
        <h2 style={{ background: "lightgrey" }} class="p-3 mb-3">Delete Account</h2>
        <hr class="my-2" />
        <form class="col-sm-6 position-absolute top-50 start-50 translate-middle">
          <div class="input_field ">
            <input type="email" name="email" placeholder="Re-enter registered email id" required />
          </div>
          <br />
          <br />
          <button class="btn btn-warning position-absolute top-90 start-50 translate-middle" onClick={deleteUser}>Delete</button>
        </form>
        <br />
        <br />
      </div>

    </>
  );
};

export default Delete;