import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

type CellValue = 'X' | 'chocolate' | null;

interface TicTacToePageProps {
  onComplete: () => void;
}

function TicTacToePage({ onComplete }: TicTacToePageProps) {
  const [board, setBoard] = useState<CellValue[]>(Array(9).fill(null));
  const [showSuccess, setShowSuccess] = useState(false);
  const [animatingCell, setAnimatingCell] = useState<number | null>(null);

  const chocolatePositions = [0, 8];

  useEffect(() => {
    const newBoard = [...board];
    chocolatePositions.forEach(pos => {
      newBoard[pos] = 'chocolate';
    });
    setBoard(newBoard);
  }, []);

  const handleCellClick = (index: number) => {
    if (board[index] !== null) return;

    setAnimatingCell(index);
    setTimeout(() => {
      const newBoard = [...board];
      newBoard[index] = 'X';
      setBoard(newBoard);
      setAnimatingCell(null);

      if (checkWin(newBoard)) {
        setTimeout(() => {
          setShowSuccess(true);
          setTimeout(() => {
            onComplete();
          }, 3000);
        }, 300);
      }
    }, 200);
  };

  const checkWin = (currentBoard: CellValue[]): boolean => {
    const filledCells = currentBoard.filter(cell => cell !== null).length;
    return filledCells === 9;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 flex items-center justify-center p-6 relative">
      <div className="text-center space-y-8">
        <div className="flex items-center justify-center gap-3">
          <h1 className="text-4xl md:text-5xl font-bold text-rose-600">
            Fill in the blanks to get a chocolate
          </h1>
          <div className="w-10 h-10 bg-gradient-to-br from-amber-700 to-amber-900 rounded transform rotate-45 shadow-lg"></div>
        </div>

        <div className="inline-block bg-white p-8 rounded-3xl shadow-2xl">
          <div className="grid grid-cols-3 gap-4">
            {board.map((cell, index) => (
              <button
                key={index}
                onClick={() => handleCellClick(index)}
                disabled={cell !== null || showSuccess}
                className={`
                  w-24 h-24 md:w-28 md:h-28 rounded-2xl border-4 border-pink-200
                  flex items-center justify-center text-5xl font-bold
                  transition-all duration-300
                  ${cell === null ? 'bg-white hover:bg-pink-50 hover:scale-105 hover:border-pink-300 cursor-pointer' : 'cursor-default'}
                  ${animatingCell === index ? 'scale-110 bg-pink-100' : ''}
                  ${cell === 'X' ? 'bg-pink-50' : ''}
                  ${cell === 'chocolate' ? 'bg-gradient-to-br from-pink-100 to-rose-100' : ''}
                `}
              >
                {cell === 'X' && (
                  <X className="w-16 h-16 text-pink-400 animate-scaleIn" strokeWidth={3} />
                )}
                {cell === 'chocolate' && (
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-700 to-amber-900 rounded transform rotate-45 shadow-lg animate-bounce"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white rounded-3xl p-12 max-w-md mx-4 text-center space-y-6 shadow-2xl animate-scaleIn">
            <div className="grid grid-cols-3 gap-2 mb-6">
              {board.map((cell, index) => (
                <div
                  key={index}
                  className={`
                    w-16 h-16 rounded-xl border-3 border-pink-200
                    flex items-center justify-center
                    ${cell === 'X' ? 'bg-pink-50' : 'bg-gradient-to-br from-pink-100 to-rose-100'}
                  `}
                >
                  {cell === 'X' && (
                    <X className="w-10 h-10 text-pink-400" strokeWidth={3} />
                  )}
                  {cell === 'chocolate' && (
                    <div className="w-6 h-6 bg-gradient-to-br from-amber-700 to-amber-900 rounded transform rotate-45 shadow-md"></div>
                  )}
                </div>
              ))}
            </div>

            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
              You successfully
            </h2>
            <p className="text-3xl font-semibold text-rose-500">
              unlocked chocolate treat, yay!
            </p>

            <div className="flex justify-center gap-3 mt-8">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-700 to-amber-900 rounded-lg transform rotate-12 shadow-xl animate-bounce"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-amber-700 to-amber-900 rounded-lg transform -rotate-6 shadow-xl animate-bounce animation-delay-200"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-amber-700 to-amber-900 rounded-lg transform rotate-6 shadow-xl animate-bounce animation-delay-400"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TicTacToePage;
