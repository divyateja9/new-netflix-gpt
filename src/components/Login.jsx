import React,{useState,useRef} from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUserInfo } from "../utils/userSlice";
import { AVATAR_URL } from "../utils/constants";

//PROD app url: https://netflixgpt-2aadb.web.app/
const Login = () => {

   const [signInFormVisible, setSignInFormVisible] = useState(true);
    const dispatch = useDispatch();
   const navigate = useNavigate();
   const email = useRef(null);
   const password = useRef(null);
   const name = useRef(null);
   const [errorMessage, setErrorMessage] = useState("");
   const toggleSignInForm = () => {
    setSignInFormVisible(!signInFormVisible);
  }
const handleLoginClick = (e) => {
// 
const message=  validateData(email.current.value,password.current.value);
setErrorMessage(message)
  // Handle login logic here
  if(message) return;
  if(!signInFormVisible){
    
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user,  {displayName:name.current.value ,  photoURL: AVATAR_URL })
  .then(() => {
    const authUser = auth.currentUser;
    // Profile updated! 
    dispatch(setUserInfo({
      uid: authUser?.uid, 
      email: authUser?.email,
      displayName: authUser?.displayName,
      photoURL: authUser.photoURL
  }));
    // ...
  })
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage);
    console.log("Error",errorCode,errorMessage  );
    // ..
  });
   e.preventDefault();
;
  }
else{
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    dispatch(setUserInfo({
      uid: user?.uid, 
      email: user?.email, 
      displayName: user?.displayName,
      photoURL: user?.photoURL
  }));
    // ...
    console.log("User",user);
   // navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage);
    console.log("Error",errorCode,errorMessage  );
  });
  console.log("Sign In Clicked");

}
  e.preventDefault();
}

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/US-en-20250901-TRIFECTA-perspective_a7b980b6-8e93-4f18-9a62-56d5812c4956_large.jpg"
          srcset="https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/US-en-20250901-TRIFECTA-perspective_a7b980b6-8e93-4f18-9a62-56d5812c4956_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/US-en-20250901-TRIFECTA-perspective_a7b980b6-8e93-4f18-9a62-56d5812c4956_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/US-en-20250901-TRIFECTA-perspective_a7b980b6-8e93-4f18-9a62-56d5812c4956_small.jpg 959w"
          alt=""
          aria-hidden="true"
          class="default-ltr-iqcdef-cache-19j6xtr"
        ></img>
      </div>
      <form className=" w-3/12 absolute p-12 bg-opacity-80 bg-black my-36 mx-auto right-0 left-0 rounded-md text-white">
        <h1 className="text-3xl font-bold py-4">{signInFormVisible ? "Sign In" : "Sign Up"} </h1>
               <p className="text-red-500">{errorMessage}</p>
       {!signInFormVisible ? <input
          type="text"
          ref={name}
          placeholder="Full Name"
          className="p-4 m-4 w-full bg-gray-700 bg-opacity-80 rounded-sm"
        /> :""}
        <input
          type="text"
          ref ={email}
          placeholder="Email address"
          className="p-4 m-4 w-full bg-gray-700 bg-opacity-80 rounded-sm"
        />
        <input
          type="password"
          ref = {password}
          placeholder="Password"
          className="p-4 m-4 w-full bg-gray-700 bg-opacity-80 rounded-sm"
        />

        <button onClick={(e)=>handleLoginClick(e)} className="bg-red-600 w-full text-white p-4 m-4 rounded-sm">
          {signInFormVisible ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="cursor-pointer">{signInFormVisible ? "New to Netflix ? or Sign Up Now" : "Already have an account ? Sign In"}</p>
      </form>
    </div>
  );
};

export default Login;
