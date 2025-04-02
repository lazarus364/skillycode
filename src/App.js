import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import EmailSent from "./pages/EmailSent";
import SignUpSuccess from "./pages/SignUpSuccess";
import InstructorDashboard from "./pages/InstructorDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/email-sent" element={<EmailSent />} />
        <Route path="/signup-success" element={<SignUpSuccess />} />
        <Route path="/dashboard" element={<InstructorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
