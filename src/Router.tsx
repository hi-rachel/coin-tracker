import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
// import Chart from "./routes/Chart";
// import Price from "./routes/Price";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />}></Route>
        <Route path="/:coinId" element={<Coin />}>
          <Route path="chart" element={<Chart />}></Route>
          <Route path="price" element={<Price />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );

  function Chart() {
    return <h1>Chart</h1>;
  }

  function Price() {
    return <h1>Price</h1>;
  }
}
export default Router;
