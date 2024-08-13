import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


const WelcomeScreen = () => {
  const { currentUser, logout} = useAuth();
  const navigate = useNavigate();
  
  async function handleLogout(){
    try {
      await logout();
      navigate("/");
    } catch (e){
      alert(e)
    }
  }


    return (
      <div className="h-screen bg-gradient-to-r from-indigo-500">
        <div className="h-full">
          <div className="flex flex-wrap justify-center pt-5">
            {currentUser.email}
          </div>
          <div className="flex flex-wrap justify-center" >
            <button
                  type="button"
                  className="rounded bg-sky-600 px-7 py-1 text-sm font-medium uppercase leading-normal text-white shadow-sky-3 transition duration-150 ease-in-out hover:bg-sky-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2"
                  onClick={handleLogout}
                >
                  Logout
                </button>
            </div>
        </div>
      </div>
    );
  };
  
  export default WelcomeScreen;
  