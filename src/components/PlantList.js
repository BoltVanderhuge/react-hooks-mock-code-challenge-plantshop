import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, addPlant}) {
  const plantsArray = plants.map((plant)=>{
  return (
    <PlantCard 
    addPlant={addPlant}
    plant={plant} 
    key={plant.id}
    />
  )
  })
  return (
    <ul className="cards">{plantsArray}</ul>
  );
}

export default PlantList;
