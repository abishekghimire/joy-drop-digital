import { Card } from "@/components/ui/card";
import { Sparkles, Heart } from "lucide-react";

export const PersonalMessage = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-5xl font-bold text-foreground mb-6">
            Personal Message
          </h2>
          <p className="text-xl text-muted-foreground">
            A special note just for you
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 shadow-warm bg-gradient-to-br from-birthday-rose to-birthday-cream animate-fade-in">
            <div className="flex items-center mb-6">
              <Sparkles className="w-8 h-8 text-birthday-gold mr-3" />
              <h3 className="font-serif text-2xl font-bold text-foreground">
                What Makes You Special
              </h3>
            </div>
            <ul className="space-y-4 text-lg text-foreground">
              <li className="flex items-start">
                <Heart className="w-5 h-5 text-birthday-warm mr-3 mt-1 flex-shrink-0" />
                Your infectious laughter that brightens every room
              </li>
              <li className="flex items-start">
                <Heart className="w-5 h-5 text-birthday-warm mr-3 mt-1 flex-shrink-0" />
                The way you care for others with such genuine kindness
              </li>
              <li className="flex items-start">
                <Heart className="w-5 h-5 text-birthday-warm mr-3 mt-1 flex-shrink-0" />
                Your incredible strength and resilience
              </li>
              <li className="flex items-start">
                <Heart className="w-5 h-5 text-birthday-warm mr-3 mt-1 flex-shrink-0" />
                The unique perspective you bring to everything
              </li>
              <li className="flex items-start">
                <Heart className="w-5 h-5 text-birthday-warm mr-3 mt-1 flex-shrink-0" />
                Your ability to make ordinary moments extraordinary
              </li>
            </ul>
          </Card>
          
          <Card className="p-8 shadow-warm bg-gradient-to-br from-birthday-gold to-birthday-warm animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-6">
              <Sparkles className="w-8 h-8 text-birthday-rose mr-3" />
              <h3 className="font-serif text-2xl font-bold text-foreground">
                Birthday Wishes
              </h3>
            </div>
            <div className="space-y-4 text-lg text-foreground">
              <p>🌟 May every dream you have come true</p>
              <p>🎯 May you achieve all your goals with grace</p>
              <p>🌈 May your days be filled with color and joy</p>
              <p>💫 May love surround you always</p>
              <p>🎉 May this year be your most amazing yet</p>
              <p>✨ May you always remember how loved you are</p>
            </div>
          </Card>
        </div>
         */}
        <div
          className="mt-12 text-center animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <Card className="inline-block p-8 shadow-celebration bg-card/90 backdrop-blur-sm">
            <h3 className="font-serif text-3xl font-bold text-primary mb-4">
              Today We Celebrate YOU! 🎂
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Thank you for being the wonderful person you are. Your birthday is
              a celebration of all the joy, love, and light you bring into this
              world. Here's to many more years of happiness, adventure, and
              beautiful memories together!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
