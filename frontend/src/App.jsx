import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import StartPage from "./pages/start-page.jsx";
import OrgRegisterPage from "./pages/org-register-page.jsx";
import UserRegisterPage from "./pages/user-register-page.jsx";
import SignInPage from "./pages/sign-in-page.jsx";
import Dashboard from "./pages/dashboard.jsx";
import SignInUserPage from "./pages/sign-in-user-page.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {}
        <Route exact path="/" element={<StartPage/>} />

        {}
        <Route path="/register" element={<OrgRegisterPage />} />
        <Route path="/register-user" element={<UserRegisterPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-in-user" element={<SignInUserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
