import React from "react"
import MoreButton from "./MoreButton"
import Sushi from "./Sushi"

function SushiContainer({ sushis, handleMoney, placePlate }) {
  const displaySushis = sushis.slice(0, 4).map((sushi) => {
    return (
      <Sushi
        placePlate={placePlate}
        handleMoney={handleMoney}
        key={sushi.id}
        name={sushi.name}
        image={sushi.img_url}
        price={sushi.price}
      />
    )
  })
  return (
    <div className="belt">
      {displaySushis}
      <MoreButton displaySushis={displaySushis} />
    </div>
  )
}

export default SushiContainer
