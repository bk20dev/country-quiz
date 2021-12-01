import { useEffect, useRef, useState } from "react";
import useQuestion from "../hooks/useQuestion";
import Loading from "./Loading";
import Question from "./Question";
import Results from "./Results";

const Quiz = () => {
  const [countries, setCountries] = useState(null);
  const [question, nextQuestion] = useQuestion(countries);
  const [finished, setFinished] = useState(false);
  const score = useRef(0);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      return await response.json();
    };

    fetchCountries()
      .then((countries) => setCountries(countries))
      .catch(console.warn);
  }, []);

  if (!question) return <Loading />;

  if (finished)
    return (
      <Results
        score={score.current}
        onRetryClicked={() => {
          setFinished(false);
          nextQuestion();
          score.current = 0;
        }}
      />
    );

  const { id, title, flag, answers, correct } = question;

  return (
    <Question
      key={id}
      title={title}
      flag={flag}
      answers={answers}
      correct={correct}
      onNextClicked={(correct) => {
        if (correct) {
          score.current++;
          nextQuestion();
        } else {
          setFinished(true);
        }
      }}
    />
  );
};

export default Quiz;
