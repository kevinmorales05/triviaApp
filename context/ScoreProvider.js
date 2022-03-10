import React, { createContext, useState } from "react";

export const ScoreContext = createContext();

const ScoreProvider = (props) => {
  const initialValue = 0;
  const [score, setScore] = useState(initialValue);
  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {props.children}
    </ScoreContext.Provider>
  );
};

export default ScoreProvider;
