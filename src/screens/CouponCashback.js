import React, { useState } from "react";
import { ethers } from "ethers";
import CouponRedemptionABI from "./CouponRedemptionABI.json"; // ABI of the smart contract
import "./styles.css"; // Import the CSS file

const CouponCashback = () => {
  const [couponCode, setCouponCode] = useState("");
  const [isRedeeming, setIsRedeeming] = useState(false);
  const [cashback, setCashback] = useState(0);
  const [error, setError] = useState("");
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const transactionprice = 100000000000000;
  const coupons = {
    SAVE20: 20,
    BUY10: 10,
  };

  const contractAddress = "0xA22a7A0b3ae401E20Fc2863C7b2D09ca039b0EcF"; // Update with your contract address

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("Please install MetaMask!");
        return;
      }
      await window.ethereum.request({ method: "eth_requestAccounts" });
      setIsWalletConnected(true);
      alert("Wallet connected successfully!");
    } catch (err) {
      alert("Wallet connection failed: " + err.message);
    }
  };

  const redeemCoupon = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    const cashbackRate = coupons[couponCode.toUpperCase()];
    if (!cashbackRate) {
      setError("Invalid coupon code!");
      return;
    }

    try {
      setIsRedeeming(true);
      setError(""); // Clear any previous error

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        CouponRedemptionABI,
        signer
      );

      const userAddress = await signer.getAddress();

      // Get wallet balance before redemption
      const balanceBefore = await provider.getBalance(userAddress);
      console.log(
        "Balance Before Redemption:",
        ethers.utils.formatEther(balanceBefore),
        "ETH"
      );

      // Call redeemCoupon on the contract
      const tx = await contract.redeemCoupon(
        couponCode.toUpperCase(),
        transactionprice
      );
      console.log("Transaction Sent:", tx.hash);

      await tx.wait(); // Wait for the transaction to be mined

      // Get wallet balance after redemption
      const balanceAfter = await provider.getBalance(userAddress);
      console.log(
        "Balance After Redemption:",
        ethers.utils.formatEther(balanceAfter),
        "ETH"
      );

      // Calculate the cashback received
      const cashbackReceived = balanceAfter.sub(balanceBefore);
      console.log(
        "Cashback Received:",
        ethers.utils.formatEther(cashbackReceived),
        "ETH"
      );

      setCashback(ethers.utils.formatEther(cashbackReceived)); // Set cashback after redemption
      alert(
        `Coupon ${couponCode} redeemed successfully! Cashback: ${ethers.utils.formatEther(
          cashbackReceived
        )} ETH.`
      );
    } catch (err) {
      console.error("Error occurred in redeemCoupon:", {
        code: err.code,
        message: err.message,
        data: err.data,
        stack: err.stack,
      });

      // Handling specific error case for no available coupons
      if (err.code === -32603) {
        alert("Sorry, the coupons are over.");
      } else if (
        err.code === -32603 &&
        err.message.includes("revert Coupon already redeemed")
      ) {
        setError("This coupon has already been redeemed.");
      } else {
        setError(err.message || "An error occurred during redemption.");
      }
    } finally {
      setIsRedeeming(false); // Set redeeming state to false once done
    }
  };

  const couponsArray = [
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

export default CouponCashback;
