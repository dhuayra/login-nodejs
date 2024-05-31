import './App.css';
import LoginScreen from './Pages/Auth/Login';
import RegisterScreen from './Pages/Auth/Register';
import WelcomeScreen from './Pages/Welcome';

function App() {
  return (

    <div className="App">
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        {/* <LoginScreen /> */}
        {/* <RegisterScreen /> */}
        <WelcomeScreen />
      </div>
    </div>
  );
}

export default App;
