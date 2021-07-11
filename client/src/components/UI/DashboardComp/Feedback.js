import Heading from "./../../UI/Heading/Heading";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { db } from "./../../../firebase";

const Feedback = () => {

  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("feedback") //the output is stored in the feedback collection on firebase
      .add({
        email: email,
        message: message,
      })
      .then(() => {
        alert("Thank You for the feedback");
      })
      .catch((error) => {
        alert(error.message);
      });

    setMessage("");
    setEmail("");
  };


  return (
    <>
      <Heading />
      <Sidebar />\
      <br />
      <br />
      <div class="container">
        <div class="row">
          <div class="col-md-4 offset-md-4 mt-3">
            <h2 style={{ background: "lightgrey" }} class="p-3 mb-3">Feedback Form</h2>
            <hr class="my-2" />
            <br />
            <br />
            <form onSubmit={handleSubmit}>
              <div class="row">
                <input type="name" id="name" class="row_input" placeholder="Enter your name" required />
              </div><br />
              <div class="row">
                <input value={email} class="row_input" placeholder="Enter email address" onChange={(e) => setEmail(e.target.value)} required />
              </div><br />
              <div class="row">
                <textarea value={message} cols="30" rows="5" placeholder="Message" onChange={(e) => setMessage(e.target.value)} required></textarea>
              </div><br />
              <div class="row">
                <div class="button">
                  <input class="button btn btn-warning" type="submit" value="Submit" />
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;