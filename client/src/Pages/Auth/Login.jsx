import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";


const LoginScreen = () => {

  const navigate = useNavigate();
  const { login, signInWithGoogle } = useAuth();

  /**Email and Password */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/welcome")
    } catch (error) {
      alert(error);
    }
  }

  /**Google Auth */
  async function handleGoogleSignIn(e) {
    e.preventDefault();
    try {
      await signInWithGoogle();
      navigate("/welcome")
    } catch (error) {
      alert.error(error.message);
    }
  };
  return (
    <div className="App">
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <div className="h-screen px-4 py-12 lg:px-60 flex items-center justify-center">
          <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full max-w-6xl">
            <div className="mb-12 md:mb-0 md:w-9/12 lg:w-6/12 xl:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full hidden lg:block"
                alt="Sample image"
              />
            </div>

            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow mb-12 md:mb-0 md:w-12/12 lg:w-5/12 xl:w-5/12">
              <form >
                <div className="text-center mb-6">
                  <p className="text-lg font-semibold">SIGN IN</p>
                </div>

                <div className="relative mb-6">
                  <input
                    type="text"
                    id="email"
                    className="peer block w-full rounded-lg border-b-2 bg-transparent px-3 py-2 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:border-sky-500 focus:ring-0"
                    placeholder=" "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 -top-3 text-neutral-500 transition-all duration-200 ease-out 
                        peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:text-base 
                        peer-focus:-top-4 peer-focus:left-3 peer-focus:text-sky-500 peer-focus:text-sm"
                  >
                    Email
                  </label>
                </div>

                <div className="relative mb-6">
                  <input
                    type="password"
                    id="password"
                    className="peer block w-full rounded-lg border-b-2 bg-transparent px-3 py-2 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:border-sky-500 focus:ring-0"
                    placeholder=" "
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-3 -top-3 text-neutral-500 transition-all duration-200 ease-out 
                        peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:text-base 
                        peer-focus:-top-4 peer-focus:left-3 peer-focus:text-sky-500 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>

                <div className="text-center mx-5 lg:text-left">
                  <button
                    type="button"
                    className="inline-block w-full rounded bg-sky-500 px-7 py-2 text-sm font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out hover:bg-sky-600 focus:outline-none"
                    onClick={handleLogin}
                  >
                    Login
                  </button>

                  <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-32 h-px my-5 mx-2 bg-gray-300 border-0" />
                    <p>or</p>
                    <hr className="w-32 h-px my-5 mx-2 bg-gray-300 border-0" />
                  </div>

                  <button
                    onClick={handleGoogleSignIn}
                    type="button"
                    className=" w-full justify-center bg-gray-100 shadow-md hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2">
                    <img src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="Google" className="w-5 h-5" />
                    Sign in with Google
                  </button>

                  <p className="mt-10 text-sm font-semibold">
                    Don't have an account?
                    <Link
                      to="/register"
                      className="text-sky-600 transition duration-150 ease-in-out hover:text-sky-700"
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
