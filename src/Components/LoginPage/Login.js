import {React, useContext, useState,} from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './FirebaseConfig';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import  './Login.css';
firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [user, setUser] = useState({
    isSignedIn: false,
    newUser: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });

    const [loggedinUser, setLoggedinUser] = useContext(userContext);
     const history = useHistory();
     const location = useLocation();
     let { from } = location.state || { from: { pathname: "/" } };  
    
    
    const googleSignInHandler = () =>{
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
       .then((result) => {
        const {displayName, email} = result.user;
        console.log(result.user);
        const signedInUser = {name:displayName, email}
        setLoggedinUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error);
      });
      }

      const changeBlur = (event) => {
        let isFormValid = true;
        console.log(event.target.name, event.target.value);
        if (event.target.name === "email") {
          isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === "password") {
          const isPasswordValid = event.target.value.length > 6;
          const PassHasNumber = /\d{1}/.test(event.target.value);
          isFormValid = isPasswordValid && PassHasNumber;
        }
        if (isFormValid) {
          const newUserInfo = { ...user };
          newUserInfo[event.target.name] = event.target.value;
          setUser(newUserInfo);
        }
      };
    return (
      <div className ="loginPage">
            <h3>Sign in page</h3>
            <form action="">
              <input className="inputBox" onBlur={changeBlur} name="name" type="text"  placeholder="Enter your name" required/>
              <input className="inputBox" onBlur={changeBlur} name="email" type="text"  placeholder="Enter your email" required/>
              <input className="inputBox" onBlur={changeBlur} name="password1" type="password"  placeholder="Enter a password" required/>
              <input className="inputBox" onBlur={changeBlur} name="password2" type="password"  placeholder="Reenter password" required/>
              <p><span><input className="remember" type="checkbox"/></span>Remembr Me</p>
              <span> <a href="#">Forget password</a></span>
              <input className="btn" type="submit" value="Login"/><br/>
              <p>Already have an account?<a href="#">sign up</a></p>
              <hr/>
              <button className="btn-g" onClick={googleSignInHandler} >Google</button>
            </form>
            
           
        </div>
    );
};

export default Login;