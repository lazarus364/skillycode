import React from "react";
import { useNavigate } from "react-router-dom";

const EmailSent = ({ email }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Email Sent!</h2>
        <p className="text-gray-600">
          We've sent an email to <strong>{email || "your email"}</strong>. Please check your inbox
          and click the received link to reset your password.
        </p>

        <img
          src="https://cdn-icons-png.flaticon.com/512/2281/2281162.png"
          alt="Email Sent"
          className="w-40 mx-auto my-6"
        />

        <button
          onClick={() => navigate("/login")}
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Login
        </button>

        <p className="mt-4 text-gray-600">
          Didn't receive the link?{" "}
          <span className="text-indigo-600 cursor-pointer hover:underline">
            Resend
          </span>
        </p>
      </div>
    </div>
  );
};

export default EmailSent;
