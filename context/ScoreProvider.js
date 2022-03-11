import React, { createContext, useState } from "react";

export const ScoreContext = createContext();

const ScoreProvider = (props) => {
  const initialValue = 0;
  const [score, setScore] = useState(initialValue);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  return (
    <ScoreContext.Provider value={{ score, setScore, questionIndex, setQuestionIndex, questions, setQuestions, answeredQuestions, setAnsweredQuestions }}>
      {props.children}
    </ScoreContext.Provider>
  );
};

export default ScoreProvider;
