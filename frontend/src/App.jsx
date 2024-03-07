import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import StartPage from "./pages/Auth/start-page.jsx";
import OrgRegisterPage from "./pages/Auth/org-register-page.jsx";
import UserRegisterPage from "./pages/Auth/user-register-page.jsx";
import SignInPage from "./pages/Auth/sign-in-page.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faHouse, faUser, faFolderOpen, faUsers, faEnvelope, faGear, faBell,faArrowRightFromBracket  } from "@fortawesome/free-solid-svg-icons";

library.add( faHouse, faUser, faFolderOpen, faUsers, faEnvelope, faGear, faBell, faArrowRightFromBracket);
import SignInUserPage from "./pages/sign-in-user-page.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {}
        <Route exact path="/" element={<StartPage />} />
        {}
        <Route path="/register" element={<OrgRegisterPage />} />
        <Route path="/register-user" element={<UserRegisterPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-in-user" element={<SignInUserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
