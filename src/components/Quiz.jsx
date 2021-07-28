import { useEffect, useState, useRef } from 'react';
import Countries from '../data/countries.json';
import useQuestion from '../hooks/useQuestion';
import Question from './Question';
import Results from './Results';

const Quiz = () => {
  const [countries, setCountries] = useState(Countries);
  const [question, nextQuestion] = useQuestion(countries);
  const [finished, setFinished] = useState(false);
  const score = useRef(0);

  useEffect(() => {
    setCountries(Countries);
  }, []);

  if (!question) return <div>Loading...</div>;

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
