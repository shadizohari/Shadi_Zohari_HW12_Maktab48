import React, { useEffect, useState } from 'react'
import Menu from './components/Menu'
import Order from './components/Order'
import './font-en/font-en.css'
import './css/App.css';
import './css/index.css'


function App() {
  const [menu, setMenu] = useState([
    {
      id: 1,
      item: "Black Tea",
      explanation: "Brew with 100 c water for 180s.",
      temp: "100 c",
      time: 3.0
    }, {
      id: 2,
      item: "Green Tea",
      explanation: "Brew with 80 c water for 120s.",
      temp: "100 c",
      time: 2.0
    }, {
      id: 3,
      item: "White Tea",
      explanation: "Brew with 75 c water for 120s.",
      temp: "100 c",
      time: 2.0
    }, {
      id: 4,
      item: "Red Tea",
      explanation: "Brew with 50 c water for 100s.",
      temp: "100 c",
      time: 4.0
    }, {
      id: 5,
      item: "yellow Tea",
      explanation: "Brew with 100 c water for 180s.",
      temp: "100 c",
      time: 2.0
    }
  ])
  let [min, setMin] = useState("");
  let [second, setSecond] = useState(0);
  let [flagStart, setFlagStart] = useState(false);
  const [stateOrder, setStateOrder] = useState("")
  const addOrder = function (y) {
    setFlagStart(false)
    setMin(0)
    setSecond(0)
    let found = menu.find((item) => item.id == y)
    console.log(found)
    setStateOrder(found)
    setMin(found.time)
  }
  const start = function () {
    setFlagStart(true);
    setSecond(59)
    setMin(Number(min) - 1)
  }


  function tick() {
    if (Number(second) > 0) {
      setSecond(Number(second) - 1)
    } else if (second == 0 && min > 0) {
      setSecond(59)
      setMin(Number(min) - 1)
    } else if (second == 0 && min == 0) {
      setMin(0)
      setSecond(0)
      setFlagStart(false)
    }
  }

  useEffect(() => {
    if (flagStart) {
      let interval = setInterval(() => tick(), 1000);
      return () => {
        clearInterval(interval)
      }
    }
  }, [stateOrder, min, flagStart, second]);

  const cancel = function () {
    setMin(0)
    setSecond(0)
    setStateOrder("")
    setFlagStart(false)
  }
  const [stateDisplay, setStateDisplay] = useState("displayNone")
  const passStateDisplay = function () {
    return stateDisplay
  }
  const [seeMOreClass, setSeeMoreClass] = useState("display")
  const seeMore = function (x) {
    setStateDisplay("display");
    setSeeMoreClass("displayNone")
  }

  return (
    <div className="container">
      <div className="container-order">
        {(stateOrder) ? <Order
          item={stateOrder} titre={stateOrder.item} time={min} seconds={second} /> : false}
      </div>
      <hr/>
      <Menu listMenu={menu} addOrder={addOrder} passStateDisplay={passStateDisplay} />
      <div className="parent-see-more">
        <p className={`seemore ${seeMOreClass}`} onClick={seeMore}>see more</p>
      </div>
      <div className="parent-btn">
        <h1 onClick={cancel}>Cancel</h1>
        <h1 onClick={start}>Start Timer</h1>

      </div>
    </div>
  );
}

export default App;
