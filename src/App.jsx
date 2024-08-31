import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { PhoneList } from "./PhoneList";
import { LoginPage } from "./LoginPage";
import { useNavigate } from "react-router-dom";
import { SignUpPage } from "./SignUpPage";
import { ForgetPass } from "./Forget";
import { VerifyOtp } from "./VerifyOtp";
import { NewPassword } from "./newPassword";
import { EmailVerification } from "./EmailVerification";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      {/* <nav>
        <button onClick={() => navigate("/login")}>login</button>
      </nav> */}
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/forgetpassword" element={<ForgetPass />} />
        <Route path="/verifyotp" element={<VerifyOtp />} />
        <Route path="/mailverification" element={<EmailVerification />} />
        <Route path="/setpassword" element={<NewPassword />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/mobiles" element={<PhoneList />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  return <div>welcome to Mobile App</div>;
};

export default App;
