import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AccountLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    navigate("/");
  };

  return (
    <div className="flex py-20 items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-2 focus:outline-purple-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="text-gray-700 font-semibold mb-2 flex items-center justify-between">
              <p className="text-start">Password</p>
              <a className="text-purple-600 font-light hover:underline text-sm text-end">
                Forgot password?
              </a>
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-2 focus:outline-purple-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Login
          </button>

          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <a className="text-purple-600 hover:underline">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AccountLogin;
