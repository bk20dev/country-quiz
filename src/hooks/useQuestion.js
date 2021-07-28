import { useEffect, useState } from 'react';
import generateQuestion from '../utils/generateQuestion';

const useQuestion = (countries) => {
  const [question, setQuestion] = useState(null);

  const nextQuestion = () => {
    if (!countries) return;
    setQuestion(generateQuestion(countries));
  };

  useEffect(nextQuestion, [countries]);

  return [question, nextQuestion];
};

export default useQuestion;
