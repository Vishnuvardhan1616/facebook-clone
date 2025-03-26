import React from "react";

function Login({ onLogin }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-300">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-blue-600">Facebook Login</h2>
        <p className="text-gray-600 mb-4">Enter your details to continue</p>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={onLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
