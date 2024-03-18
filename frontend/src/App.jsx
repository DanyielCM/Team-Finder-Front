import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import StartPage from "./pages/Auth/StartPage.jsx";
import OrgRegisterPage from "./pages/Auth/OrgRegisterPage.jsx";
import UserRegisterPage from "./pages/Auth/UserRegisterPage.jsx"
import SignInPage from "./pages/Auth/LoginPage.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import PrivateRoute from "./router/route.jsx";
import {faHouse, faUser, faFolderOpen, faUsers, faEnvelope, faGear, faBell,faArrowRightFromBracket  } from "@fortawesome/free-solid-svg-icons";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api'
import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
library.add( faHouse, faUser, faFolderOpen, faUsers, faEnvelope, faGear, faBell, faArrowRightFromBracket);
import "primereact/resources/themes/lara-light-indigo/theme.css";



function App() {

  return (
    
    <PrimeReactProvider>
   
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
</PrimeReactProvider>
   
  );
}

export default App;