import React from "react";
import { useNavigate } from "react-router-dom";

const Root = () => {
  const navigate = useNavigate();

  return (
    <div
      className="fixed inset-0 bg-cover flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url("/background.png")',
        backgroundColor: "#0B062B",
      }}
    >
      <img src="/VaultX.png" alt="Center Image" className="mb-4 w-1/2" />
      <button
        className="px-4 py-2 text-black rounded-lg text-lg"
        style={{ background: "linear-gradient(to right, #32D8F9, #B9F3FF)" }}
        onClick={() => {navigate("/home")}}
      >
        <div className="flex items-center">
          <span className="mr-2">Welcome</span>
          <img src="/link icon.png" alt="Icon" className="w-4 h-4" />
        </div>
      </button>
    </div>
  );
};

export default Root;
