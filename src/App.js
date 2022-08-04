import React, { useEffect, useState } from "react";
import CurrencyConverter from "./components/CurrencyConverter";
import NewsFeed from "./components/NewsFeed";
import axios from "axios";

export const RateContext = React.createContext();

const App = () => {
  const [primaryCurrency, setPrimaryCurrency] = useState("BTC");
  const [secondaryCurrency, setSecondaryCurrency] = useState("BTC");

  const [primaryAmount, setPrimaryAmount] = useState(1);
  const [secondaryAmount, setSecondaryAmount] = useState();

  const [exchangeRate, setExchangeRate] = useState();

  const handleChange = (type, e) => {
    if (type === "primary") {
      setPrimaryCurrency(e.target.value);
    } else if (type === "secondary") {
      setSecondaryCurrency(e.target.value);
    }
  };

  const handleChangeAmount = (e) => {
    setPrimaryAmount(e.target.value);
  };

  const convert = () => {
    const options = {
      method: "GET",
      url: "http://localhost:8000/convert",
      params: {
        from_currency: primaryCurrency,
        to_currency: secondaryCurrency,
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setExchangeRate(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    setSecondaryAmount(primaryAmount * exchangeRate);
  }, [exchangeRate]);

  return (
    <div className="app">
      <RateContext.Provider
        value={{
          exchangeRate: exchangeRate,
          primaryCurrency: primaryCurrency,
          secondaryCurrency: secondaryCurrency,
        }}
      >
        <CurrencyConverter
          pimaryCurrency={primaryCurrency}
          secondaryCurrency={secondaryCurrency}
          primaryAmount={primaryAmount}
          secondaryAmount={secondaryAmount}
          handleChange={handleChange}
          handleChangeAmount={handleChangeAmount}
          convert={convert}
        />
      </RateContext.Provider>
      <NewsFeed />
    </div>
  );
};

export default App;
