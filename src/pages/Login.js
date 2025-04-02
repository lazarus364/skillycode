import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(""); // Stores error messages
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for instructor login
    const storedInstructor = JSON.parse(localStorage.getItem("instructor"));
    if (
      storedInstructor &&
      storedInstructor.email === formData.username &&
      storedInstructor.password === formData.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      alert("Instructor login successful!");
      navigate("/dashboard"); // Redirect to Instructor Dashboard
      return;
    }

    // Check for regular user login
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser || formData.username !== storedUser.username) {
      setError("Username not found! Please sign up first.");
      return;
    }

    if (formData.password !== storedUser.password) {
      setError("Incorrect password! Try again.");
      return;
    }

    // Successful regular user login
    alert("Login successful!");
    navigate("/dashboard"); // Redirect to dashboard or homepage
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl flex">
        {/* Left Side - Login Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Welcome back!
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Unlock Your Potential, One Assessment at a Time with{" "}
            <span className="font-bold text-indigo-600">SkillCode</span>. Get Started for Free.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Show Error Message */}
            {error && (
              <p className="text-red-500 text-center font-semibold">{error}</p>
            )}

            {/* Username Field */}
            <div className="mt-4">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
                onChange={handleChange}
                required
              />
            </div>

            {/* Password Field */}
            <div className="mt-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
                onChange={handleChange}
                required
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between mt-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="mr-2"
                />
                Remember me
              </label>

              <button
                type="button"
                className="text-indigo-600 hover:underline"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md mt-6 hover:bg-indigo-700 transition"
            >
              Login
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-indigo-600 hover:underline"
            >
              Sign up
            </button>
          </p>
        </div>

        {/* Right Side - Illustration */}
        <div className="hidden md:flex items-center justify-center w-1/2">
          <img
            src="https://via.placeholder.com/400" // Replace with your actual image URL
            alt="Login Illustration"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
