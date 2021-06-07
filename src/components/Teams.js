import React, { useState } from "react";

export const Teams = () => {
  const [ducksScore, setDucksScore] = useState(0);
  const [catsScore, setCatsScore] = useState(0);
  const [ducksShotPerc, setDucksShotPerc] = useState(0);
  const [CatsShotPerc, setCatsShotPerc] = useState(0);

//   scoreSound = new Audio("swish+2.mp3")
//   missSound = new Audio("Back+Board.mp3")

  return (
      <div>
          <h2>This will display Team 1</h2>
          <h2>This will display team 2</h2>
      </div>
  )
};

export default Teams;
