import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../components/Home";
import Courses from "../components/Courses";
import Grades from "../components/Grades";
import Reports from "../components/Reports";
import Assessments from "../components/Assessments";

const InstructorDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  // Instructor Data
  const instructor = {
    name: "T. Janny",
    role: "Instructor",
    courses: 2,
    learners: 2,
    completionRate: "80%",
    trainingTime: "15h",
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-800 text-white flex flex-col p-5">
        <h2 className="text-xl font-bold mb-6">Skillcode</h2>
        <nav className="space-y-4">
          <button
            className={`flex items-center space-x-2 ${
              activeTab === "home" ? "font-bold text-indigo-300" : ""
            }`}
            onClick={() => setActiveTab("home")}
          >
            <span>🏠</span> <span>Home</span>
          </button>
          <button
            className={`flex items-center space-x-2 ${
              activeTab === "courses" ? "font-bold text-indigo-300" : ""
            }`}
            onClick={() => setActiveTab("courses")}
          >
            <span>📚</span> <span>Courses</span>
          </button>
          <button
            className={`flex items-center space-x-2 ${
              activeTab === "grades" ? "font-bold text-indigo-300" : ""
            }`}
            onClick={() => setActiveTab("grades")}
          >
            <span>📝</span> <span>Grades</span>
          </button>
          <button
            className={`flex items-center space-x-2 ${
              activeTab === "reports" ? "font-bold text-indigo-300" : ""
            }`}
            onClick={() => setActiveTab("reports")}
          >
            <span>📊</span> <span>Reports</span>
          </button>
          <button
            className={`flex items-center space-x-2 ${
              activeTab === "assessments" ? "font-bold text-indigo-300" : ""
            }`}
            onClick={() => setActiveTab("assessments")}
          >
            <span>📝</span> <span>Assessments</span>
          </button>
        </nav>
        <button
          onClick={handleLogout}
          className="mt-auto bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        {/* Header */}
        <header className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
          <h1 className="text-2xl font-bold">Welcome {instructor.name}</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="border px-3 py-1 rounded-md focus:ring-2 focus:ring-indigo-400"
            />
            <span>💬</span>
            <span>👤</span>
            <div className="bg-indigo-600 text-white px-3 py-1 rounded-md">
              {instructor.role}
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Content Switch */}
        <div className="mt-6">
          {activeTab === "home" && <Home instructor={instructor} />}
          {activeTab === "courses" && <Courses />}
          {activeTab === "grades" && <Grades />}
          {activeTab === "reports" && <Reports />}
          {activeTab === "assessments" && <Assessments />} {/* ✅ Added */}
        </div>
      </main>
    </div>
  );
};

export default InstructorDashboard;
