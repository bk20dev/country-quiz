import { useEffect, useState } from 'react';
import Countries from '../data/countries.json';
import useQuestion from '../hooks/useQuestion';
import Question from './Question';

const Quiz = () => {
  const [countries, setCountries] = useState(Countries);
  const [question, nextQuestion] = useQuestion(countries);

  useEffect(() => {
    setCountries(Countries);
  }, []);

  if (!question) return <div>Loading...</div>;

  const { id, title, flag, answers, correct } = question;

  return (
    <Question
      key={id}
      title={title}
      flag={flag}
      answers={answers}
      correct={correct}
      onNextClicked={nextQuestion}
    />
  );
};

export default Quiz;
