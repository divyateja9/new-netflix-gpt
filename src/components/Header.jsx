import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeUserInfo, setUserInfo } from '../utils/userSlice';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react'


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 // const [searchParams, setSearchParams] = useSearchParams();

  const user = useSelector((state) => state.user);

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email,displayName,photoURL } = user;
                dispatch(setUserInfo({
                    uid,
                    email,
                    displayName,
                    photoURL
                }));
                navigate("/browse");
             
            }
            else{
                dispatch(removeUserInfo());
                navigate("/");
                // User is signed out   
            }
        });
        return () => {
            //cleanup unsubscribe
            unsubscribe();
        };
    }, [])

  //const dispatch = useDispatch();
  const handleSignOut = () => {
    // Handle sign out logic here
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("Sign-out successful.");
    //  dispatch({ type: "REMOVE_USER_INFO" });
      navigate("/");
    }).catch((error) => {
      // An error happened.
      console.log("An error happened.",error)
    });
  }

  return (
    <div className='absolute w-screen top-0 left-0 p-4 bg-gradient-to-b from-black z-50 flex justify-between' >
        <img className = "w-44"src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
  <div className = "flex-p2"> 
   {user?.photoURL && <img className='w-10 h-10 rounded-md' src={user?.photoURL} alt="avatar" />}
    <button onClick={handleSignOut} className='text-white text-bold p-2 rounded-md'>Sign Out</button>
    </div>
    </div>
  )
}

export default Header