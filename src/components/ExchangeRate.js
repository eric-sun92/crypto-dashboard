import React, { useContext } from "react";
import { RateContext } from "../App";

const ExchangeRate = () => {
  const { exchangeRate, primaryCurrency, secondaryCurrency } =
    useContext(RateContext);

  return (
    <div className="exchange-rate">
      <h3>Exchange Rate</h3>
      <h1>{exchangeRate}</h1>
      <p>
        {primaryCurrency} to {secondaryCurrency}
      </p>
    </div>
  );
};

export default ExchangeRate;
