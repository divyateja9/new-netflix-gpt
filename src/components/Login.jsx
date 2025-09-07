import React,{useState} from "react";
import Header from "./Header";

const Login = () => {

   const [signInFormVisible, setSignInFormVisible] = useState(false);
  const toggleSignInForm = () => {
    setSignInFormVisible(!signInFormVisible);
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
       
       {!signInFormVisible ? <input
          type="text"
          placeholder="Full Name"
          className="p-4 m-4 w-full bg-gray-700 bg-opacity-80 rounded-sm"
        /> :""}
        <input
          type="text"
          placeholder="Email address"
          className="p-4 m-4 w-full bg-gray-700 bg-opacity-80 rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-4 w-full bg-gray-700 bg-opacity-80 rounded-sm"
        />
        <button className="bg-red-600 w-full text-white p-4 m-4 rounded-sm">
          {signInFormVisible ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="cursor-pointer">{signInFormVisible ? "New to Netflix ? or Sign Up Now" : "Already have an account ? Sign In"}</p>
      </form>
    </div>
  );
};

export default Login;
