import React, { useState } from "react";
import googleButton from "../img/btn_google.png";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin, hasGrantedAllScopesGoogle, hasGrantedAnyScopeGoogle } from "@react-oauth/google";
const { userLogin } = require("../axios/index");

function Login2Form() {
  const navigate = useNavigate();
  const [password, setPassword] = useState();
  const [IsLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState();

  const emailOnChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const passOnChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const loginButtonHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await userLogin(email, password);
      const access_token = response.data.access_token;
      if (access_token) {
        localStorage.setItem("access_token", access_token);
        console.log("sukses login");
      } else {
        console.log("gagal login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // --------------- Google Login -----------------------------------
  const scope = "email profile https://www.googleapis.com/auth/calendar openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email"
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => getToken(codeResponse.code),
    onError: () => console.log("error"),
    flow: "auth-code",
    scope: scope,
  });

  const googleLogin = async (e) => {
    console.log("masuk google login");
    try {
      e.preventDefault();
      login()
    } catch (error) {
      console.log(error)
    }
  };

  const getToken = async (code) => {
    let payload
    try {
      payload = await userLogin('googleSign', code);
      const access_token = payload.data.access_token;
      if (access_token) {
        localStorage.setItem("access_token", access_token);
        navigate("/")
      } else {
        console.log("gagal login");
      }
    } catch (e) {
      console.log(e)
    }
  }
  // --------------- End Google Login -----------------------------------

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="bg-blue-400 text-white rounded-2xl flex flex-col w-4/5 md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in mt-[-200px]">
        <h2 className="p-3 text-3xl font-bold text-white">Arten Audioworks</h2>
        <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>

        {/* Inputs */}
        <div className="flex flex-col w-4/5 justify-center items-center">
          <input
            type="email"
            onChange={(e) => emailOnChange(e)}
            className="rounded-2xl px-2 py-1 w-full text-black md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md
            focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="Email"
          ></input>
          <input
            type="password"
            onChange={(e) => passOnChange(e)}
            className="rounded-2xl px-2 py-1 w-full text-black md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md
            focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="Password"
          ></input>
          <button className="rounded-2xl m-2 text-white bg-blue-500 w-2/5 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transitioon duration-200 ease-in">
            Sign In
          </button>
        </div>

        <div className="flex mb-2 items-center justify-center">
          <img
            className="hover:cursor-pointer"
            alt="google sign"
            src={googleButton}
            onClick={(e) => { googleLogin(e) }}
          ></img>
        </div>

        {/* Toogle */}
        <div className="inline-block border-[1px] justify-center w-20 border-blue"></div>
        <p
          className="text-white mt-4 mb-4 text-sm"
          onClick={(e) => setIsLogin(false)}
        >
          Don't have an account?
        </p>
      </div>
    </div>
  );
}

export default Login2Form;
