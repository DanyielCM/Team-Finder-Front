import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import StartPage from "./pages/start-page.jsx";
import OrgRegisterPage from "./pages/org-register-page.jsx";
import UserRegisterPage from "./pages/user-register-page.jsx";
import SignInPage from "./pages/sign-in-page.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        {}
        <Route exact path="/" element={<StartPage />} />

        {}
        <Route path="/register" element={<OrgRegisterPage />} />
        <Route path="/register-user" element={<UserRegisterPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;
