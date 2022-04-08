import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [budget, setBudget] = useState(0);
  const [option, setOptions] = useState(0);
  const onChange = (event) => setBudget(event.target.value);
  const selectedCoin = (event) => {
    setOptions(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>the Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <p>현재 예산을 적어주세요(USD 기준)</p>
      <input onChange={onChange} value={budget} type="text" />
      <p>어떤 코인을 구매하기 원하시나요?</p>
      <select onChange={selectedCoin}>
        {coins.map((coin, index) => (
          <option key={index}>{coin.name}</option>
        ))}
      </select>
      <p>당신이 살 수 있는 코인은 : {option > 0 ? budget / option : null}</p>
    </div>
  );
}

export default App;
