import WinnersImage from '../assets/winners.svg';

const Results = ({ score, onRetryClicked }) => (
  <div className="flex flex-col items-center text-center gap-16 bg-white p-8 rounded-3xl">
    <img src={WinnersImage} alt="" className="w-60" />
    <div>
      <p className="text-5xl font-bold text-navy mb-4">Results</p>
      <p className="text-lg text-navy font-medium">
        You got <span className="text-4xl font-bold text-green">{score}</span>{' '}
        correct answers
      </p>
    </div>
    <button
      className="border-2 border-navy font-semibold text-navy py-4 px-16 rounded-xl hover:border-gold hover:bg-gold hover:text-white"
      onClick={onRetryClicked}
    >
      Try again
    </button>
  </div>
);

export default Results;
