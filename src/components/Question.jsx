import { useState } from "react";
import AdventureImage from "../assets/adventure.svg";
import Guess from "./Guess";

const alphabet = ["A", "B", "C", "D"];

const Question = ({ title, flag = null, answers, correct, onNextClicked }) => {
  const [choice, setChoice] = useState(null);

  const getState = (i, choice, correct) => {
    if (i === correct) return "correct";
    if (i === choice) return "incorrect";
    return "default";
  };

  const renderGuesses = () =>
    answers.map((answer, i) => {
      const indicator = alphabet[i];
      return (
        <Guess
          key={indicator}
          indicator={indicator}
          title={answer}
          onClick={() => {
            if (choice !== null) return;
            setChoice(i);
          }}
          locked={choice !== null}
          state={choice !== null && getState(i, choice, correct)}
        />
      );
    });

  return (
    <div className="bg-white px-8 py-16 rounded-3xl relative">
      <img
        src={AdventureImage}
        alt=""
        className="w-40 absolute right-0 -top-20"
      />

      {flag && (
        <img
          src={flag}
          alt="A flag"
          className="h-14 rounded mb-7 shadow-flag"
        />
      )}
      <p className="text-2xl font-bold text-navy mb-8">{title}</p>
      <div className="flex flex-col gap-6">{renderGuesses()}</div>

      {choice !== null && (
        <button
          className="bg-gold rounded-xl px-9 py-4 text-lg font-bold text-white mt-6 ml-auto block"
          onClick={() => onNextClicked(choice === correct)}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Question;
