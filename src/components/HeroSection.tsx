import { Heart, Gift, Cake, Sparkles } from "lucide-react";
import { Balloon } from "./Balloon";
import heroImage from "@/assets/birthday-hero.jpg";
import { Confetti } from "./Confetti";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden isolate">
      {/* Background Image with parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 transform-gpu"
        style={{
          backgroundImage: `url(${heroImage})`,
          willChange: "transform",
          scale: "1.1",
          transition: "transform 0.5s ease-out",
        }}
      />

      {/* Gradient Overlay with animated shimmer */}
      <div className="absolute inset-0 bg-gradient-to-br from-birthday-warm/60 via-birthday-rose/30 to-birthday-gold/40 animate-gradient-shimmer" />

      {/* Floating Elements with more dynamic animations */}
      <div className="absolute top-20 left-10 animate-float-slow">
        <Heart className="w-10 h-10 text-birthday-rose animate-pulse" />
      </div>
      <div
        className="absolute top-32 right-16 animate-float-medium"
        style={{ animationDelay: "1.2s" }}
      >
        <Gift className="w-12 h-12 text-birthday-gold animate-wiggle" />
      </div>
      <div
        className="absolute bottom-32 left-20 animate-float-fast"
        style={{ animationDelay: "2.4s" }}
      >
        <Cake className="w-14 h-14 text-birthday-warm animate-bounce" />
      </div>

      {/* Sparkle elements */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-sparkle opacity-0"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${Math.random() * 12 + 8}px`,
          }}
        >
          <Sparkles className="text-birthday-gold" />
        </div>
      ))}

      {/* Enhanced Balloon Cluster with more natural movement */}
      <div className="balloon-cluster">
        {[
          {
            color: "#ef4444",
            size: "small",
            delay: 0.5,
            pos: "top-16 left-1/4",
          },
          {
            color: "#3b82f6",
            size: "medium",
            delay: 1.5,
            pos: "top-24 right-1/4",
          },
          {
            color: "#22c55e",
            size: "small",
            delay: 0.8,
            pos: "top-40 left-1/3",
          },
          {
            color: "#a855f7",
            size: "large",
            delay: 2.2,
            pos: "top-28 right-1/3",
          },
          {
            color: "#eab308",
            size: "small",
            delay: 1.8,
            pos: "bottom-40 right-10",
          },
          {
            color: "#ec4899",
            size: "medium",
            delay: 0.3,
            pos: "bottom-48 left-1/2",
          },
          {
            color: "#f97316",
            size: "small",
            delay: 2.5,
            pos: "top-60 left-16",
          },
          {
            color: "#06b6d4",
            size: "medium",
            delay: 1.2,
            pos: "bottom-60 right-20",
          },
          {
            color: "#84cc16",
            size: "small",
            delay: 3,
            pos: "top-80 right-1/5",
          },
          {
            color: "#f59e0b",
            size: "medium",
            delay: 2.8,
            pos: "bottom-80 left-1/5",
          },
        ].map((balloon, i) => (
          <div
            key={i}
            className={`absolute ${balloon.pos} animate-float-balloon`}
            style={{ animationDelay: `${balloon.delay}s` }}
          >
            <Balloon color={balloon.color} size={balloon.size} />
          </div>
        ))}
      </div>

      {/* Confetti explosion */}
      <Confetti />

      {/* Main Content with enhanced typography and animations */}
      <div className="relative z-10 text-center px-6 animate-fade-in-up">
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-foreground mb-6">
          <span className="bg-gradient-to-r from-birthday-rose via-birthday-warm to-birthday-gold bg-clip-text text-transparent">
            Happy Birthday!
          </span>
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
          Celebrating you today — your light, your laughter, and all the
          memories we've made. Here's to many more unforgettable moments
          together!{" "}
          <span
            className="inline-block animate-jump"
            style={{ animationDelay: "0.5s" }}
          >
            🎉
          </span>
        </p>

        <div className="inline-block bg-card/80 backdrop-blur-lg px-8 py-4 rounded-full shadow-celebration hover:scale-105 transition-transform duration-300">
          <p className="text-lg md:text-xl font-medium text-foreground flex items-center gap-2">
            <span className="animate-spin-slow">✨</span>
            Wishing you endless joy and happiness
            <span className="animate-spin-slow-reverse">✨</span>
          </p>
        </div>
      </div>

      {/* Birthday candle flicker effect in corners */}
      <div className="absolute bottom-8 left-8 w-12 h-16 bg-gradient-to-t from-yellow-200 to-yellow-500 rounded-b-lg animate-candle-flicker opacity-80"></div>
      <div
        className="absolute bottom-8 right-8 w-12 h-16 bg-gradient-to-t from-yellow-200 to-yellow-500 rounded-b-lg animate-candle-flicker opacity-80"
        style={{ animationDelay: "0.3s" }}
      ></div>
    </section>
  );
};
