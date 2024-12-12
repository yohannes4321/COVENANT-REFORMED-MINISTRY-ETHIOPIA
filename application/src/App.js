import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/index";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import ForgetPassword from "./pages/forgetpassword";
import Resetpasswordpage from "./pages/resetpassword";
import AdminUpload from './pages/AdminUpload'; 
import UserBooks  from './pages/UserBooks';
 
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
<Route path="/signin" element={<SigninPage />} />
<Route path="/signup" element={<SignupPage />} />
<Route path="/forgot_password" element={<ForgetPassword/>} />
<Route path="/reset_password" element={<Resetpasswordpage />} />
<Route path="/admin/upload" element={<AdminUpload />} /> 
<Route path="/books" element={<UserBooks />} />

      </Routes>
    </Router>
  );
}

export default App;
