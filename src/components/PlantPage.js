import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")
  
const url = `http://localhost:6001/plants`
  useEffect(() => {
    fetch(url)
  .then(response => response.json())
  .then(data => setPlants(data));
  }, [])

  function handleAddPlant(plant){
    
    setPlants([...plants, plant])
  }

  const searchedPlants = plants.filter((plant) => 
     plant.name.toUpperCase().includes(search.toUpperCase())
  )

  return (
    <main>
      <NewPlantForm addPlant={handleAddPlant} />
      <Search search={search} handleSearch={setSearch}/>
      <PlantList plants={searchedPlants} addPlant={handleAddPlant}/>
    </main>
  );
}

export default PlantPage;
