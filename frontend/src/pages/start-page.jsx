import "./start-page.css";

import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button.jsx";
import Form from "../components/common/form.jsx";

import Navbar from "../components/start-page-navbar.jsx";

export default function StartPage() {
  const navigate = useNavigate();
  const fields = [
    { name: 'username', label: 'Username', type: 'text', placeholder: 'Enter your username' },
    { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' },
  ];

  const handleSubmit = (formData) => {

    console.log('Form submitted with data:', formData);
  };
  return (
    <div className="background">
      <Navbar></Navbar>
      <div className="start-main-page">
        <div className="start-left-container">
          <div className="start-main-header">
            <h1>TEAMFINDER</h1>
            <h2>Uniting Skills, Building Teams</h2>
            <h4>
              Discover your perfect project team effortlessly with TeamFinder!
            </h4>
          </div>

          <div className="start-create-org">
            <h2>Launch Your Organization's Journey</h2>

    
            <Button onClick={() => navigate("/register")}>
              Create an Organisation
            </Button>

          </div>
          
        </div>

        <div className="start-right-container"></div>
      </div>
    </div>
  );
}
