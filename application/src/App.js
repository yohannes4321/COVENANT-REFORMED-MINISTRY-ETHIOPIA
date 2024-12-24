import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/index";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import ForgetPassword from "./pages/forgetpassword";
import Resetpasswordpage from "./pages/resetpassword";
import AdminUpload from './pages/AdminUpload'; 
import Displaybook  from './pages/displaybookfinallast ';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
<Route path="/signin" element={<SigninPage />} />
<Route path="/signup" element={<SignupPage />} />
<Route path="/forgot_password" element={<ForgetPassword/>} />
<Route path="/reset_password/:id/:token" element={<Resetpasswordpage />} />
<Route path="/admin/upload" element={<AdminUpload />} /> 
<Route path="/books" element={<Displaybook />} />

      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
