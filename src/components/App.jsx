import Footer from './Footer';
import Quiz from './Quiz';

const App = () => (
  <div className="h-full">
    <div
      className="max-w-md mx-auto"
      style={{ paddingTop: 'calc((100vh - 48rem) / 2)' }}
    >
      <header className="text-4xl font-bold uppercase text-white my-6">
        Country Quiz
      </header>
      <Quiz />
    </div>
    <Footer />
  </div>
);

export default App;
