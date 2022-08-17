import React, { useState } from "react"

function Sushi({ name, image, price, handleMoney, placePlate }) {
  const [eaten, setEaten] = useState(false)
  function handleEaten(e) {
    setEaten(!eaten)
    handleMoney(price)
    placePlate(e)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEaten}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : <img src={image} alt={name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi
