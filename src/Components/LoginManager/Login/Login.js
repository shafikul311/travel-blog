import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import google from '../../Images/google.png'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../../App';


const Login = () => {

    const [loggedInUser ,setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }
      
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = ()=> {

        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            var user = result.user;
            // console.log(user)
            const { displayName, email } = result.user;
            const signInUser = { name: displayName, email };
            console.log(signInUser)
        
            setLoggedInUser(signInUser);
            history.replace(from);
          // ...
        }).catch((error) => {

            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorCode , errorMessage,email , credential)
         
        });
      

    }
    
    return (
        <div>
             <div className="text-center pt-5">
      <h1 className="pb-5">Login with google</h1>

      <button onClick={handleGoogleSignIn}
        type="button"
        className="btn btn-outline-primary w-25 rounded-pill"
      >
        <img
          className="align-content-start"
          style={{ height: "20px" }}
          src={google}
          alt=""
        />{" "}
        Continue with Google{" "}
      </button>

      <p className="pt-3">
        Do not have an account ?<Link to="/login">Creat an account</Link>
      </p>
    </div>            
        </div>
    );
};

export default Login;