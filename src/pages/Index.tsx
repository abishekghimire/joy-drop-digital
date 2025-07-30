import { HeroSection } from "@/components/HeroSection";
import { PhotoGallery } from "@/components/PhotoGallery";
import { LetterSection } from "@/components/LetterSection";
import { PersonalMessage } from "@/components/PersonalMessage";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PhotoGallery />
      <LetterSection />
      <PersonalMessage />
    </div>
  );
};

export default Index;