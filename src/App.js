import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Coupons from "./screens/Coupons";
import Marketplace from "./screens/Marketplace";
import Lending from "./screens/Lending";
import Root from "./screens/Root";
import Home from "./screens/Home";


const App = () => {
  return (
    <Router>
      <div>
        <Routes>      
         {/* <Route path="/qrpayments" element={<QRPayment />} /> */}
          {/* Route for Coupon Redemption */}
         {/* <Route path="/coupon-redemption" element={<CouponCashback />} />*/}
          <Route path="/" element={<Root />} />
          <Route path="/home" element={<Home />} />
          {/*<Route path="/coupons" element={<Coupons />} /> */}
          <Route path="/lending" element={<Lending />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/recurring" element={<Marketplace />} />


          <Route
            path="/about"
            element={
              <div>
                <h2>About Page</h2>
                <p>Details about the QR Payment feature will go here.</p>
              </div>
            }
          />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
