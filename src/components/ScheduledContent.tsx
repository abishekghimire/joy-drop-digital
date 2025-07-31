import { useState, useEffect } from "react";

export const ScheduledContent = ({ children }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isReleased, setIsReleased] = useState(false);

  useEffect(() => {
    const checkReleaseTime = () => {
      // August 1, 2025 at 12:00 AM (month 7 = August)
      const releaseTime = new Date(2025, 7, 2, 0, 0, 0);
      const now = new Date();
      const difference = releaseTime - now;

      if (difference <= 0) {
        setIsReleased(true);
      } else {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ hours, minutes, seconds });
      }
    };

    checkReleaseTime();
    const timer = setInterval(checkReleaseTime, 1000);
    return () => clearInterval(timer);
  }, []);

  if (isReleased) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 text-white p-6 relative overflow-hidden">
      {/* Floating Balloons */}
      <div className="absolute top-10 left-10 w-12 h-16 bg-red-400 rounded-full opacity-80 animate-float1"></div>
      <div className="absolute top-20 right-20 w-10 h-14 bg-yellow-300 rounded-full opacity-80 animate-float2"></div>
      <div className="absolute bottom-20 left-1/4 w-8 h-12 bg-blue-300 rounded-full opacity-80 animate-float3"></div>
      <div className="absolute bottom-1/3 right-1/4 w-14 h-18 bg-green-300 rounded-full opacity-80 animate-float4"></div>
      <div className="absolute top-1/4 left-1/3 w-11 h-15 bg-purple-300 rounded-full opacity-80 animate-float5"></div>

      {/* Confetti */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-yellow-300 rounded-sm opacity-80"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `confetti-fall ${
                Math.random() * 3 + 2
              }s linear infinite`,
              animationDelay: `${Math.random() * 2}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
              backgroundColor: `hsl(${Math.random() * 360}, 100%, 70%)`,
            }}
          />
        ))}
      </div>

      <div className="text-center max-w-2xl relative z-10">
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-shadow-lg shadow-pink-600">
          Birthday Surprise Coming! 🎉
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-medium">
          The celebration begins in:
        </p>

        <div className="flex justify-center gap-4 mb-10">
          <div className="bg-white/20 rounded-xl p-5 min-w-[90px] backdrop-blur-sm border-2 border-white/30 shadow-lg">
            <div className="text-4xl font-bold font-mono">
              {timeLeft.hours.toString().padStart(2, "0")}
            </div>
            <div className="text-sm font-medium mt-2">HOURS</div>
          </div>
          <div className="bg-white/20 rounded-xl p-5 min-w-[90px] backdrop-blur-sm border-2 border-white/30 shadow-lg">
            <div className="text-4xl font-bold font-mono">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </div>
            <div className="text-sm font-medium mt-2">MINUTES</div>
          </div>
          <div className="bg-white/20 rounded-xl p-5 min-w-[90px] backdrop-blur-sm border-2 border-white/30 shadow-lg">
            <div className="text-4xl font-bold font-mono">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </div>
            <div className="text-sm font-medium mt-2">SECONDS</div>
          </div>
        </div>

        <p className="text-xl font-medium">
          Get ready for an amazing birthday reveal at midnight!
        </p>
      </div>

      {/* Birthday cake animation at bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-6xl animate-bounce">
        🎂
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float1 {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        @keyframes float2 {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-5deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        @keyframes float3 {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(3deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        @keyframes float4 {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-3deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        @keyframes float5 {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-35px) rotate(7deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }
        .animate-float1 {
          animation: float1 4s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 5s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 6s ease-in-out infinite;
        }
        .animate-float4 {
          animation: float4 3.5s ease-in-out infinite;
        }
        .animate-float5 {
          animation: float5 4.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
