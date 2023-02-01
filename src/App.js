import React from "react";
import { useState } from "react";
import AnimalShow from "./animalShow";
import "./app.css";

function App() {
  // Use the useState hook to manage state for the animals array
  const [animals, setAnimals] = useState([]);

  // Function to get a random animal name from a hard-coded list
  const getRandomAnimal = () => {
    const animals = [
      "AsianElephants",
      "Chimpanzees",
      "Leopards",
      "Penguins",
      "PolarBear",
      "Rhinos",
      "Tigers",
      "Whales",
      "Vaquitas",
      "Sharks",
      "SeaTurtles",
    ];
    return animals[Math.floor(Math.random() * animals.length)];
  };

  // Function to add a random animal to the animals array when invoked
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  // Map over the animals array to create an array of AnimalShow components
  const renderdAnimals = animals.map((animal, index) => {
    return <AnimalShow key={index} type={animal} />;
  });

  // Render the App component with a button and a list of animals
  return (
    <div className="app">
      <h3>11 animals are about to be extinct</h3>
      {/* Button with an onClick handler that invokes handleClick */}
      <button onClick={handleClick}>SAVE me from EXTINCTION</button>
      {/* Div containing the list of AnimalShow components */}
      <div className="animal-list">{renderdAnimals} </div>
    </div>
  );
}

export default App;
