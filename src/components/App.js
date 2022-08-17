import React, { useState, useEffect } from "react"
import SushiContainer from "./SushiContainer"
import Table from "./Table"

const API = "http://localhost:3001/sushis"
function App() {
  const [money, setMoney] = useState(200)
  const [sushis, setSushis] = useState([])
  useEffect(() => {
    fetch("http://localhost:3001/sushis")
      .then((r) => r.json())
      .then((data) => setSushis(data))
  }, [])

  function handleMoney(transaction) {
    setMoney(money - transaction)
    console.log(transaction)
  }
  function placePlate(e) {
    // stuck here :()
    console.log(e)
  }

  return (
    <div className="app">
      <SushiContainer
        sushis={sushis}
        placePlate={placePlate}
        handleMoney={handleMoney}
      />
      <Table platePlate={placePlate} money={money} />
    </div>
  )
}

export default App
