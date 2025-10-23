import { useState } from 'react';
import WelcomePage from './components/WelcomePage';
import TicTacToePage from './components/TicTacToePage';
import PolarBearPage from './components/PolarBearPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'welcome' | 'chocolate' | 'bears'>('welcome');

  return (
    <div className="min-h-screen">
      {currentPage === 'welcome' && (
        <WelcomePage onNext={() => setCurrentPage('chocolate')} />
      )}
      {currentPage === 'chocolate' && (
        <TicTacToePage onComplete={() => setCurrentPage('bears')} />
      )}
      {currentPage === 'bears' && (
        <PolarBearPage />
      )}
    </div>
  );
}

export default App;
