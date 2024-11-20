import React, { useState } from "react";
import { registerUser } from "../firebase/auth";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser(firstName, lastName, email, password);
      alert("Registered successfully!");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="bg-white p-8 rounded shadow-md w-96"
        onSubmit={handleRegister}
      >
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <input
          type="text"
          placeholder="First Name"
          className="border rounded w-full p-2 mb-4"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="border rounded w-full p-2 mb-4"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="border rounded w-full p-2 mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded w-full p-2 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-500 text-white w-full py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;