import { Heart, Gift, Cake, CircleDot } from "lucide-react";
import heroImage from "@/assets/birthday-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-warm" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Heart className="w-8 h-8 text-birthday-rose animate-sparkle" />
      </div>
      <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
        <Gift className="w-10 h-10 text-birthday-gold animate-sparkle" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Cake className="w-12 h-12 text-birthday-warm animate-sparkle" />
      </div>
      
      {/* Floating Balloons */}
      <div className="absolute top-16 left-1/4 animate-float" style={{ animationDelay: '0.5s' }}>
        <CircleDot className="w-6 h-6 text-red-400 animate-sparkle" />
      </div>
      <div className="absolute top-24 right-1/4 animate-float" style={{ animationDelay: '1.5s' }}>
        <CircleDot className="w-8 h-8 text-blue-400 animate-sparkle" />
      </div>
      <div className="absolute top-40 left-1/3 animate-float" style={{ animationDelay: '0.8s' }}>
        <CircleDot className="w-7 h-7 text-green-400 animate-sparkle" />
      </div>
      <div className="absolute top-28 right-1/3 animate-float" style={{ animationDelay: '2.2s' }}>
        <CircleDot className="w-9 h-9 text-purple-400 animate-sparkle" />
      </div>
      <div className="absolute bottom-40 right-10 animate-float" style={{ animationDelay: '1.8s' }}>
        <CircleDot className="w-6 h-6 text-yellow-400 animate-sparkle" />
      </div>
      <div className="absolute bottom-48 left-1/2 animate-float" style={{ animationDelay: '0.3s' }}>
        <CircleDot className="w-8 h-8 text-pink-400 animate-sparkle" />
      </div>
      <div className="absolute top-60 left-16 animate-float" style={{ animationDelay: '2.5s' }}>
        <CircleDot className="w-7 h-7 text-orange-400 animate-sparkle" />
      </div>
      <div className="absolute bottom-60 right-20 animate-float" style={{ animationDelay: '1.2s' }}>
        <CircleDot className="w-6 h-6 text-cyan-400 animate-sparkle" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <h1 className="font-serif text-6xl md:text-8xl font-bold text-foreground mb-6 bg-gradient-celebration bg-clip-text text-transparent">
          Happy Birthday!
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Today we celebrate you and all the wonderful moments we've shared together. 
          Here's to another year of beautiful memories! 🎉
        </p>
        <div className="inline-block bg-card/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-warm">
          <p className="text-lg font-medium text-foreground">
            Wishing you endless joy and happiness ✨
          </p>
        </div>
      </div>
    </section>
  );
};