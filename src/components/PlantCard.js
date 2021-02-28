import React, {useState} from "react";

function PlantCard({plant, addPlant}) {
  const [soldOut, setSoldOut] = useState(true)
  const [price,setPrice] = useState(plant.price)

  function handleClick(){
    setSoldOut(!soldOut)
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch (`http://localhost:6001/plants/${plant.id}`, {
        method: "PATCH",
        headers: {"Content-type": "application/json" },
        body: JSON.stringify({price})
      })
      .then((r)=> r.json())
      .then(addPlant)
  }



  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <form onSubmit={handleSubmit}> <input type="number" name="price" step="0.01" placeholder={plant.price} onChange={(e)=> setPrice(parseInt(e.target.value))} value={price} />
        <button type="submit">Change Price</button></form>
      {soldOut ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button  onClick={handleClick} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
