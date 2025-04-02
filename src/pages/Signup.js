import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    course: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (formData.role === "Instructor") {
      // Save instructor details to localStorage
      const instructorData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        password: formData.password,
      };
      localStorage.setItem("instructor", JSON.stringify(instructorData));
      alert("Instructor signup successful! Please log in.");
      navigate("/login");
      return;
    }

    // Save entire formData in localStorage for other roles
    localStorage.setItem("user", JSON.stringify(formData));
    navigate("/signup-success", { state: { email: formData.email } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl flex">
        <div className="hidden md:flex items-center justify-center w-1/2">
          <img
            src="https://www.google.com/imgres?q=svg%20image%20signup%20image%20illustration&imgurl=https%3A%2F%2Fcdni.iconscout.com%2Fillustration%2Fpremium%2Fthumb%2Fsign-up-login-illustration-download-in-svg-png-gif-file-formats--user-registration-register-form-create-account-or-pack-interface-illustrations-3723273.png&imgrefurl=https%3A%2F%2Ficonscout.com%2Fillustrations%2Fsign-up&docid=rqWFIj5o-VTtuM&tbnid=zofSxzsLRz9hdM&vet=12ahUKEwivn5SNjrmMAxWDSvEDHVsHNeQQM3oECEgQAA..i&w=639&h=450&hcb=2&ved=2ahUKEwivn5SNjrmMAxWDSvEDHVsHNeQQM3oECEgQAA"
            alt="Signup Illustration"
            className="w-full"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Create an Account
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mt-4">
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <select
                name="course"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
                onChange={handleChange}
                required
              >
                <option value="">Choose Course</option>
                <option value="Web Development">Web Development</option>
                <option value="Data Science">Data Science</option>
                <option value="AI & ML">AI & ML</option>
              </select>

              <select
                name="role"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
                onChange={handleChange}
                required
              >
                <option value="">Choose Role</option>
                <option value="Student">Student</option>
                <option value="Instructor">Instructor</option>
              </select>
            </div>

            <div className="mt-4">
              <input
                type="password"
                name="password"
                placeholder="Type password"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mt-4">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md mt-6 hover:bg-indigo-700 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-indigo-600 hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
