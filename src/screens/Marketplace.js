import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Marketplace = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPolygon, setSelectedPolygon] = useState(null);
  const navigate = useNavigate();
  
  const polygons = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
  ];

  const handlePolygonClick = (id) => {
    setSelectedPolygon(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPolygon(null);
  };

  return (
    <>
      <style>
        {`
          body {
            padding: 0;
            margin: 0;
          }
        `}
      </style>
      <div
        className="min-h-screen bg-cover flex flex-col items-center justify-center"
        style={{
          backgroundImage: 'url("/background.png")',
          backgroundColor: "#0B062B",
        }}
      >
        <div className="relative w-full flex items-center justify-center mt-4">
          <img
            src="/arrowicon.png"
            alt="Icon"
            className="absolute left-4 w-6 h-6"
            onClick={() => navigate("/home")}
          />
          <h1 className="text-xl font-bold text-gradient">Market Place</h1>
        </div>
        <div className="flex flex-wrap items-center justify-center my-8 flex-grow">
          <svg height="0" width="0">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#AEF2FF", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#32D8F9", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
          </svg>
          {polygons.map((polygon) => (
            <div key={polygon.id} className="m-2 flex flex-col items-center">
              <svg
                height="150"
                width="150"
                onClick={() => handlePolygonClick(polygon.id)}
              >
                <polygon
                  points="75,15 135,45 135,105 75,135 15,105 15,45"
                  style={{
                    fill: "url(#grad1)",
                    stroke: "purple",
                    strokeWidth: 1,
                    transform: "rotate(90deg)",
                    transformOrigin: "50% 50%",
                  }}
                />
                <image
                  href="/ethereum.png"
                  x="40"
                  y="40"
                  height="70"
                  width="70"
                />
              </svg>
              <p className="text-white mt-1">Ethereum</p>
            </div>
          ))}
        </div>
        <p className="text-lg text-white">Tap to Reveal</p>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div
              className="bg-cover w-4/5 h-3/4 p-4 rounded-lg relative shadow-lg"
              style={{
                backgroundImage: 'url("/background.png")',
                backgroundColor: "#0B062B",
                boxShadow: "0 4px 8px rgba(255, 255, 255, 0.2)",
              }}
            >
              <div className="flex items-center mb-4">
                <img
                  src="/arrowicon.png"
                  alt="Icon"
                  className="w-6 h-6 mr-2"
                  onClick={closeModal}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold text-gradient">Ethereum</h2>
                <svg height="200" width="200">
                  <polygon
                    points="100,20 180,60 180,140 100,180 20,140 20,60"
                    style={{
                      fill: "url(#grad1)",
                      stroke: "purple",
                      strokeWidth: 1,
                      transform: "rotate(90deg)",
                      transformOrigin: "50% 50%",
                    }}
                  />
                  <image
                    href="/ethereum.png"
                    x="65"
                    y="65"
                    height="70"
                    width="70"
                  />
                </svg>
              </div>
              <div
                className="rounded-lg p-4"
                style={{
                  background:
                    "linear-gradient(45deg, #AEF2FF 0%, #32D8F9 100%)",
                  opacity: 0.3,
                }}
              >
                <div className="flex justify-between">
                  <p className="text-black font-bold">Chill Guy</p>
                  <p className="text-black">80ETH</p>
                </div>
                <p className="text-black">
                  Stake: <span className="font-bold">500</span>
                </p>
                <p className="text-black">
                  Creator: <span className="font-bold">0xABC</span>
                </p>
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                <button
                  className="px-4 py-2 bg-blue-500 text-black rounded"
                  style={{
                    background: "linear-gradient(to right, #32D8F9, #B9F3FF)",
                  }}
                  onClick={() => {}}
                >
                  Buy
                </button>
                <button
                  className="px-4 py-2 bg-green-500 text-black rounded"
                  style={{
                    background: "linear-gradient(to right, #32D8F9, #B9F3FF)",
                  }}
                  onClick={() => {}}
                >
                  Mint
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Marketplace;
