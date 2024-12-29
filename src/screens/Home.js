import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const QuickActions = [
    { name: "Convert", icon: "/convert.png", path: "https://exchange-dusky.vercel.app" },
    { name: "Coupons", icon: "/coupons.png", path: "https://coupon-cashback.vercel.app/coupon-redemption" },
    { name: "Lending", icon: "/lending.png", path: "https://loans-lac.vercel.app" },
  ];

  const ExploreMore = [
    {
      name: "Recurring Payments",
      icon: "/marketplace.png",
      path: "https://recurring-iota.vercel.app/",
    },
    { name: "Market Place", icon: "/recurring.png", path: "https://marketplace-nine-psi.vercel.app" },
    {
      name: "Token Launchpad",
      icon: "/convert.png",
      path: "http://token-launch-alpha.vercel.app",
    }
  ];

  return (
    <div
      className="fixed inset-0 bg-cover flex flex-col items-center justify-start overflow-hidden"
      style={{
        backgroundImage: 'url("/background.png")',
        backgroundColor: "#0B062B",
      }}
    >
      <div
        className="w-full h-28 flex items-center justify-between px-4"
        style={{
          background: "linear-gradient(to bottom, #32D8F9, #030016)",
          borderBottomLeftRadius: "1rem",
          borderBottomRightRadius: "1rem",
          opacity: 0.9,
          border: "2px solid rgba(50, 216, 249, 0.25)",
        }}
      >
        <div className="text-left text-white">
          <p className="text-lg font-bold">Vault-X</p>
          <p className="text-sm"></p>
        </div>
        <div className="text-right text-white">
          <p className="text-sm">ETHEREUM</p>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div>
          <h2 className="text-xl font-bold text-gradient mt-12 text-center">
            Quick Actions
          </h2>
          <div className="flex justify-center items-center mt-2 space-x-4">
            {QuickActions.map((page, index) => (
              <div
                key={index}
                className="hexagon-container"
                onClick={() => window.location.href=page.path}
              >
                <svg viewBox="0 0 100 100" className="hexagon">
                  <polygon
                    points="50,1 90,25 90,75 50,99 10,75 10,25"
                    fill="url(#grad1)"
                    transform="rotate(90 50 50)"
                  />
                  <defs>
                    <radialGradient
                      id="grad1"
                      cx="50%"
                      cy="50%"
                      r="50%"
                      fx="50%"
                      fy="50%"
                    >
                      <stop
                        offset="50%"
                        style={{ stopColor: "#AEF2FF", stopOpacity: 1 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#32D8F9", stopOpacity: 1 }}
                      />
                    </radialGradient>
                  </defs>
                </svg>
                <img src={page.icon} alt={page.name} className="icon" />
                <p className="text-white mt-1 text-center">{page.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="w-full h-[2px] mt-12"
          style={{
            backgroundColor: "#32D8F9",
          }}
        ></div>
        <div>
          <h2 className="text-xl font-bold text-gradient mt-8 text-center">
            Explore More
          </h2>
          <div className="flex justify-center items-center mt-2 space-x-4">
            {ExploreMore.map((page, index) => (
              <div
                key={index}
                className="hexagon-container"
                onClick={() => window.location.href=page.path}
              >
                <svg viewBox="0 0 100 100" className="hexagon">
                  <polygon
                    points="50,1 90,25 90,75 50,99 10,75 10,25"
                    fill="url(#grad1)"
                    transform="rotate(90 50 50)"
                  />
                  <defs>
                    <radialGradient
                      id="grad1"
                      cx="50%"
                      cy="50%"
                      r="50%"
                      fx="50%"
                      fy="50%"
                    >
                      <stop
                        offset="50%"
                        style={{ stopColor: "#AEF2FF", stopOpacity: 1 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#32D8F9", stopOpacity: 1 }}
                      />
                    </radialGradient>
                  </defs>
                </svg>
                <img src={page.icon} alt={page.name} className="icon" />
                <p className="text-white mt-1 text-center">{page.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="w-full h-14 flex items-center justify-center absolute bottom-0"
        style={{
          backgroundColor: "#090427",
          boxShadow:
            "0px -4px 10px rgba(0, 0, 0, 0.5), 0px -4px 20px rgba(50, 216, 249, 0.2)",
        }}
      >
        <img
          src="/qr button.png"
          width="90"
          alt="Centered Icon"
          className="absolute top-0 transform -translate-y-1/2"
          onClick={() => window.location.href="https://qr-payments3.vercel.app/qrpayments"}
        />
      </div>
    </div>
  );
};

export default Home;
