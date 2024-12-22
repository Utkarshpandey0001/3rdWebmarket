import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Lending = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    loanAmount: "",
    collateralId: "",
    collateralContract: "",
    loanDuration: "",
    lenderAddress: "",
  });

  const handleChange = () => {};

  const handleSubmit = () => {};

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
        <h1 className="text-xl font-bold text-gradient">Loan Request</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center space-y-4 mt-8 w-full px-4"
      >
        <div className="w-3/4">
          <label className="input-label" htmlFor="loanAmount">
            Loan Amount
          </label>
          <input
            type="text"
            id="loanAmount"
            name="loanAmount"
            placeholder="Enter loan amount"
            className="input-field"
            value={formData.loanAmount}
            onChange={handleChange}
          />
        </div>
        <div className="w-3/4">
          <label className="input-label" htmlFor="collateralId">
            Collateral ID
          </label>
          <input
            type="text"
            id="collateralId"
            name="collateralId"
            placeholder="Enter Collateral ID"
            className="input-field"
            value={formData.collateralId}
            onChange={handleChange}
          />
        </div>
        <div className="w-3/4">
          <label className="input-label" htmlFor="collateralContract">
            Collateral Contract
          </label>
          <input
            type="text"
            id="collateralContract"
            name="collateralContract"
            placeholder="Enter Collateral Contract"
            className="input-field"
            value={formData.collateralContract}
            onChange={handleChange}
          />
        </div>
        <div className="w-3/4">
          <label className="input-label" htmlFor="loanDuration">
            Loan Duration (days)
          </label>
          <input
            type="text"
            id="loanDuration"
            name="loanDuration"
            placeholder="Enter Loan Duration in days"
            className="input-field"
            value={formData.loanDuration}
            onChange={handleChange}
          />
        </div>
        <div className="w-3/4">
          <label className="input-label" htmlFor="lenderAddress">
            Lender Address
          </label>
          <input
            type="text"
            id="lenderAddress"
            name="lenderAddress"
            placeholder="Enter Lender Address"
            className="input-field"
            value={formData.lenderAddress}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-black rounded-lg text-2xl mb-4"
          style={{ background: "linear-gradient(to right, #32D8F9, #B9F3FF)" }}
        >
          Request Loan
        </button>
      </form>
    </div>
  );
};

export default Lending;
