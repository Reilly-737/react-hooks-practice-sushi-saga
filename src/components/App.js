import React, {useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
const BUDGET_AMOUNT = 100;

const API = "http://localhost:3001/sushis";

function App() {
  const [plates, setPlates] = useState([]);
    const plates_cost = plates.reduce((partialSum, a) => partialSum + a, 0);
    const remainingBalance = BUDGET_AMOUNT - plates_cost;
  const addPrice = (price) => {
  
    setPlates((plates) => [...plates, price]);
  }

  return (
    <div className="app">
      <SushiContainer addPrice={addPrice} remainingBalance={remainingBalance}/>
      <Table plates={plates} remainingBalance={remainingBalance} />
    </div>
  );
}

export default App;
