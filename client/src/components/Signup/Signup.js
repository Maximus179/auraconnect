import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import firebaseConfig from "./../../firebase";
import { Link } from "react-router-dom";


const Signup = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value); //create account using firebase
      setCurrentUser(true);
    } catch (error) {
      alert(error);
    }
  };
  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <>
      <p class="tip"></p>
      <div class="cont">
        <div class="form sign-in">
          <h2>Welcome, Sign Up Now </h2>
          <br />
          <br />
          <form onSubmit={handleSubmit}>
            <div class="input_field">
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div class="input_field">
              <br />
              <br />
              <input type="password" name="password" placeholder="Password" required minLength="6" />
            </div>
            <br />
            <input class="button btn btn-secondary" type="submit" value="Submit" />
          </form>
          <br />
          <br />
          <br />
          <p><strong>Already have an account with us?</strong><Link to="/login"><strong> Log In</strong></Link></p>
          <p>Want to be a guest user? Start your videocall now. <Link to="/home">Meet Link</Link></p>
        </div>
        <div class="sub-cont">
          <div class="img">
            <div class="img__text m--up">
              <h2>Aura Connect</h2>
              <p>Let's explore the world, and meet people.</p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h2>One of us?</h2>
              <p>Just sign in, we missed you.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;