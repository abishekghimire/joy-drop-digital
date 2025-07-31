import { PhotoModal } from "./PhotoModal";
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
              className="group animate-fade-in relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <PhotoModal src={photo.src} alt={photo.alt}>
                <div className="relative overflow-hidden rounded-lg shadow-warm cursor-pointer transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-celebration">
                  {/* Floating sparkles effect */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute bg-yellow-100 rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-500"
                        style={{
                          width: `${Math.random() * 6 + 2}px`,
                          height: `${Math.random() * 6 + 2}px`,
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animation: `float ${
                            Math.random() * 3 + 2
                          }s infinite ease-in-out`,
                          animationDelay: `${Math.random() * 2}s`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Main image with parallax effect */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                      style={{
                        transformOrigin: `${
                          index % 2 ? "left" : "right"
                        } center`,
                      }}
                    />
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content with slide-up effect */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      <h3 className="font-serif text-xl font-semibold text-white">
                        {photo.title}
                      </h3>
                      <p className="text-sm text-white/90 mt-1">
                        Click to view larger
                      </p>
                    </div>
                  </div>

                  {/* Border animation */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 transition-all duration-500 rounded-lg pointer-events-none" />
                </div>
              </PhotoModal>
            </div>
          ))}
        </div>
      </div>

      {/* Add global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        .shadow-warm {
          box-shadow: 0 4px 20px rgba(255, 200, 150, 0.3);
        }
        .shadow-celebration {
          box-shadow: 0 8px 40px rgba(255, 215, 0, 0.4),
            0 0 20px rgba(255, 100, 100, 0.3);
        }
      `}</style>
    </section>
  );
};
