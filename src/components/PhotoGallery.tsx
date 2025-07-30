import { PhotoModal } from "./PhotoModal";
import cakeImage from "@/assets/birthday-cake.jpg";
import memoriesImage from "@/assets/birthday-memories.jpg";
import giftsImage from "@/assets/birthday-gifts.jpg";
import photoOne from "@/assets/door.jpg";
import photoTwo from "@/assets/cuties.jpg";
import photoThree from "@/assets/face-hide.jpg";
import photoFour from "@/assets/flower.jpg";
import photoFive from "@/assets/mirror.jpg";
import photoSix from "@/assets/pose.jpg";
import photoSeven from "@/assets/stu.jpg";
import photoEight from "@/assets/sari.jpg";
import photoNine from "@/assets/cartoon.jpg";

const photos = [
  {
    src: photoTwo,
    alt: "Students",
    title: "Sweet Moments",
  },
  {
    src: photoSeven,
    alt: "Students",
    title: "Sweet Moments",
  },
  {
    src: photoOne,
    alt: "Birthday Cake",
    title: "Sweet Moments",
  },
  {
    src: photoThree,
    alt: "Birthday Cake",
    title: "Sweet Moments",
  },
  {
    src: photoFive,
    alt: "Birthday Cake",
    title: "Sweet Moments",
  },
  {
    src: photoSix,
    alt: "Birthday Cake",
    title: "Sweet Moments",
  },

  {
    src: photoFour,
    alt: "Birthday Cake",
    title: "Sweet Moments",
  },

  {
    src: photoEight,
    alt: "Birthday Cake",
    title: "Sweet Moments",
  },
  {
    src: photoNine,
    alt: "Birthday Cake",
    title: "Sweet Moments",
  },
];

export const PhotoGallery = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-5xl font-bold text-foreground mb-6">
            Beautiful Moments
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of special moments and memories to celebrate this
            wonderful day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <PhotoModal src={photo.src} alt={photo.alt}>
                <div className="relative overflow-hidden rounded-lg shadow-warm cursor-pointer transition-all duration-300 group-hover:scale-105 group-hover:shadow-celebration">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-serif text-xl font-semibold">
                      {photo.title}
                    </h3>
                    <p className="text-sm text-white/90">
                      Click to view larger
                    </p>
                  </div>
                </div>
              </PhotoModal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
