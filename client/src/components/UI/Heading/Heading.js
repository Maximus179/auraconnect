import './Heading.scss';
import firebase from "firebase/app";
import { AuthContext } from "./../../../Auth";
import { useContext } from "react";
import { Redirect } from "react-router-dom";

const Heading = () => {

    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    const user = firebase.auth().currentUser;//reads user name from firebase created doc
    if (user !== null) {
    }

    return (
        <div className="heading">
            <div className="user-info" style={{ float: "right" }} >
                <strong> User: {user.email}</strong> 
            </div>
        </div>
    );
};
export default Heading;
