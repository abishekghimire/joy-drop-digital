import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const LetterSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-warm">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-5xl font-bold text-foreground mb-6">
            A Letter for You
          </h2>
          <p className="text-xl text-muted-foreground">
            Some heartfelt words on your special day
          </p>
        </div>

        <Card className="relative p-8 md:p-12 shadow-warm bg-card/80 backdrop-blur-sm animate-fade-in">
          <Quote className="absolute top-6 left-6 w-8 h-8 text-birthday-gold opacity-50" />

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-xl leading-relaxed mb-6 font-medium">
              Dear Nobi,
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Today marks another beautiful chapter in the story of your life,
              and I couldn't be more grateful to be part of it. Your presence
              brings so much light and joy to everyone around you, and watching
              you grow and achieve your dreams has been nothing short of
              inspiring.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Every moment we've shared together has been a treasure – from the
              quiet conversations that last for hours to the spontaneous
              adventures that become our favorite memories. Your kindness,
              wisdom, and genuine spirit make the world a brighter place.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              As you celebrate another year of life, I want you to know how much
              you mean to so many people. Your dreams are valid, your goals are
              achievable, and your happiness matters more than you know.
            </p>

            <div className="mt-8 text-right">
              <p className="text-lg font-serif italic text-birthday-warm">
                With love and best wishes,
              </p>
              <p className="text-2xl font-serif font-bold text-primary mt-2">
                Yours, Stranger
              </p>
            </div>
          </div>

          <Quote className="absolute bottom-6 right-6 w-8 h-8 text-birthday-gold opacity-50 rotate-180" />
        </Card>
      </div>
    </section>
  );
};
