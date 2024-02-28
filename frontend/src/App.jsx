// import logo from "/logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import StartPage from "./pages/start-page.jsx";
import OrgRegisterPage from "./pages/org-register-page.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {}
        <Route exact path="/" element={<StartPage />} />

        {}
        <Route path="/register" element={<OrgRegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
