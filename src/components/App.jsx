import Question from './Question';

const answers = ['Vietnam', 'Malaysia', 'Sweden', 'Austria'];

const App = () => (
  <div>
    <div className="max-w-md mx-auto pt-32">
      <header className="text-4xl font-bold uppercase text-white mb-6">
        Country Quiz
      </header>
      <Question
        title="Kuala Lumpur is the capital of"
        answers={answers}
        correct={1}
        onNextClicked={console.log}
      />
    </div>
  </div>
);

export default App;
