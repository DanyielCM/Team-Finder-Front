import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import StartPage from "./pages/Auth/StartPage.jsx";
import OrgRegisterPage from "./pages/Auth/OrgRegisterPage.jsx";
import UserRegisterPage from "./pages/Auth/UserRegisterPage.jsx"
import SignInPage from "./pages/Auth/LoginPage.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import PrivateRoute from "./router/Route.jsx";
import {faHouse, faUser, faFolderOpen, faUsers, faEnvelope, faGear, faBell,faArrowRightFromBracket  } from "@fortawesome/free-solid-svg-icons";

library.add( faHouse, faUser, faFolderOpen, faUsers, faEnvelope, faGear, faBell, faArrowRightFromBracket);



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

        <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
       

      </Routes>
    </BrowserRouter>
  );
}

export default App;