import Guess from './Guess';

const App = () => (
  <div>
    <Guess indicator="A" title="Vietnam" state="incorrect" />
    <Guess indicator="B" title="Malaysia" state="correct" />
    <Guess indicator="C" title="Sweden" />
    <Guess indicator="D" title="Austria" />
  </div>
);

export default App;
