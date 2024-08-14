import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { updateProfile } from "firebase/auth";

const RegisterScreen = () => {
  
  const navigate = useNavigate();
  const { currentUser, register } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(()=> {
    if (currentUser) {
      navigate("/")
    }
  }, [currentUser, navigate]);

  async function handleRegister(e){
    e.preventDefault();
    
    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      const userRegister = await register(email, password);
      /**Update or Register Name */
      const user = userRegister.user;
      await updateProfile(user, { displayName: name });
      
      navigate("/welcome");
    } catch (e) {
      alert(e.message);
    }
  }
    
  return (
    <div className="App">
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <div className="h-screen px-4 py-12 lg:px-60 flex items-center justify-center">
            <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full max-w-6xl">

              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow mb-12 md:mb-0 md:w-12/12 lg:w-5/12 xl:w-5/12">
                <form>
                  <div className="text-center mb-6">
                    <p className="text-lg font-semibold">SIGN UP</p>
                  </div>

                  <div className="relative mb-6" data-twe-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block w-full rounded-lg border-b-2 bg-transparent px-3 py-2 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:border-sky-500 focus:ring-0"
                      placeholder=" "
                      value={name} onChange={(e) => setName(e.target.value)}
                    />
                    <label
                      className="absolute left-3 -top-3 text-neutral-500 transition-all duration-200 ease-out 
                      peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:text-base 
                      peer-focus:-top-4 peer-focus:left-3 peer-focus:text-sky-500 peer-focus:text-sm"
                    >
                      Name
                    </label>
                  </div>

                  <div className="relative mb-6" data-twe-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block w-full rounded-lg border-b-2 bg-transparent px-3 py-2 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:border-sky-500 focus:ring-0"
                      placeholder=" "
                      value={email} onChange={(e) => setEmail(e.target.value)}

                    />
                    <label
                      className="absolute left-3 -top-3 text-neutral-500 transition-all duration-200 ease-out 
                      peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:text-base 
                      peer-focus:-top-4 peer-focus:left-3 peer-focus:text-sky-500 peer-focus:text-sm"
                    >
                      Email address
                    </label>
                  </div>

                  <div className="relative mb-6" data-twe-input-wrapper-init>
                    <input
                      type="password"
                      className="peer block w-full rounded-lg border-b-2 bg-transparent px-3 py-2 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:border-sky-500 focus:ring-0"
                      placeholder=" "
                      value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                    <label
                      className="absolute left-3 -top-3 text-neutral-500 transition-all duration-200 ease-out 
                      peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:text-base 
                      peer-focus:-top-4 peer-focus:left-3 peer-focus:text-sky-500 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>

                  <div className="relative mb-6" data-twe-input-wrapper-init>
                    <input
                      type="password"
                      className="peer block w-full rounded-lg border-b-2 bg-transparent px-3 py-2 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:border-sky-500 focus:ring-0"
                      placeholder=" "
                      value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <label
                      className="absolute left-3 -top-3 text-neutral-500 transition-all duration-200 ease-out 
                      peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:text-base 
                      peer-focus:-top-4 peer-focus:left-3 peer-focus:text-sky-500 peer-focus:text-sm"
                    >
                      Confirm Password
                    </label>
                  </div>

                  <div className="text-center lg:text-left">
                    <button
                      onClick={handleRegister}
                      type="button"
                      className="inline-block w-full rounded bg-emerald-500 px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2"
                    >
                      Register
                    </button>

                    <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                      <Link
                        to="/"
                        className="text-emerald-600 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                      >
                        ← Back</Link>
                    </p>
                  </div>
                </form>

              </div>

              <div className="mb-12 lg:mb-0 lg:w-6/12 hidden lg:block">
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="w-full "
                  alt="Sample image"
                />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
