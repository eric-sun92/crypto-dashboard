import ExchangeRate from "./ExchangeRate";

const CurrencyConverter = (props) => {
  const {
    primaryCurrency,
    secondaryCurrency,
    handleChange,
    primaryAmount,
    secondaryAmount,
    handleChangeAmount,
    convert,
  } = props;

  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>
      <div className="input-box">
        <table>
          <tbody>
            <tr>
              <td>Primary Currency</td>
              <td>
                <input
                  type="number"
                  name="currency-amount-1"
                  value={primaryAmount}
                  onChange={(e) => handleChangeAmount(e)}
                />
              </td>
              <td>
                <select
                  value={primaryCurrency}
                  name="currency-option-1"
                  className="currency-options"
                  onChange={(e) => handleChange("primary", e)}
                >
                  {currencies.map((currency) => (
                    <option key={`${currency}1`}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Secondary Currency</td>
              <td>
                <input
                  type="number"
                  name="currency-amount-2"
                  value={secondaryAmount}
                  disabled
                />
              </td>
              <td>
                <select
                  value={secondaryCurrency}
                  name="currency-option-2"
                  className="currency-options"
                  onChange={(e) => handleChange("secondary", e)}
                >
                  {currencies.map((currency) => (
                    <option key={`${currency}2`}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={convert}>Convert</button>
      </div>
      <ExchangeRate></ExchangeRate>
    </div>
  );
};

export default CurrencyConverter;
