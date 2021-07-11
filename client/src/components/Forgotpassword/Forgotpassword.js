import { Link } from 'react-router-dom';
import firebaseConfig from './../../firebase';

const Forgotpassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email } = e.target.elements;

    firebaseConfig.auth().sendPasswordResetEmail(email.value).then(function () {
      alert("Check your inbox please!")
    }).catch(function (error) {
      // An error happened.
    });


  }


  return (
    <>

      <p class="tip"></p>
      <div class="cont">
        <div class="form sign-in">
          <h2>Oops! Looks like you don't remember your password.</h2>
          <br />

          <form onSubmit={handleSubmit}>
            <div class="input_field">
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <br />

            <input class="button btn btn-secondary" type="submit" value="Submit" />
          </form>
          <br />
          <br />
          <br />
          <br />
          <p><strong>Go Back to</strong><Link to="/login"><strong> Login</strong> </Link></p>
          <p><strong>Don't have an account with us?</strong><Link to="/"><strong> Sign Up</strong> </Link></p>
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
              <h2>Connect with people.</h2>
              <p>Join today, we are waiting for you!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgotpassword;