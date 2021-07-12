import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./../../Auth";
import firebaseConfig from "./../../firebase";
import { Link } from "react-router-dom";
import './LogIn.scss';

const LogIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value); //using firebase to access the account
    } catch (error) {
      alert("error");
    }
  };
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/dashboard" />; //if the user is already logged in, redirect 
  }
  return (
    <>

      <p class="tip"></p>
      <div class="cont">
        <div class="form sign-in">
          <h2>Welcome back, Log In</h2>
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
          <p><Link to="/forgotpassword"><strong>Forgot Password?</strong></Link></p>
          <p><strong>Don't have an account with us?</strong><Link to="/"><strong> Sign Up</strong></Link></p>
          <p>Want to be a guest user? Start your videocall now. <Link to="/meet">Meet Link</Link></p>
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
              <h2>Not one of us?</h2>
              <p>No worries, come and join us today.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;


