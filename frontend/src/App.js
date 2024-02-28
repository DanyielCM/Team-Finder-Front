import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import StartPage from "./pages/start-page.js";
import OrgRegisterPage from "./pages/org-register-page.js";

function App() {
  return (
    <div className="App">
      <Routes>
        {}
        <Route exact path="/" element={<StartPage />} />

        {}
        <Route path="/register" element={<OrgRegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
