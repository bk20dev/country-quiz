import _ from 'lodash';

export const generateCapitalQuestion = (countries) => {
  countries = countries.filter((country) => country.capital);

  const answers = _.chain(countries).sampleSize(4).shuffle().value();
  const correct = Math.floor(Math.random() * answers.length);

  return {
    id: Date.now(),
    title: `${answers[correct].capital} is the capital of`,
    answers: answers.map((country) => country.name),
    correct,
  };
};

export const generateFlagQuestion = (countries) => {
  const answers = _.chain(countries).sampleSize(4).shuffle().value();
  const correct = Math.floor(Math.random() * answers.length);

  return {
    id: Date.now(),
    title: 'Which country this flag belongs to?',
    flag: answers[correct].flag,
    answers: answers.map((country) => country.name),
    correct,
  };
};

const generateQuestion = (countries) => {
  const generators = [generateCapitalQuestion, generateFlagQuestion];
  return _.sample(generators)(countries);
};

export default generateQuestion;
