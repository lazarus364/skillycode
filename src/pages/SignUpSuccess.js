import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SignUpSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "your email";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🎉 Sign-Up Successful!</h2>
        <p className="text-gray-600">
          Welcome! We’ve sent a confirmation email to <strong>{email}</strong>. 
          Please check your inbox and verify your account to get started.
        </p>

        <img
          src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
          alt="Success"
          className="w-40 mx-auto my-6"
        />

        <button
          onClick={() => navigate("/login")}
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Go to Login
        </button>

        <p className="mt-4 text-gray-600">
          Didn’t receive the email?{" "}
          <span className="text-indigo-600 cursor-pointer hover:underline">
            Resend
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpSuccess;
