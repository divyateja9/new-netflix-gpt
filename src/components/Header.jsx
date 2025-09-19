import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeUserInfo, setUserInfo } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import {changeLanguage} from "../utils/configSlice";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
import { SUPPORTED_LANGUAGES } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [searchParams, setSearchParams] = useSearchParams();

  const user = useSelector((state) => state.user);
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          setUserInfo({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUserInfo());
        navigate("/");
        // User is signed out
      }
    });
    return () => {
      //cleanup unsubscribe
      unsubscribe();
    };
  }, []);

  //const dispatch = useDispatch();
  const handleSignOut = () => {
    // Handle sign out logic here
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful.");
        //  dispatch({ type: "REMOVE_USER_INFO" });
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log("An error happened.", error);
      });
  };

  const toggleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };
  return (
    <div className="absolute w-screen top-0 left-0 p-4 bg-gradient-to-b from-black z-50 flex justify-between">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      <div className="flex p-2">
        {showGptSearch &&  <select className="p-2 m-2 bg-gray-900 text-white" onChange={(e) => {
          console.log("Change ",e)
           dispatch(changeLanguage(e.target.value))}}>
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
          ))}
        </select>}
       <button
          onClick={toggleGptSearch}
          className="py-2 px-2 mx-2 bg-purple-800 text-white rounded-lg"
        >
         {showGptSearch ? "GPT Search" : "Home Page"}
        </button>
        {user?.photoURL && (
          <img
            className="w-12 h-12 rounded-md"
            src={user?.photoURL}
            alt="avatar"
          />
        )}
        <button
          onClick={handleSignOut}
          className="text-white text-bold p-2 rounded-md"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
