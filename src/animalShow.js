import React from "react";
import { useState } from "react";
import "./animalshow.css";

// Import imgs for each type of animal
import AsianElephants from "./assets/images/AsianElephants.jpg";
import Chimpanzees from "./assets/images/Chimpanzees.jpg";
import Leopards from "./assets/images/Leopards.jpg";
import Penguins from "./assets/images/Penguins.jpg";
import PolarBear from "./assets/images/PolarBear.jpg";
import Rhinos from "./assets/images/Rhinos.jpg";
import Tigers from "./assets/images/Tigers.jpg";
import Whales from "./assets/images/Whales.jpg";
import Vaquitas from "./assets/images/Vaquitas.jpg";
import Sharks from "./assets/images/Sharks.jpg";
import SeaTurtles from "./assets/images/SeaTurtles.jpg";

// Import img for the heart
import heart from "./assets/images/heart.svg";

// Object to map animal names to their respective imgs
const picMap = {
  AsianElephants,
  Chimpanzees,
  Leopards,
  Penguins,
  PolarBear,
  Rhinos,
  Tigers,
  Whales,
  Vaquitas,
  Sharks,
  SeaTurtles,
};

function AnimalShow({ type }) {
  // Use the useState hook to manage state for the number of clicks
  const [clicks, setClicks] = useState(0);

  // Function to increment the number of clicks when invoked
  const handleClicks = () => {
    setClicks(clicks + 1);
  };

  // Render the AnimalShow component with the animal's type and click count
  return (
    <div className="animal-show" onClick={handleClicks}>
      {/* Wrapper for the image and text */}
      <div className="wrapper">
        {/* Animal image */}
        <img className="animal" src={picMap[type]} alt="animal" />
        <p>You saved : {type}</p>
      </div>
      {/* Heart image with a width that increases with each click */}
      <img
        className="heart"
        src={heart}
        alt="heart"
        style={{ width: 10 + 10 * clicks + "px" }}
      />
    </div>
  );
}

export default AnimalShow;
