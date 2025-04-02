import React from "react";

const SuccessMessage = ({ message, onClose }) => {
  return (
    <div className="text-center">
      <p className="text-green-600 font-semibold">✅ {message}</p>
      {onClose && (
        <button
          onClick={onClose}
          className="text-indigo-600 hover:underline mt-4"
        >
          Return to Login
        </button>
      )}
    </div>
  );
};

export default SuccessMessage;
