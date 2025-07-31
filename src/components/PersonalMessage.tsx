import { Card } from "@/components/ui/card";
import { Sparkles, Heart } from "lucide-react";

export const PersonalMessage = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-5xl font-bold text-foreground mb-6">
            With all love
          </h2>
          <p className="text-xl text-muted-foreground">
            A special note just for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card className="p-8 shadow-warm-xl bg-gradient-to-br from-pink-50 to-amber-50 border border-pink-100 animate-fade-in">
            <div className="flex items-center mb-6">
              <Sparkles className="w-8 h-8 text-birthday-gold mr-3" />
              <h3 className="font-serif text-2xl font-bold text-foreground">
                ✨
              </h3>
            </div>
            <div className="space-y-4 text-lg text-foreground">
              <p>
                Today isn't just another day, it's a gentle reminder of how much
                brighter the world is with you in it.
              </p>
              <p>
                Your presence is a gift. The way you smile, listen, and care
                leaves a lasting imprint on everyone lucky enough to know you.
              </p>
            </div>
          </Card>

          {/* Card 2 */}
          <Card
            className="p-8 shadow-warm-xl bg-gradient-to-br from-amber-50 to-rose-50 border border-amber-100 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 text-birthday-rose mr-3" />
              <h3 className="font-serif text-2xl font-bold text-foreground">
                💖
              </h3>
            </div>
            <div className="space-y-4 text-lg text-foreground">
              <p>
                You have a heart that radiates kindness, a spirit that inspires,
                and a soul that makes others feel truly seen and loved.
              </p>
            </div>
          </Card>

          {/* Card 3 */}
          <Card
            className="p-8 shadow-warm-xl bg-gradient-to-br from-rose-50 to-yellow-50 border border-rose-100 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center mb-6">
              <Sparkles className="w-8 h-8 text-birthday-gold mr-3" />
              <h3 className="font-serif text-2xl font-bold text-foreground">
                🎂
              </h3>
            </div>
            <div className="space-y-4 text-lg text-foreground">
              <p>
                On your birthday, I hope you pause and feel the deep love that
                surrounds you — from those near and far, past and present.
              </p>
            </div>
          </Card>

          {/* Card 4 */}
          <Card
            className="p-8 shadow-warm-xl bg-gradient-to-br from-yellow-50 to-pink-50 border border-yellow-100 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 text-birthday-rose mr-3" />
              <h3 className="font-serif text-2xl font-bold text-foreground">
                🌟
              </h3>
            </div>
            <div className="space-y-4 text-lg text-foreground">
              <p>
                Never forget how incredibly special you are. You deserve all the
                magic this life has to offer.
              </p>
            </div>
          </Card>

          {/* Card 5 */}
          <Card
            className="p-8 shadow-warm-xl bg-gradient-to-br from-pink-50 to-amber-50 border border-pink-100 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center mb-6">
              <Sparkles className="w-8 h-8 text-birthday-gold mr-3" />
              <h3 className="font-serif text-2xl font-bold text-foreground">
                💌
              </h3>
            </div>
            <div className="space-y-4 text-lg text-foreground">
              <p className="font-semibold text-birthday-rose">
                Happy Birthday Nobi,with all the love in the world, just for
                you. 🎈
              </p>
            </div>
          </Card>

          {/* Card 6 - Photo/Quote Card */}
          <Card
            className="p-8 shadow-warm-xl bg-gradient-to-br from-amber-50 to-rose-50 border border-amber-100 flex flex-col items-center justify-center animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="text-6xl mb-4"></div>
            <h3 className="font-serif text-3xl font-bold text-center text-birthday-rose mb-4">
              🎉
            </h3>
            <p className="text-lg text-center text-foreground">
              Today is all about celebrating the wonderful person you are!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
