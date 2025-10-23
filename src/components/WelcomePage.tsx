import { Heart, Sparkles } from 'lucide-react';

interface WelcomePageProps {
  onNext: () => void;
}

function WelcomePage({ onNext }: WelcomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-amber-100 flex items-center justify-center p-6">
      <div className="text-center space-y-12 animate-fadeIn">
        <div className="space-y-6">
          <div className="flex justify-center gap-4 mb-8">
            <Sparkles className="w-12 h-12 text-pink-500 animate-pulse" />
            <Heart className="w-16 h-16 text-rose-500 animate-bounce" />
            <Sparkles className="w-12 h-12 text-pink-500 animate-pulse" />
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-amber-600 animate-slideDown">
            Happy Bhai Dooj
          </h1>

          <p className="text-4xl md:text-5xl font-semibold text-rose-600 animate-slideUp">
            Dear Polar Bear 🐻‍❄️
          </p>

          <div className="text-2xl text-gray-700 space-y-2 animate-fadeIn animation-delay-500">
            <p>Wishing you joy, happiness,</p>
            <p>and all the sweetness in the world!</p>
          </div>
        </div>

        <button
          onClick={onNext}
          className="group relative px-12 py-4 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white text-xl font-semibold rounded-full shadow-2xl hover:shadow-pink-300 transition-all duration-300 hover:scale-110 animate-fadeIn animation-delay-1000"
        >
          <span className="relative z-10">Next</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;
