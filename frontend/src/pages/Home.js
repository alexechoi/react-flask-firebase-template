import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-window text-center">
      <h1 className="text-4xl font-bold mt-4 mb-4">Welcome</h1>
      <p className="text-lg text-gray-700">
        This is the home page of your React + Flask + Firebase application!
      </p>
    </div>
  );
};

export default Home;
