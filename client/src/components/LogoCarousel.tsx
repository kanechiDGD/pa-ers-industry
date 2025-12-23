import { useState, useEffect } from "react";

const logos = [
  { src: "/badge-bbb.png", alt: "BBB", width: 100 },
  { src: "/badge-haag.png", alt: "HAAG", width: 100 },
  { src: "/badge-iicrc.png", alt: "IICRC", width: 100 },
  { src: "/badge-licensed.jpg", alt: "Licensed", width: 100 },
];

export default function LogoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-5xl">
        {/* Carousel container with fixed height */}
        <div className="flex items-center justify-center gap-6 h-40 px-4">
          {logos.map((logo, index) => (
            <div
              key={logo.alt}
              className={`flex-shrink-0 transition-all duration-500 ${
                index === currentIndex
                  ? "opacity-100 scale-100 w-36 h-36"
                  : "opacity-50 scale-75 w-24 h-24"
              }`}
            >
              {/* Individual frame for each logo with white background */}
              <div className="bg-white rounded-xl p-4 shadow-lg border-2 border-slate-100 flex items-center justify-center w-full h-full overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain"
                  style={{ maxWidth: `${logo.width}px` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {logos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "bg-primary w-8 h-3"
                  : "bg-primary/30 w-3 h-3 hover:bg-primary/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
