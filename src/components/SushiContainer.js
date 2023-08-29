import React, {useState, useEffect} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";
const NUMBER_TO_DISPLAY = 4;

function SushiContainer({addPrice, remainingBalance }) {
  
const [sushis, setSushis] = useState([]);
const [start, setStart] = useState(0);
const showMore = () => {
  setStart((start) => start + NUMBER_TO_DISPLAY);
};

useEffect(() => {
  fetch("http://localhost:3001/sushis")
  .then((r) => r.json())
  .then((sushis) => setSushis(sushis))
}, []);

  const menu = sushis.slice(start, start + NUMBER_TO_DISPLAY).map((sushi) => {
    return <Sushi 
    key={sushi.id} sushi={sushi} 
    addPrice={addPrice} remainingBalance={remainingBalance}/>; 
  })

  return (
    <div className="belt">
      {menu}
      {/* <Sushi sushi={sushi}/> */}
      <MoreButton showMore={showMore}/>
    </div>
  );
}

export default SushiContainer;
