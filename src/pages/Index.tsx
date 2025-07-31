import { HeroSection } from "@/components/HeroSection";
import { PhotoGallery } from "@/components/PhotoGallery";
import { LetterSection } from "@/components/LetterSection";
import { PersonalMessage } from "@/components/PersonalMessage";
import { ScheduledContent } from "@/components/ScheduledContent";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScheduledContent>
        <HeroSection />
        <PhotoGallery />
        <LetterSection />
        <PersonalMessage />
      </ScheduledContent>
    </div>
  );
};

export default Index;
