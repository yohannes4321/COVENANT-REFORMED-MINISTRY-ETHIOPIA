import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/index";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import ForgetpasswordPage from "./pages/forgetpassword";
import Resetpasswordpage from "./pages/resetpassword";
 
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
<Route path="/signin" element={<SigninPage />} />
<Route path="/signup" element={<SignupPage />} />
<Route path="/forgot_password" element={<ForgetpasswordPage />} />
<Route path="/reset_password" element={<Resetpasswordpage />} />

      </Routes>
    </Router>
  );
}

export default App;
