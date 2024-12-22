import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Coupons = () => {
  const navigate = useNavigate();

  const coupons = [
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
    console.log(`Polygon ${id} clicked`);
  };

  return (
    <div
      className="fixed inset-0 bg-cover flex flex-col items-center justify-center overflow-hidden"
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
        <h1 className="text-xl font-bold text-gradient">Coupons & Cashbacks</h1>
      </div>
      <div className="flex flex-wrap items-center justify-center my-8">
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
        {coupons.map((polygon) => (
          <svg
            key={coupons.id}
            height="100"
            width="100"
            className="m-2"
            onClick={() => handlePolygonClick(polygon.id)}
          >
            <polygon
              points="50,10 90,30 90,70 50,90 10,70 10,30"
              style={{ fill: "url(#grad1)", stroke: "purple", strokeWidth: 1 }}
            />
          </svg>
        ))}
      </div>
      <p className="text-lg text-white">Tap to Reveal</p>
    </div>
  );
};

export default Coupons;
