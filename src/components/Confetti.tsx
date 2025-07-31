// components/Confetti.tsx
export const Confetti = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full animate-confetti"
          style={{
            backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
            left: `${Math.random() * 100}%`,
            top: `${-10 + Math.random() * 20}%`,
            opacity: 0.7,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
  );
};
