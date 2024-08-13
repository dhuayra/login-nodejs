import "./App.css";
import LoginScreen from "./Pages/Auth/Login";
import RegisterScreen from "./Pages/Auth/Register";
import WelcomeScreen from "./Pages/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route exact path="/register" element={<RegisterScreen />} />
    //     <Route exact path="/login" element={<LoginScreen />} />
    //   </Routes>
    // </Router>
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginScreen />} />
          <Route exact path="/register" element={<RegisterScreen />} />
          <Route exact path="/welcome" element={<WelcomeScreen />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
