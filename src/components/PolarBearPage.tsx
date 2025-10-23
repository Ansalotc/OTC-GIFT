import { useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';

function PolarBearPage() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log('Audio autoplay prevented:', error);
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 flex items-center justify-center p-4 md:p-8">
      <audio ref={audioRef} loop>
        <source src="https://cdn.pixabay.com/audio/2022/03/10/audio_4a588a5995.mp3" type="audio/mpeg" />
      </audio>

      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative">
        <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center shadow-lg">
          <Heart className="w-10 h-10 text-white fill-white" />
        </div>

        <div className="absolute -top-8 right-8 text-6xl">
          <span className="inline-block animate-bounce">🐻</span>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-pink-400">A LETTER</span>
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
            FROM YOUR BHAI
          </h2>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-2xl">
            <p className="text-lg md:text-xl font-semibold text-rose-600 mb-2">
              Dear Sis 💖
            </p>
            <p className="text-base md:text-lg">
              Bas aaj Bhai Dooj ke din ek baat yaad dilani thi 💫
            </p>
          </div>

          <div className="pl-4 border-l-4 border-pink-300">
            <p className="text-base md:text-lg mb-4">
              Aap sirf meri behen nahi, balki <span className="font-semibold text-rose-600">meri life ka sabse special part</span> hain ❤️
            </p>
            <p className="text-base md:text-lg mb-4">
              Main shayad words mein apni feelings nahi keh paata,<br/>
              par mera dil hamesha aapko feel karva deta hai —
            </p>
            <p className="text-base md:text-lg font-medium text-pink-600">
              ki aap meri <span className="font-bold">strength</span>, meri <span className="font-bold">guide</span> aur meri <span className="font-bold">best friend</span> hain 💕
            </p>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-2xl">
            <p className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-3">
              Happy Bhai Dooj to my Big Sister — my cute Polar Bear 🐻💖
            </p>
            <p className="text-base md:text-lg mb-3">
              Aap ek <span className="font-semibold text-pink-500">full-time drama queen</span> aur <span className="font-semibold text-blue-500">half-time advisor</span> hain 😆
            </p>
            <p className="text-base md:text-lg mb-3">
              Kabhi daantti hain, kabhi chillati hain,<br/>
              par aapka care to <span className="font-semibold text-rose-600">world's best</span> hai — bina kuch kahe sab samajh jaati hain 💫
            </p>
            <p className="text-base md:text-lg">
              Aapka gussa bhi pyaara lagta hai <span className="text-sm">(kabhi kabhi 😜)</span>,<br/>
              aur aapka pyaar <span className="font-semibold text-pink-600">meri life ka sabse beautiful part</span> hai ❤️
            </p>
          </div>

          <div className="text-center bg-gradient-to-r from-pink-100 via-rose-100 to-amber-100 p-6 rounded-2xl">
            <p className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              Jahaan aap hain, wahan hamesha <span className="text-yellow-600">khush</span> rahiye
            </p>
            <p className="text-lg md:text-xl font-semibold text-gray-800">
              aur apni vibe se sab jagah <span className="text-amber-600">bright</span> kar dijiye ✨
            </p>
          </div>

          <div className="text-center pt-4">
            <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Love you my Polar Bear 🩵
            </p>
            <p className="text-lg md:text-xl mt-4 text-pink-500 font-medium italic">
              — With love, your brother 💝
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PolarBearPage;
