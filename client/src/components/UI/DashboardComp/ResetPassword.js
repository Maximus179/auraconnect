import 'firebase/auth';
import Heading from "../Heading/Heading";
import Sidebar from "./Sidebar";
import firebaseConfig from './../../../firebase';

const ResetPassword = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email } = e.target.elements;

    firebaseConfig.auth().sendPasswordResetEmail(email.value).then(function () {
      alert("Check inbox")
    }).catch(function (error) {
      // An error happened.
    });


  }

  return (
    <>
      <Heading />
      <Sidebar />
      <br />
      <br />
      <br />
      <div class="col-md-4 offset-md-4 mt-3">
        <h2 style={{ background: "lightgrey" }} class="p-3 mb-3">Password Reset</h2>
      </div>
      <form class="col-sm-6 position-absolute top-50 start-50 translate-middle" onSubmit={handleSubmit}>
        <div class="input_field ">
          <input type="email" name="email" placeholder="Re-enter registered email id" required />
        </div>
        <br />
        <input class="button btn btn-warning" type="submit" value="Submit" />
      </form>
    </>
  )
}
export default ResetPassword;